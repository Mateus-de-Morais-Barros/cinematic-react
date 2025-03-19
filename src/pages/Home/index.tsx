import "../../App.css";
import "./styles.css";
import Navbar from "components/Navbar";
import MovieCard from "components/MovieCard";
import WeekDay from "components/WeekDay";
import MovieRow from "components/MovieRow";
import UpcomingCard from "components/UpcomingCard";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <div>
          <div>
            <h1>Spider-Man: Across the Spider-Verse</h1>
            <div className="headerTagContainer">
              <p>Action</p>
              <p>Adventure</p>
              <p>Animation</p>
            </div>
          </div>
        </div>
      </header>
      <section className="nowPlaying">
        <h2>Now Playing</h2>
        <div className="cardCarrousel" id="cardCarrousel">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
      <section className="showtime">
        <h2>Featured Movies Showtime</h2>
        <div className="weekDaysContainer">
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
          <WeekDay name="Fri" date="09/05"/>
        </div>
        <div className="moviesContainer">
          <MovieRow />
          <MovieRow />
          <MovieRow />
        </div>
      </section>
      <section className="upcoming">
        <h2>Upcoming Movies</h2>
        <div className="cardCarrousel">
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
