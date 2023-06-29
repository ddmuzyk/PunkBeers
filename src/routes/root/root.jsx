import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeerCard } from "../../components/beer-card/BeerCard";
import { Pagination } from "../../components/pagination/Pagination";
import { Header } from "../../components/header/Header";
import './root.css'

const Home = () => {

  const [didFetch, setDidFetch] = useState(false);
  const [beers, setBeers] = useState([]);

  // useEffect(() => {
  //   let isMounted = true;

  //   if (!didFetch) {
  //     (async () => {
        // const res = await fetch('https://api.punkapi.com/v2/beers/random');
        // const data = await res.json();
        // console.log(data);
        
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
  
  useEffect(() => {
    if (!didFetch) {
      (async () => {
        // There are 37 pages with 9 items per page
        const res = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=9');
        const data = await res.json();
        console.log(data);
        setBeers(data)
        setDidFetch(true);
        return data;
      })();
    }
  },[])

  return (
    didFetch ?
    <div className="root-wrapper background">
      <Header/>
      <Pagination currentPageId={1}/>
      <div className="beers-wrapper">
        <div className="beers-container">
          {beers.map((beer) => {
            return <BeerCard 
              key={beer.name}
              name={beer.name}
              imgUrl={beer['image_url']}
              tagline={beer.tagline}
              id={beer.id}
            />
          })}
        </div>
      </div>
      {/* <Link to={'/beer/2'}>
        <button>Go</button>
      </Link> */}
      <Pagination currentPageId={1}/>
    </div>
    : 
    <h1>Loading...</h1>
  )
}

export default Home;