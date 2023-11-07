//testing component wirh providers

import { render, screen } from "../../test-utils";

import { MuiMode } from "./Mui-Mode";

describe("MuiMode", () => {
  test("texts render correctly", () => {
    render(<MuiMode />);
    const darkModeElement = screen.getByRole("heading");
    expect(darkModeElement).toHaveTextContent("dark mode");
  });
});
