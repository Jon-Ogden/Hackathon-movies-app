import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Title, Text } from "../styled-components/Fonts";
import DirectorCard from "./Directors/DirectorCard";
import DirectorPage from "./Directors/Directors";
const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Home">
      <Title>About us!</Title>
      <h2 type="t4">Find your favorite movies and Directors</h2>
      {user ? <p>Hello, {user.name}</p> : <Text>not logged in</Text>}
      <Text>Our names are Jon and Matt and we have an exciting new product for you today!</Text>
      <Text>This is [unnamed movie app] here to fulfill all your wildest dreams!</Text>
    </div>
  );
};

export default Home;
