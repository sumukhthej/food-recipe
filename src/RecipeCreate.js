import React, { useState } from "react";
import "./RecipeCreate.css"

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialRecipeData = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }

  const [recipeData, SetRecipeData] = useState({...initialRecipeData});

  const recipeChangeHandle = (event) => {
    SetRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value
    })
  }

  const submitHandle = (event) => {
      event.preventDefault();
      createRecipe(recipeData);
      SetRecipeData({...initialRecipeData})
  };
  
  return (
    <form name="create" onSubmit={submitHandle}>
      <table>
        <tbody>
          <tr>
            <td className="small-width">
                <input name="name" placeholder="Name" onChange={recipeChangeHandle} value={recipeData.name}/>
            </td>
            <td className="small-width">
              <input name="cuisine" placeholder="Cuisine" onChange={recipeChangeHandle} value={recipeData.cuisine}/>
            </td>
            <td className="small-width">
              <input name="photo" placeholder="URL" onChange={recipeChangeHandle} value={recipeData.photo}/>
            </td>
            <td className="large-width">
              <textarea name="ingredients" placeholder="Ingredients" onChange={recipeChangeHandle} value={recipeData.ingredients}/>
            </td>
            <td className="large-width">
              <textarea name="preparation" placeholder="Preparation" onChange={recipeChangeHandle} value={recipeData.preparation}/>
            </td>
            <td className="small-width">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
