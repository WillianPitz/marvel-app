import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "../../testUtils/renderWithTheme";
import Toast, { showToast } from "./Toast";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  const onClickMock = jest.fn(() =>
    showToast({ type: "success", message: "Email successfully sent!" })
  );

  renderWithTheme(
    <>
      <Toast />
      <button onClick={onClickMock}></button>
    </>
  );

  screen.getByRole("button");

  return {
    onClickMock,
  };
};

describe("Component: Toast", () => {
  it("should call onClick() and show toast", async () => {
    const { onClickMock } = await renderComponent();

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Email successfully sent!")).toBeInTheDocument();
    });
  });
});
