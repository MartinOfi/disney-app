import { useAuth } from "context/authContext";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export const HeaderContainer = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const userName: string | boolean = useMemo(
    () => (user ? user.email.slice(0, user.email.indexOf("@")) : null),
    [user]
  );

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return <Header userName={userName} handleLogout={handleLogout} />;
};
