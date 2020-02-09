import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog.jsx";

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

const filterClasses = {
  list: `test-list`,
  item: `test-item`,
  itemActive: `test-item--active`,
  link: `test-link`
};

describe(`Render catalog`, () => {

  it(`Should render <Catalog />`, () => {
    const tree = renderer.create(
        <Catalog
          filter={filter}
          movies={movies}
          filterClasses={filterClasses}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
