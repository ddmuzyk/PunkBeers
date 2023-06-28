import { useLoaderData } from "react-router-dom";

const Beer = () => {

  const loader = useLoaderData();
  const name = loader[0].name;

  return (
    <div>
      <h2>I'm a {name}</h2>
    </div>
  )
}

export default Beer;