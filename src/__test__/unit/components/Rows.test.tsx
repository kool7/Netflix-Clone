import { render, screen } from "@testing-library/react";
import Row from "../../../rows/Row";
import { ROWS } from "../../utility/helper";

describe("Row component", () => {
  test("renders row title correctly", () => {
    render(<Row title={ROWS.popularMovies} fetchURL="" />);

    const titleElement = screen.getByText(ROWS.popularMovies);
    expect(titleElement).toBeInTheDocument();
  });
});
