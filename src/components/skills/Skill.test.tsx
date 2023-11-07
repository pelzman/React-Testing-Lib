import Skill from "./Skill";
import { render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["COMBO", "TAILWIND", "REACT"];
  test("renders correctly", () => {
    render(<Skill skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders listItems correctly", () => {
    render(<Skill skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skill skills={skills} />);

    // screen.debug()
    const logInButton = screen.getByRole("button", { name: "Login" });
    // screen.debug()
    expect(logInButton).toBeInTheDocument();
  });

  test("Start learning button not render", () => {
    render(<Skill skills={skills} />);

    // screen.debug()
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    // screen.debug()
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button eventually display", async () => {
    render(<Skill skills={skills} />);
    // logRoles(view.container)
    // screen.debug()
    const startLearningButton = await screen.findByRole(
      "button",
      { name: "Start Learning" },
      {
        timeout: 2000,
      },
    );
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument();
  });
});
