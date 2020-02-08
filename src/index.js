import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const film = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`,
};

const filter = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];

const movies = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: {
      path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Bohemian Rhapsody`,
    img: {
      path: `img/bohemian-rhapsody.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Macbeth`,
    img: {
      path: `img/macbeth.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Aviator`,
    img: {
      path: `img/aviator.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `We need to talk about Kevin`,
    img: {
      path: `img/we-need-to-talk-about-kevin.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `What We Do in the Shadows`,
    img: {
      path: `img/what-we-do-in-the-shadows.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Revenant`,
    img: {
      path: `img/revenant.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Johnny English`,
    img: {
      path: `img/johnny-english.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Shutter Island`,
    img: {
      path: `img/shutter-island.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
  {
    name: `Pulp Fiction`,
    img: {
      path: `img/pulp-fiction.jpg`,
      width: 280,
      height: 175
    },
    href: `movie-page.html`
  },
];

ReactDOM.render(
    <App
      name={film.name}
      genre={film.genre}
      date={film.date}
      filter={filter}
      movies={movies}
    />,
    document.getElementById(`root`)
);
