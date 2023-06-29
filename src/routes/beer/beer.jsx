import { useLoaderData } from "react-router-dom";
import './Beer.css';
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { Ingredient } from "../../components/ingredients/Ingredient";

const Beer = () => {

  const {name, tagline, id, ingredients, description, abv, ibu, image_url} = useLoaderData();

  // Getting the page associated with the beer based on the fact that every page has 9 beers
  const page = id % 9 > 0 ? Math.floor(id / 9) + 1 : Math.floor(id / 9);

 

  return (
    <div className="beer-container">
      <Header/>
      <Link to={page === 1 ? '/' : `/page/${page}`}>
        <button className="back-to-page-btn">Back to page</button>
      </Link>
      <div className="beer-img-container">
        <img src={image_url} alt="Beer Image" className="beer-img"/>
      </div>
        <h1 className="beer-name">{name}</h1>
        <hr id="beer-hr"></hr>
        <h2>{tagline}</h2>
        <p className="beer-description">{description}</p>
        <h3>Abv: {abv}</h3>
        <h3>Ibu: {ibu}</h3>
        <h3>Ingredients</h3>
        <div className="ingredients">
          {Object.keys(ingredients).map((ingredient) => {
            const subIngredients = ingredients[ingredient];
            
            return (
              Array.isArray(subIngredients) ? 
              <Ingredient key={ingredient} ingredients={ingredients} ingredient={ingredient}/> 
              : 
              null
              )
          })}
          {/* {ingredients.hops.map((hop) => {
            
          })} */}
        </div>
        <h4 className="beer-yeast">Yeast: {ingredients.yeast}</h4>
        <Link to={page === 1 ? '/' : `/page/${page}`}>
          <button id="bottom-back-btn" className="back-to-page-btn">Back to page</button>
        </Link>
    </div>
  )
}

export default Beer;