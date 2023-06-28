import { Header } from "../header/Header"
import spinner from './reel.svg'
import './Loader.css'

export const Loader = () => {
  return (
    <>
      <Header/>
      <div className="spinner-container">
        <img className="spinner" src={spinner}/>
      </div>
    </>
  )
}