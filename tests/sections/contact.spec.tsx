import React from "react";
import { getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Contact from "../../app/sections/contact/contact";

describe("Contact Component", () => {
  it("renders properly", () => {
    const { getByText, getByTestId } = render(<Contact />);
    expect(getByText("Get in touch.")).toBeInTheDocument();

    // Check if LinkedIn link is rendered with correct text and attributes
    const linkedInLink = getByText("LinkedIn");
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink.tagName).toBe("A");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/camrynroadley"
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");

    // Check if Personal GitHub link is rendered with correct text and attributes
    const gitHubPersonalLink = getByTestId("github-personal-link");
    expect(gitHubPersonalLink).toBeInTheDocument();
    expect(gitHubPersonalLink.tagName).toBe("A");
    expect(gitHubPersonalLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/camrynroadley"
    );
    expect(gitHubPersonalLink).toHaveAttribute("target", "_blank");

    // Check if Professional GitHub link is rendered with correct text and attributes
    const gitHubProfessionalLink = getByTestId("github-professional-link");
    expect(gitHubProfessionalLink).toBeInTheDocument();
    expect(gitHubProfessionalLink.tagName).toBe("A");
    expect(gitHubProfessionalLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/camrynroadley"
    );
    expect(gitHubProfessionalLink).toHaveAttribute("target", "_blank");

    // Check if personal and professional labels are rendered
    expect(getByText("PERSONAL")).toBeInTheDocument();
    expect(getByText("PROFESSIONAL")).toBeInTheDocument();

    // Ensure that there are correct number of ⚬ separators
    expect(document.querySelectorAll(".self-stretch.text-xl").length).toBe(3);
  });
});
