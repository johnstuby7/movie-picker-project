import React from "react";
import classes from "./SearchCard.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

function SearchCard() {
  return (
    <div className="SearchCard">
      <Card className={classes.input}>
        <h1>Search</h1>
        <form>
          <label htmlFor="title">Title: </label>
          <input id="title" type="text" /> <br /> <br />
          <label htmlFor="director">Director: </label>
          <input id="director" type="text" /> <br /> <br />
          <label htmlFor="genre">Genre: </label>
          <input id="genre" type="text" /> <br /> <br />
          <label htmlFor="rating">Rating: </label>
          <input id="rating" type="text" /> <br />
          <Button>Search </Button>
        </form>
      </Card>
    </div>
  );
}

export default SearchCard;
