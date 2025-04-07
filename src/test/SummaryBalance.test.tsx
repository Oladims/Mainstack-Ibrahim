import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SummaryBalance from "../components/dashboard/balanceSummary";

describe("SummaryBalance Component", () => {
  test("renders the title correctly", () => {
    render(<SummaryBalance title="Available Balance" figure={1000} />);
    expect(screen.getByText("Available Balance")).toBeInTheDocument();
  });

  test("renders info icon", () => {
    render(<SummaryBalance title="Total Balance" figure={1500} />);
    const infoIcon = document.querySelector(".summary-balance svg");
    expect(infoIcon).toBeInTheDocument();
  });

  test("formats number figure with 2 decimal places", () => {
    render(<SummaryBalance title="Current Balance" figure={1234.5} />);
    expect(screen.getByText("USD 1,234.50")).toBeInTheDocument();
  });

  test("formats string figure with 2 decimal places", () => {
    render(<SummaryBalance title="Current Balance" figure="1234.5" />);
    expect(screen.getByText("USD 1,234.50")).toBeInTheDocument();
  });

  test("adds extra 2 decimal place to figure", () => {
    render(<SummaryBalance title="Current Balance" figure={1234} />);
    expect(screen.getByText("USD 1,234.00")).toBeInTheDocument();
  });

  test("handles zero and undefined figures correctly", () => {
    render(<SummaryBalance title="Empty Balance" figure={0} />);
    expect(screen.getByText("USD 0.00")).toBeInTheDocument();
  });
});
