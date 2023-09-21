import React from "react";
import classes from "./SearchCard.module.css";

import Card from "./UI/Card";

function SearchCard() {
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
            <option>Please choose one option</option>
            {genreOptions.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <br />
          <label htmlFor="rating">Rating: </label>
          <select>
            <option value="oneStar">One Star</option>
            <option value="twoStar">Two Star</option>
            <option value="threeStar">Three Star</option>
            <option value="fourStar">Four Star</option>
            <option value="fiveStar">Five Star</option>
          </select>
        </form>
      </Card>
    </div>
  );
}

export default SearchCard;
