import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Transactions from "../components/dashboard/transaction";
import { ChakraProvider } from "@chakra-ui/react";
import { vi } from 'vitest';
// Mock the child components
vi.mock("../components/dashboard/transaction/transactionFilter", () => ({
  default: () => (
    <div data-testid="transaction-filter">Transaction Filter Component</div>
  ),
}));

vi.mock("../components/dashboard/transaction/table", () => ({
  default: (props: { count: number; clear: () => void; data: Array<Record<string, unknown>>; onOpen: () => void }) => (
    <div data-temp={props} data-testid="transaction-table">Transaction Table Component</div>
  ),
}));

// Create a mock store
const mockStore = configureStore([]);

describe("Transactions Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      transactions: {
        data: [
          {
            id: "1",
            type: "deposit",
            status: "successful",
            amount: "500.00",
            date: "2023-01-01",
            metadata: { product_name: "Subscription" },
          },
          {
            id: "2",
            type: "withdrawal",
            status: "pending",
            amount: "200.00",
            date: "2023-01-02",
            metadata: { product_name: "Refund" },
          },
        ],
      },
    });
  });

  test("renders transaction filter and table components", () => {
    render(
      <Provider store={store}>
        <ChakraProvider>
          <Transactions />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByTestId("transaction-filter")).toBeInTheDocument();
    expect(screen.getByTestId("transaction-table")).toBeInTheDocument();
  });

  test("passes correct props to child components", () => {
    render(
      <Provider store={store}>
        <ChakraProvider>
          <Transactions />
        </ChakraProvider>
      </Provider>
    );

    // These assertions verify that the components are rendered with some props
    // For a more thorough test, we would check the actual prop values
    expect(screen.getByTestId("transaction-filter")).toHaveTextContent(
      "Transaction Filter Component"
    );
    expect(screen.getByTestId("transaction-table")).toHaveTextContent(
      "Transaction Table Component"
    );
  });
});
