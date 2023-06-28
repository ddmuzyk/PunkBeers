import { Pagination } from "../components/pagination/Pagination";
import { useLoaderData, Link } from "react-router-dom";
import { BeerCard } from "../components/beer-card/BeerCard";
import { Header } from "../components/header/Header";

const Page = () => {

  const {currentPageId, data} = useLoaderData();

  const beers = data;

  return (
    <div className="root-wrapper background">
      <Header/>
      <Pagination currentPageId={currentPageId}/>
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
      <Pagination currentPageId={currentPageId}/>
    </div>
  )
}

export default Page;