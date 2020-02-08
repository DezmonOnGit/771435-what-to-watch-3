import React from "react";
import PropTypes from "prop-types";

const MoviesList = (props) => {

  const {movies} = props;

  return <React.Fragment>
    <div className="catalog__movies-list">
      {
        movies.map((item, index) => {
          return <article key={index} className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src={item.img.path} alt={item.name} width={item.img.width} height={item.img.height}/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href={item.href}>{item.name}</a>
            </h3>
          </article>;
        })
      }
    </div>
  </React.Fragment>;
};

MoviesList.propTypes = {
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

export default MoviesList;
