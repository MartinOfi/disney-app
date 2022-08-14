import { useAuth } from "context/authContext";

const HomePage = () => {
  const { login } = useAuth();
  console.log(login);

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
export default HomePage;
