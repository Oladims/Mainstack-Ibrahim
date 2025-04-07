import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import TransactionTable from "../components/dashboard/transaction/table";
import { ChakraProvider } from "@chakra-ui/react";

interface Transaction {
  id: string;
  type: string;
  status: string;
  amount: string;
  date: string;
  metadata: Record<string, unknown>;
  payment_reference: string;
}

// Replace jest.mock with vi.mock
vi.mock("../components/dashboard/transaction/table/TableRow", () => ({
  default: ({ data }: { data: Transaction }) => (
    <div
      data-testid={`transaction-row-${data.id}`}
      className="single-transaction"
    >
      Transaction {data.id}
    </div>
  ),
}));

vi.mock("../components/dashboard/transaction/table/Empty", () => ({
  default: ({ reset }: { reset: () => void }) => (
    <div data-testid="empty-state">
      <button data-testid="reset-button" onClick={reset}>
        Clear Filter
      </button>
    </div>
  ),
}));

describe("TransactionTable Component", () => {
  const mockTransactions = [
    {
      id: "1",
      type: "deposit",
      status: "successful",
      amount: 500.00,
      date: "2023-01-01",
      metadata: {
        name: "Test User",
        type: "deposit",
        email: "test@example.com",
        quantity: 1,
        country: "US",
        product_name: "Test Product"
      },
      payment_reference: "REF123",
    },
    {
      id: "2",
      type: "withdrawal",
      status: "pending",
      amount: 200.00,
      date: "2023-01-02",
      metadata: {
        name: "Test User",
        type: "withdrawal",
        email: "test@example.com",
        quantity: 1,
        country: "US",
        product_name: "Test Product"
      },
      payment_reference: "REF456",
    },
  ];

  const mockProps = {
    onOpen: vi.fn(), // Replace jest.fn with vi.fn
    data: mockTransactions,
    count: 0,
    clear: vi.fn(), // Replace jest.fn with vi.fn
  };

  test("renders transaction count and description", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...mockProps} />
      </ChakraProvider>
    );

    expect(screen.getByText("2 Transactions")).toBeInTheDocument();
    expect(
      screen.getByText("Your transactions for the last 7 days")
    ).toBeInTheDocument();
  });

  test("renders filter button that triggers onOpen when clicked", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...mockProps} />
      </ChakraProvider>
    );

    const filterButton = screen.getByText("Filter");
    fireEvent.click(filterButton);
    expect(mockProps.onOpen).toHaveBeenCalledTimes(1);
  });

  test("renders export list button", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...mockProps} />
      </ChakraProvider>
    );

    expect(screen.getByText("Export list")).toBeInTheDocument();
  });

  test("renders transaction rows when data is available", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...mockProps} />
      </ChakraProvider>
    );

    expect(screen.getByTestId("transaction-row-1")).toBeInTheDocument();
    expect(screen.getByTestId("transaction-row-2")).toBeInTheDocument();
    expect(screen.queryByTestId("empty-state")).not.toBeInTheDocument();
  });

  test("renders empty state when no data is available", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...{ ...mockProps, data: [] }} />
      </ChakraProvider>
    );

    expect(screen.queryByTestId("transaction-row-1")).not.toBeInTheDocument();
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  test("shows filter count indicator when count is greater than 0", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...{ ...mockProps, count: 2 }} />
      </ChakraProvider>
    );

    const indicator = screen.getByText("2");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass("indicator");
  });

  test("does not show filter count indicator when count is 0", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...mockProps} />
      </ChakraProvider>
    );

    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  test("calls clear function when reset button is clicked in empty state", () => {
    render(
      <ChakraProvider>
        <TransactionTable {...{ ...mockProps, data: [] }} />
      </ChakraProvider>
    );

    fireEvent.click(screen.getByTestId("reset-button"));
    expect(mockProps.clear).toHaveBeenCalledTimes(1);
  });
});
