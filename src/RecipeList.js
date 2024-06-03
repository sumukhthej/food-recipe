import React from "react";
import {RecipeView} from "./RecipeView";
import "./RecipeList.css"

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="small-width">Name</th>
            <th className="small-width">Cuisine</th>
            <th className="small-width">Photo</th>
            <th className="large-width">Ingredients</th>
            <th className="large-width">Preparation</th>
            <th className="small-width">Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          recipes.map(
              (recipe, index) => (<RecipeView recipe={recipe} deleteRecipe={() => deleteRecipe(index)} key={index}/>)
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
