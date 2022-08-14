import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, Home, Login } from "./pages";

function App() {
  const API_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(
        API_URL +
          `/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      const movies = await data.json();
      console.log(movies);
    };
    fetchMovies();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* const data = await fetch(
  API_URL +
    "/movie/766507/videos?api_key=033451d9c4e68c0c5a1cd22e0153ed2c"
); */
