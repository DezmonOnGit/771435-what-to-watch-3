import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const film = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`,
};

ReactDOM.render(
    <App
      name={film.name}
      genre={film.genre}
      date={film.date}
    />,
    document.getElementById(`root`)
);
