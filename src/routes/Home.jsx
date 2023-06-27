import { useEffect, useState } from "react";

const Home = () => {

  const [didFetch, setDidFetch] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.punkapi.com/v2/beers/random');
      const data = await res.json();
      console.log(data);
      setDidFetch(true);
    })();
  }, [])

  return (
    didFetch ?
    <div>
      SomeData
    </div>
    :
    <h1>Loading...</h1>
  )
}

export default Home;