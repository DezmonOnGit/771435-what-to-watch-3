import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on movies title`, ()=> {
  const onTitleClick = jest.fn();

  const main = mount(
      <Main
        name={film.name}
        genre={film.genre}
        date={film.date}
        filter={filter}
        movies={movies}
        clickOnTitle={onTitleClick}
      />
  );

  const title = main.find(`a.small-movie-card__link`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
