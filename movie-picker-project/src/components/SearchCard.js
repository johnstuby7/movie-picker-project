import React, { useState } from "react";
import classes from "./SearchCard.module.css";

import Card from "./UI/Card";

const SearchCard = () => {
  const isNotEmpty = (value) => value.trim() !== "";

  const genreOptions = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Cyberpunk",
    "Crime",
    "Drama",
    "Experimental",
    "Fantasy",
    "History",
    "Horror",
    "Martial Arts",
    "Romance",
    "Satire",
    "Science Fiction",
    "Slasher",
    "Sports",
    "Spy",
    "Thriller",
    "Western",
    "War",
  ];

  const ratingOption = ["one", "two", "three", "four", "five"];

  return (
    <div>
      <Card className={classes.input}>
        <h1>Search</h1>
        <form>
          <label htmlFor="title">Title: </label>
          <input id="title" type="text" placeholder="Enter a movie Title" />
          <label htmlFor="director">Director: </label>
          <input
            id="director"
            type="text"
            value=""
            placeholder="Enter a Directors name"
          />
          <label htmlFor="genre">Genre: </label>
          <select id="genre">
            <option>Genre</option>
            {genreOptions.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <br />
          <label htmlFor="rating">Rating: </label>
          <select>
            <option>Rating</option>
            {ratingOption.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <br />
          <button>Submit</button>
          <button>Clear</button>
        </form>
      </Card>
    </div>
  );
};

export default SearchCard;
