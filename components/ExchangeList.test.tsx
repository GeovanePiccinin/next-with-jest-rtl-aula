import { fireEvent, render, screen, within } from "@testing-library/react";
import ExchangeList from "./ExchangeList/ExchangeList";
import { mockedData } from "../mockedData";

describe("ExchangeList general test", () => {
  test("should render ExchangeList", () => {
    render(<ExchangeList exchangeList={[{} as any]} />);
  });

  test("should render navigation buttons", () => {
    render(<ExchangeList exchangeList={[{} as any]} />);
    // screen.debug();
    screen.getByRole("button", { name: /next/i });
    screen.getByRole("button", { name: /previous/i });
  });
});

describe("ExchangeList buttons navigation", () => {
  test("buttons should call callback function when clicked", () => {
    const onPreviousPageClicked = jest.fn();
    const onNextPageClicked = jest.fn();

    render(
      <ExchangeList
        exchangeList={[{} as any]}
        onNextPage={onNextPageClicked}
        onPreviousPage={onPreviousPageClicked}
        page={2}
        pageSize={1}
      />
    );

    const nextPageButton = screen.getByRole("button", { name: /next/i });
    const previousPageButton = screen.getByRole("button", {
      name: /previous/i,
    });

    fireEvent.click(nextPageButton);
    expect(onNextPageClicked).toBeCalledTimes(1);

    fireEvent.click(previousPageButton);
    expect(onPreviousPageClicked).toBeCalledTimes(1);
  });

  test("should disable previousButton when at the first page", () => {
    render(<ExchangeList page={1} exchangeList={[{} as any]} />);
    const previousPageButton = screen.getByRole("button", {
      name: /previous/i,
    });

    expect(previousPageButton).toBeDisabled();
  });

  test("should disable nextButton when list is less than pageSize", () => {
    render(<ExchangeList page={1} exchangeList={[{} as any]} />);
    const nextPageButton = screen.getByRole("button", {
      name: /next/i,
    });

    expect(nextPageButton).toBeDisabled();
  });
});

describe("ExchangeList display", () => {
  test("should display no results for an empty list", () => {
    render(<ExchangeList exchangeList={[]} />);
    screen.getByText(/sem resultados/i);
  });

  test("should display the correct amount of items", () => {
    const { rerender } = render(<ExchangeList exchangeList={[]} />);
    const renderedItemsEmptyList = screen.queryAllByRole("listitem");

    expect(renderedItemsEmptyList).toHaveLength(0);

    rerender(<ExchangeList exchangeList={[{} as any, {} as any]} />);
    screen.debug();
    const renderedTwoItemsList = screen.queryAllByRole("listitem");
    expect(renderedTwoItemsList).toHaveLength(2);
  });

  test("should display correct content", () => {
    render(<ExchangeList exchangeList={mockedData} />);
    const renderedItems = screen.queryAllByRole("listitem");

    mockedData.forEach((mocked, index) => {
      const renderedItem = within(renderedItems[index]);
      renderedItem.getByRole("heading", { name: mocked.name });
    });
  });
});
