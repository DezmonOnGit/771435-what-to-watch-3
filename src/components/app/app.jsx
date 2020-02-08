import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {

  // eslint-disable-next-line react/prop-types
  const {name, genre, date} = props;

  return <React.Fragment>
    <Main
      name={name}
      genre={genre}
      date={date}
    />
  </React.Fragment>;
};

export default App;
