import React from "react";
import classes from "./SearchCard.module.css";
import useInput from "../hooks/use-input";
import Card from "./UI/Card";

const isNotEmpty = (value) => value.trim() !== "";

const SearchCard = () => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);

  const {
    value: directorValue,
    isValid: directorIsValid,
    hasError: directorHasError,
    valueChangeHandler: directorChangeHandler,
    inputBlurHandler: directorBlurHandler,
    reset: resetDirector,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (titleIsValid && directorIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted");
    console.log(titleValue, directorValue);

    resetTitle();
    resetDirector();
  };

  const clearHandler = (event) => {
    resetTitle();
    resetDirector();
  };

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

  const titleClasses = titleHasError ? "form-control invalid" : "form-control";
  const directorClasses = directorHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <Card className={classes.input}>
        <h1>Search</h1>
        <form>
          <div className={titleClasses}>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              type="text"
              placeholder="Enter a movie Title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
          </div>
          <div className={directorClasses}>
            <label htmlFor="director">Director: </label>
            <input
              id="director"
              type="text"
              value={directorValue}
              placeholder="Enter a Directors name"
              onChange={directorChangeHandler}
              onBlur={directorBlurHandler}
            />
          </div>
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
          <button disabled={!formIsValid} type="submit" onClick={submitHandler}>
            Submit
          </button>
          <button onClick={clearHandler}>Clear</button>
        </form>
      </Card>
    </div>
  );
};

export default SearchCard;
