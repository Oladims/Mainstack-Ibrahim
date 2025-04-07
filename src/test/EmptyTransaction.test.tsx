import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Empty from "../components/dashboard/transaction/table/Empty";
import { vi, describe, test, expect } from 'vitest';

// Mock the AppButton component since it's imported from elsewhere
vi.mock("components/shared/button", () => ({
  __esModule: true,
  default: ({ children, onClick, className }: { children: React.ReactNode; onClick: () => void; className?: string }) => (
    <button onClick={onClick} className={className} data-testid="app-button">
      {children}
    </button>
  ),
}));

describe("Empty Component", () => {
  test("renders empty state message correctly", () => {
    render(<Empty reset={() => {}} />);

    expect(
      screen.getByText("No matching transaction found for the selected filter")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Change your filters to see more results, or add a new product."
      )
    ).toBeInTheDocument();
  });

  test("renders receipt icon", () => {
    const { container } = render(<Empty reset={() => {}} />);

    const iconContainer = container.getElementsByClassName("icon-container")[0];
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer.querySelector("svg")).toBeTruthy();
  });

  test("renders clear filter button", () => {
    render(<Empty reset={() => {}} />);

    expect(screen.getByTestId("app-button")).toBeInTheDocument();
    expect(screen.getByText("Clear Filter")).toBeInTheDocument();
  });

  test("calls reset function when clear button is clicked", () => {
    const resetMock = vi.fn();
    render(<Empty reset={resetMock} />);

    fireEvent.click(screen.getByTestId("app-button"));
    expect(resetMock).toHaveBeenCalledTimes(1);
  });
});
