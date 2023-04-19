import { FC } from "react";
import { IExchange } from "../../types/Exchange";

interface Props {
  exchangeList: IExchange[];
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  page?: number;
  pageSize?: number;
}

const ExchangeList: FC<Props> = ({
  exchangeList,
  onNextPage = () => {},
  onPreviousPage = () => {},
  page = 1,
  pageSize = 100,
}) => {
  return (
    <div>
      <button disabled={exchangeList.length < pageSize} onClick={onNextPage}>
        Next
      </button>
      <button disabled={page === 1} onClick={onPreviousPage}>
        Previous
      </button>

      {exchangeList.length > 0 ? (
        <ul>
          {exchangeList.map((exchange, index) => (
            <li key={index}>
              <h3>{exchange.name}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <div>Sem resultados</div>
      )}
    </div>
  );
};

export default ExchangeList;
