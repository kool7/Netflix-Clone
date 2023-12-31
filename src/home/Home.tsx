import Requests from "../adapters/Requests";
import Banner from "../banner/Banner";
import Navigation from "../navigation/Navigation";
import Row from "../rows/Row";
import "./Home.css";

function HomeScreen() {
  return (
    <>
      <Navigation />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={Requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchURL={Requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={Requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchURL={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={Requests.fetchDocumentaries} />
    </>
  );
}

export default HomeScreen;
