import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import Catalog from "../catalog/catalog.jsx";

const Main = (props) => {

  const {name, genre, date, filter, movies, clickOnTitle} = props;

  return <React.Fragment>
    <MovieCard
      name={name}
      genre={genre}
      date={date}
    />

    <Catalog
      filter={filter}
      movies={movies}
      clickOnTitle={clickOnTitle}
    />
  </React.Fragment>;
};

Main.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filter: PropTypes.array.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.shape({
          path: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
        }),
        href: PropTypes.string.isRequired,
      })
  ),
};

export default Main;
