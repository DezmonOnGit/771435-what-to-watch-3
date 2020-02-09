import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const movies = [
  {
    name: `test-movie-name-1`,
    img: {
      path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      width: 250,
      height: 125
    },
    href: `movie-page.html`
  }
];

describe(`Render movie-list`, () => {

  it(`Render <MovieCard />`, () => {
    const tree = renderer.create(
        <MoviesList
          movies={movies}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
