export const Ingredient = ({ingredients, ingredient}) => {
  const subIngredients = ingredients[ingredient];
  return (
    <div className={`${ingredient} ingredient`} key={ingredient}>
      <h4 className="ingredient-title">{`${ingredient.slice(0,1).toUpperCase()}${ingredient.slice(1)}`}</h4>
      {Array.isArray(subIngredients) ? (
        subIngredients.map((subIngredient, i) => {
          const amount = subIngredient?.amount.value;
          let unit = subIngredient?.amount.unit;
          const attribute = subIngredient.attribute;
          const name = subIngredient.name;
          if (unit === 'kilograms') {
            unit = 'kg';
          } else if (unit === 'grams') {
            unit = 'g';
          }
          return (
            <div key={i}>
              <h5>{name}: {amount}{` ${unit}`}{attribute ? `, attribute: ${attribute}` : ''}</h5>
            </div>
          )
        }
        )
      )
      :
      <h5>{subIngredients}</h5>
      }
    </div>
  )
}