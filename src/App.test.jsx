import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the correct child components", () => {
  render(<App />);
  const header = screen.getByRole("banner");
  const aside = screen.getByRole("complementary");
  const main = screen.getByRole("main");

  expect(header).toBeInTheDocument();
  expect(aside).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});

test("About: Renders a <aside> element", () => {
  render(<App />);
  const aside = screen.getByRole("complementary");
  expect(aside.tagName).toBe("ASIDE");
});

test("About: Renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  render(<App />);
  const img = screen.getByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.tagName).toBe("IMG");
});