import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuickDate from "../components/dashboard/transaction/transactionFilter/QuickDate";

describe("QuickDate Component", () => {
  test("renders all date options", () => {
    render(<QuickDate />);

    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("Last 7 days")).toBeInTheDocument();
    expect(screen.getByText("This month")).toBeInTheDocument();
    expect(screen.getByText("Last 3 month")).toBeInTheDocument();
  });

  test("first option (Today) is active by default", () => {
    render(<QuickDate />);

    const todayButton = screen.getByText("Today");
    expect(todayButton).toHaveClass("days-option-active");
  });

  test("changes active class when a different option is clicked", () => {
    render(<QuickDate />);

    const todayButton = screen.getByText("Today");
    const sevenDaysButton = screen.getByText("Last 7 days");

    // Initially Today should be active
    expect(todayButton).toHaveClass("days-option-active");
    expect(sevenDaysButton).not.toHaveClass("days-option-active");

    // Click on "Last 7 days"
    fireEvent.click(sevenDaysButton);

    // Now "Last 7 days" should be active
    expect(todayButton).not.toHaveClass("days-option-active");
    expect(sevenDaysButton).toHaveClass("days-option-active");
  });

  test("DaysOption component renders correctly with className", () => {
    render(<QuickDate />);

    // Since DaysOption is a private component inside QuickDate, we're testing
    // it indirectly through QuickDate
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(4);

    // All buttons should have the base class
    buttons.forEach((button) => {
      expect(button).toHaveClass("days-option");
    });
  });

  test("can click through all options", () => {
    render(<QuickDate />);

    const options = [
      screen.getByText("Today"),
      screen.getByText("Last 7 days"),
      screen.getByText("This month"),
      screen.getByText("Last 3 month"),
    ];

    // Click each option and verify it becomes active
    options.forEach((option, index) => {
      fireEvent.click(option);

      // Check only this option has the active class
      options.forEach((opt, i) => {
        if (i === index) {
          expect(opt).toHaveClass("days-option-active");
        } else {
          expect(opt).not.toHaveClass("days-option-active");
        }
      });
    });
  });
});
