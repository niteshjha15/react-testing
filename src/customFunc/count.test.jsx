import { render, screen } from "@testing-library/react";
import Count from "./count";
import user from "@testing-library/user-event";

describe("count component test", () => {
  test("functions fires on click", async () => {
    user.setup();
    const incr = jest.fn();
    const dcrm = jest.fn();
    render(<Count count={0} increment={incr} decrement={dcrm} />);
    let incrementBtn = screen.getByRole("button", { name: "Increment" });
    let decrementBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(incrementBtn);
    expect(incr).toBeCalledTimes(1);
    await user.click(decrementBtn);
    expect(dcrm).toBeCalledTimes(1);
  });
});
