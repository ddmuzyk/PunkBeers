import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [didFetch, setDidFetch] = useState(false);
  // useEffect(() => {
  //   let isMounted = true;

  //   if (!didFetch) {
  //     (async () => {
  //       const res = await fetch('https://api.punkapi.com/v2/beers/random');
  //       const data = await res.json();
  //       console.log(data);
        
  //       if (isMounted) {
  //         setDidFetch(true);
  //       }
  //     })();
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []); // Empty dependency array to run the effect only once

  // return didFetch ? <div>SomeData</div> : <h1>Loading...</h1>;
  

  return (
    <div>
      <h1>Welcome to beeeers</h1>
      <Link to={'/beer/2'}>
        <button>Go</button>
      </Link>
    </div>
  )
}

export default Home;