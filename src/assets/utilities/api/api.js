"use strict"

const apiLink = "https://free-to-play-games-database.p.rapidapi.com/api/"

const apiKey = import.meta.env.VITE_API_KEY;
const apiHost = import.meta.env.VITE_API_HOST;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost
  }
};

export const getGamesByFilter = (filter) => {
  return fetch(`${apiLink}${filter}`, options)
    .then((response) => {
      if (!response.ok) throw new Error(`Fetch games failed / ${response.statusText}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};

export const getGamesDetailsbyFilter = (filter) => {
  return fetch(`${apiLink}${filter}`, options)
    .then((response) => {
      if (!response.ok) throw new Error(`Fetch games failed / ${response.statusText}`);
      return response.json();
    })
    // = getGamesByFilter(filter)
    .then((gamesData) => {
      const gameDetailPromises = gamesData.map((game) => {
        return fetch(`${apiLink}game?id=${game.id}`, options)
          .then((response) => {
            if (!response.ok) throw new Error(`Fetch details failed / ${response.statusText}`);
            return response.json();
          })
      })
      return Promise.all(gameDetailPromises)
    })
    .catch((error) => console.error(error.message));
};

export const getSingleGameDetailsByFilter = (filter) => {
  return fetch(`${apiLink}${filter}`, options)
    .then((response) => {
      if (!response.ok) throw new Error(`Fetch games failed / ${response.statusText}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};