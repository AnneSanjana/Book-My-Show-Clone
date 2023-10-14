import { Route } from "react-router-dom";

// axios - package used for global integration 
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import PlaysHOC from "./HOC/Plays.HOC";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Temp from "./components/temp";
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/"  exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <PlaysHOC path="/plays" exact component={PlaysPage} />
    </>
  );
}

export default App;
// // example
// //SPREAD OPERATOR
// const anne = {
//   name: anne,
//   dob: 2002
// };
// const student = {...anne , goodStudent:true};