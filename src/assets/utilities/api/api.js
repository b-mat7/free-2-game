"use strict"

// loki
// 1497722$Rapidfree

const apiLink = "https://free-to-play-games-database.p.rapidapi.com/api/"

const apiKey = "b7770ff011mshfecfb8d0a58a979p14ff5ejsnc2a8cb64b59f"
const apiHost = "free-to-play-games-database.p.rapidapi.com"

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
      if (!response.ok) throw new Error(`Fetch failed / ${response.statusText}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};