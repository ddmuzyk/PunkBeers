import { useLoaderData } from "react-router-dom";
import './Beer.css';
import { Header } from "../../components/header/Header";

const Beer = () => {

  const {name, tagline, id, ingredients, description, abv, ibu, image_url} = useLoaderData();

  // const ingredientsArray = Object.keys(ingredients);

  return (
    <div className="beer-container">
    <Header/>
      <div className="beer-img-container">
        <img src={image_url} className="beer-img"/>
      </div>
        <h1 className="beer-name">{name}</h1>
        <h2>{tagline}</h2>
        <p>{description}</p>
        <h3>Abv: {abv}</h3>
        <h3>Ibu: {ibu}</h3>
        <h3>Ingredients</h3>
        <div className="ingredients">
          {Object.keys(ingredients).map((ingredient) => {
            const subIngredients = ingredients[ingredient];
            return (
              <div className={`${ingredient}`} key={ingredient}>
                <h4>{`${ingredient.slice(0,1).toUpperCase()}${ingredient.slice(1)}`}</h4>
                {Array.isArray(subIngredients) ? (
                  subIngredients.map((subIngredient, i) => {
                    return (
                      <div key={i}>
                        <h5>{subIngredient.name}</h5>
                      </div>
                    )
                  })
                )
                :
                <h5>su</h5>}
              </div>
            )
          })}
          {/* {ingredients.hops.map((hop) => {
            
          })} */}
        </div>
    </div>
  )
}

export default Beer;