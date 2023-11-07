import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    });

    expect(sectionHeadingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("All is well");
    expect(paragraphElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });

    expect(nameElement).toBeInTheDocument();

    const nameElement1 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement1).toBeInTheDocument();

    const nameElement2 = screen.getByDisplayValue("Oluwapelumi");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("FirstName");
    expect(nameElement3).toBeInTheDocument();

    const customElement = screen.getByTestId("customElement");
    expect(customElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement1 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElement1).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toBeDisabled();
  });
});
