import { renderWithTheme } from "../../testUtils/renderWithTheme";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailModal from "./EmailModal";
const data = {
  name: "Teste",
  email: "teste@teste.com",
};

const inputsName = ["name", "email"];
const inputs: HTMLInputElement[] = [];

function getInputs(): HTMLInputElement[] {
  inputsName.forEach((item) => {
    const inp = screen.getByTestId(item);
    inputs.push(inp as any);
  });
  return inputs;
}

test("should do onclick with input values", async () => {
  const onSubmit = jest.fn();

  renderWithTheme(
    <EmailModal closeModal={() => {}} selecteds={[]} onSubmit={onSubmit} />
  );

  const inputName: any = screen.getByTestId("name");
  const inputEmail: any = screen.getByTestId("email");

  fireEvent.change(inputName, { target: { value: data.name } });
  fireEvent.change(inputEmail, { target: { value: data.email } });

  getInputs();

  userEvent.click(screen.getByText("Send"));

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith({
      name: data.name,
      email: data.email,
    });
  });
});
