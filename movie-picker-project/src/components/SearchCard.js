import React from "react";
import classes from "./SearchCard.module.css";

import Card from "./UI/Card";

function SearchCard() {
  return (
    <div className="SearchCard">
      <Card className={classes.input}>
        <h1>Search</h1>
        <form>
          <label htmlFor="title">Title: </label>
          <input id="title" type="text" value="" />
          <label htmlFor="director">Director: </label>
          <input id="director" type="text" value="" />
          <label htmlFor="genre">Genre: </label>
          <select>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
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
