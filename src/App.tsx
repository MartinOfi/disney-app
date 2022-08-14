import { Header } from "components/Header/Header";
import AuthProvider from "context/authContext";
import RegisterPage from "pages/register";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage, HomePage, LoginPage, CategoryPage } from "./pages";

function App() {
  /*   const API_URL = "https://api.themoviedb.org/3";

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
  }, []); */
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/detail" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

/* const data = await fetch(
  API_URL +
    "/movie/766507/videos?api_key=033451d9c4e68c0c5a1cd22e0153ed2c"
); */
