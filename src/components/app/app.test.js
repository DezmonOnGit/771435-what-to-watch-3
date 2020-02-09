import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const film = {
  name: `test-name`,
  genre: `test-genre`,
  date: `test-date`,
};

const filter = [`test-filter-1`, `test-filter-2`, `test-filter-3`];

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

describe(`Render App`, () => {

  it(`<App /> Should render App`, () => {
    const tree = renderer.create(
        <App
          name={film.name}
          genre={film.genre}
          date={film.date}
          filter={filter}
          movies={movies}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
