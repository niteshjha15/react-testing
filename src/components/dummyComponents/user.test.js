import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import User from "./user";

describe("to test the first component", () => {
  test("check the user component has text", () => {
    render(<User />);
    let greetElement = screen.getByRole("heading", { level: 1 });
    expect(greetElement).toHaveTextContent("Hello User");
  });

  test("list is not rendered", () => {
    let users = ["kohli", "dhoni"];
    render(<User userList={users} />);
    let items = screen.queryByRole("list");
    expect(items).not.toBeInTheDocument();
  });

  test("list loads on click", async () => {
    let users = ["kohli", "dhoni"];
    const myUser = userEvent.setup();
    render(<User userList={users} />);
    await myUser.click(screen.getByRole("button", { name: "Click" }));
    let items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(2);
  });

  test("input and button is present in dom", () => {
    let users = ["kohli", "dhoni"];
    render(<User userList={users} />);
    let inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
    let buttonElem = screen.getByRole("button", { name: "Add User" });
    expect(buttonElem).toBeInTheDocument();
    let heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Nitesh");
  });

  test("change heading on input change", async () => {
    userEvent.setup();
    let users = ["kohli", "dhoni"];
    render(<User userList={users} />);
    let inputElem = screen.getByRole("textbox");
    let buttonElem = screen.getByRole("button", { name: "Add User" });
    let heading = screen.getByRole("heading", { level: 2 });
    await userEvent.type(inputElem, "Jha");
    await userEvent.click(buttonElem);
    expect(heading).toHaveTextContent("Jha");
  });

  test('focus gains correctly', async () => {
    userEvent.setup();
    let users = ["kohli", "dhoni"];
    render(<User userList={users} />);
    let clickBtn = screen.getByRole("button", { name: "Click" });
    let inputElem = screen.getByRole("textbox");
    let buttonElem = screen.getByRole("button", { name: "Add User" });
    await userEvent.tab();
    expect(clickBtn).toHaveFocus();
    await userEvent.tab();
    expect(inputElem).toHaveFocus();
    await userEvent.tab();
    expect(buttonElem).toHaveFocus();
  })
});
