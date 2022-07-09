import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "../../CSS/Login.css";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("example@notreal.com");
  const [password, setPassword] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>password</label>
        <br />
        <input
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      <hr />
      <Link href="register">Create your account</Link>
    </div>
  );
};

export default Login;
