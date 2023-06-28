import { Pagination } from "../components/pagination/Pagination";
import { useLoaderData } from "react-router-dom";
import { BeerCard } from "../components/beer-card/BeerCard";

const Page = () => {

  const {currentPageId, data} = useLoaderData();

  const beers = data;
  // console.log(data)

  return (
    <div className="root-wrapper background">
      <div className="root-title-container">
        <h1 className="root-title">Beers</h1>
      </div>
      <Pagination currentPageId={currentPageId}/>
      <div className="beers-wrapper">
        <div className="beers-container">
          {beers.map((beer) => {
            return <BeerCard 
              key={beer.name}
              name={beer.name}
              imgUrl={beer['image_url']}
              tagline={beer.tagline}
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