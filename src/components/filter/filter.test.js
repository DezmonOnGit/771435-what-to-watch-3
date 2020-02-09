import React from "react";
import renderer from "react-test-renderer";
import Filter from "./filter.jsx";

const filter = [`test-filter-1`, `test-filter-2`, `test-filter-3`];
const classes = {
  list: `test-list`,
  item: `test-item`,
  itemActive: `test-item--active`,
  link: `test-link`
};

describe(`Render filter`, () => {
  it(`should render <Filter />`, () =>{
    const tree = renderer.create(
        <Filter
          filter={filter}
          classes={classes}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
