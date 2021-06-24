import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <ul>
        <h3>ingredients : </h3>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p style={{display:"inline" }} ><h3 style={{display:"inline"}} >Calories : </h3>{calories}</p>
    </div>
  );
};

export default Recipe;
