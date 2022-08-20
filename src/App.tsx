import { Spin } from "antd";
import { HeaderContainer } from "components";
import AuthProvider, { useAuth } from "context/authContext";
import RegisterPage from "pages/register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DetailsPage, HomePage, LoginPage, CategoryPage } from "./pages";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return <Spin />;
    if (!user) return <Navigate to={"/login"} />;
    return <>{children}</>;
  };
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/category/:id"
            element={
              <ProtectedRoute>
                <CategoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ProtectedRoute>
                <DetailsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
