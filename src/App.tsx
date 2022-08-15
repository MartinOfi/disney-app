import { HeaderContainer } from "components/Header/HeaderContainer";
import AuthProvider from "context/authContext";
import RegisterPage from "pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage, HomePage, LoginPage, CategoryPage } from "./pages";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderContainer />
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
