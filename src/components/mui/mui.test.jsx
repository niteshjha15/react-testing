import { render, screen } from "../../test.utils";
import { MuiMode } from "./MuiMode";

describe("test appproviders", () => {
  test("h1 renders text correctly", () => {
    render(<MuiMode />);
    let h1Elem = screen.getByRole("heading");
    expect(h1Elem).toHaveTextContent("dark mode");
  });

  test("to check text is in correct color", () => {
    render(<MuiMode />);
    let h1Elem = screen.getByRole("heading");
    expect(h1Elem).toHaveStyle({ color: "'rgb(255,255,255)'" });
  });
});
