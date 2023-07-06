import { render, screen } from "@testing-library/react";
import Row from "../rows/Row";

describe("Row component", () => {
  test("renders row title correctly", () => {
    const title = "Popular Movies";
    render(<Row title={title} fetchURL="" />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});
