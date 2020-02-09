import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {

  const {filter, classes} = props;

  return <ul className={classes.list}>
    {
      filter.map((item, index) => {

        return <li key={index} className={index > 0 ? classes.item : classes.item + ` ` + classes.itemActive}>
          <a href="#" className={classes.link}>{item}</a>
        </li>;
      })
    }
  </ul>;
};

Filter.propTypes = {
  filter: PropTypes.array.isRequired,
  classes: PropTypes.shape({
    list: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    itemActive: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default Filter;
