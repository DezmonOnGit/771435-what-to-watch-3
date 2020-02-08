import React from "react";
import Filter from "../filter/filter.jsx";
import MovieList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";

const Catalog = (props) => {

  const {filter, movies} = props;

  const filterClasses = {
    list: `catalog__genres-list`,
    item: `catalog__genres-item`,
    itemActive: `catalog__genres-item--active`,
    link: `catalog__genres-link`
  };

  return <React.Fragment>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Filter
          filter={filter}
          classes={filterClasses}
        />

        <MovieList
          movies = {movies}
        />

      </section>
    </div>
  </React.Fragment>;
};

Catalog.propTypes = {
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

export default Catalog;
