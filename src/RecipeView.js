import React from "react";

export function RecipeView({recipe, deleteRecipe}) {
    return (
        <tr className="recipe-row">
            <td className="small-width">{recipe.name}</td>
            <td className="small-width">{recipe.cuisine}</td>
            <td className="small-width"><img src={recipe.photo} alt=""/></td>
            <td className="large-width content_td" ><p>{recipe.ingredients}</p></td>
            <td className="large-width content_td"><p>{recipe.preparation}</p></td>
            <td className="small-width"><button onClick={deleteRecipe} name="delete">Delete</button></td>
        </tr>
    )
}
