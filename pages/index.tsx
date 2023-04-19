import ExchangeList from "../components/ExchangeList/ExchangeList";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(100);

  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/exchanges/?per_page=${pageSize}&page=${pageIndex}`,
    fetcher
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (!error && !data) {
    return <div>Loading...</div>;
  }
  return (
    <ExchangeList
      exchangeList={data}
      page={pageIndex}
      pageSize={pageSize}
      onNextPage={() => setPageIndex((prev) => prev + 1)}
      onPreviousPage={() => setPageIndex((prev) => prev - 1)}
    />
  );
}
