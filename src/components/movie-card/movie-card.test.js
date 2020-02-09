import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const film = {
  name: `test-name`,
  genre: `test-genre`,
  date: `test-date`,
};

describe(`Render movie-card`, () => {

  it(`Render <MovieCard />`, () => {
    const tree = renderer.create(
        <MovieCard
          name={film.name}
          genre={film.genre}
          date={film.date}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
