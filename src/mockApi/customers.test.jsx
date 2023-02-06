import { render, screen } from "@testing-library/react";
import Customers from "./Customers";

describe("heading is present", () => {
  test("render correctly", () => {
    render(<Customers />);
    let heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Customers");
  });

  test("list renders correctly from endpoint", async () => {
    render(<Customers />);
    let listItem = await screen.findAllByRole("listitem");
    expect(listItem).toHaveLength(3);
  });
});
