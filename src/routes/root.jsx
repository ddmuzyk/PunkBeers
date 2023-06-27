import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [didFetch, setDidFetch] = useState(false);

  // useEffect(() => {
  //   // (async () => {
  //   //   const res = await fetch('https://api.punkapi.com/v2/beers/random');
  //   //   const data = await res.json();
  //   //   console.log(data);
  //   //   setDidFetch(true);
  //   // })();
  //   (setTimeout(async() => {
  //     setDidFetch(true)
  //     console.log(didFetch)
  //   }, 1000))
  // }, [])
  

  return (
    <div>
      <h1>Welcome to beeeers</h1>
      <Link ></Link>
    </div>
  )
}

export default Home;