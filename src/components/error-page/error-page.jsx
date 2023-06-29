import { useRouteError } from "react-router-dom";
import { Header } from '../header/Header';
import { Link } from "react-router-dom";
import './error-page.css'

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <>
    <Header/>
    <div className="error-page">
      <h1 className="error-title">Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{`${error.status} `}{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <button id="error-btn" className="back-to-page-btn">Back to home</button>
      </Link>
    </div>
    </>
  );
}