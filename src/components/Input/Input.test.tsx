import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../../testUtils/renderWithTheme";
import Input from "./Input";

describe("input component", () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  renderWithTheme(<Input onClick={onClick} onChange={onChange} value="Test" />);
  const input: any = screen.getByDisplayValue("Test");

  test("should call onlick", () => {
    fireEvent.click(input);
    expect(onClick).toHaveBeenCalled();
  });

  test("should call onchage", () => {
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  test("should render input", () => {
    expect(input).toBeTruthy();
  });
});
