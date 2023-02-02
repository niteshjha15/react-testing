import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useCounter from "./useCounter";

describe("hooks test", () => {
  test("default value of count is 0", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        defaultValue: 0,
      },
    });
    expect(result.current.count).toBe(0);
  });

  test("increment func is working", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        defaultValue: 0,
      },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("decremnt func is working", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        defaultValue: 0,
      },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });

  test("default value is displayed", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        defaultValue: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
});
