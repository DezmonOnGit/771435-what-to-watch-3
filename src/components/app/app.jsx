import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {

  const {name, genre, date, filter, movies, clickOnTitle} = props;

  return <React.Fragment>
    <Main
      name={name}
      genre={genre}
      date={date}
      filter={filter}
      movies={movies}
      clickOnTitle={clickOnTitle}
    />
  </React.Fragment>;
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filter: PropTypes.array.isRequired,
  clickOnTitle: PropTypes.func,
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

export default App;
