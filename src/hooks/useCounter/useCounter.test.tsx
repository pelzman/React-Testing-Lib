import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should render initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("should accept and render initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should render increment count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
  test("should render decrement count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
