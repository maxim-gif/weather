import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./main";

describe("Main component", () => {
  it("should render Main component correctly", () => {
    render(<Main />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
  it("should render Main component correctly", () => {
    render(<Main />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
  it("should render Main component correctly", () => {
    render(<Main />);
    const button = screen.getByRole("button");
    const element = screen.getByText("Применить");
    expect(button).toEqual(element);
  });
});
