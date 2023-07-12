import { render, screen } from "@testing-library/react";
import Home from "../../../home/Home";

jest.mock("../../../adapters/Requests", () => ({
  fetchNetflixOriginals: "/mock-netflix-originals",
  fetchTrending: "/mock-trending",
  fetchTopRated: "/mock-top-rated",
  fetchComedyMovies: "/mock-comedy-movies",
  fetchHorrorMovies: "/mock-horror-movies",
  fetchRomanceMovies: "/mock-romance-movies",
  fetchDocumentaries: "/mock-documentaries",
}));

jest.mock("../../../banner/Banner", () => () => <div data-testid="mock-banner" />);
jest.mock("../../../navigation/Navigation", () => () => (
  <div data-testid="mock-navigation" />
));
jest.mock(
  "../../../rows/Row",
  () =>
    ({
      title,
      fetchURL,
      isLargeRow,
    }: {
      title: string;
      fetchURL: string;
      isLargeRow?: boolean;
    }) =>
      {
        return (
          <div
            data-testid={`mock-row-${title}`}
            data-fetch-url={fetchURL}
            data-is-large-row={isLargeRow} />
        );
      }
);

describe("Home component integration test", () => {
  test("renders the Home component with navigation, banner & row componnents", () => {
    render(<Home />);

    const navigation = screen.getByTestId("mock-navigation");
    expect(navigation).toBeInTheDocument();

    const banner = screen.getByTestId("mock-banner");
    expect(banner).toBeInTheDocument();

    const rows = screen.getAllByTestId(/^mock-row-/);
    expect(rows).toHaveLength(8);

    const firstRow = rows[0];
    expect(firstRow).toHaveAttribute(
      "data-fetch-url",
      "/mock-netflix-originals"
    );
    expect(firstRow).toHaveAttribute("data-is-large-row", "true");
  });
});
