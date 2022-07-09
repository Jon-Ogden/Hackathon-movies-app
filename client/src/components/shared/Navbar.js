import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { useNavigate } from "react-router-dom";
import "../../CSS/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const renderNavItems = () => {
    if (user) {
      return (
        <>
          <Button
            event={() => {
              navigate("/account");
            }}
          >
            Account
          </Button>
          <Button
            event={() => {
              logout();
            }}
          >
            Logout
          </Button>
          <Button
            event={() => {
              navigate("/movies");
            }}
          >
            All Movies
          </Button>
          <Button
            event={() => {
              navigate("/directors");
            }}
          >
            All Directors
          </Button>
          <hr />
        </>
      );
    } else {
      return (
        <>
          <Button
            className="login-button"
            event={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            className="login-button"
            event={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
          <Button
            event={() => {
              navigate("/movies");
            }}
          >
            All Movies
          </Button>
          <Button
            event={() => {
              navigate("/directors");
            }}
          >
            All Directors
          </Button>
          <hr />
        </>
      );
    }
  };

  return (
    <div className="home-button">
      <nav>
        <Button
          event={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        {renderNavItems()}
      </nav>
    </div>
  );
};

export default Navbar;
