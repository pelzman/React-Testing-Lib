import { render, screen } from "@testing-library/react";
import Users from "./Users";
describe("User", () => {
  test("should render correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
