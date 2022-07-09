import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "../../CSS/Register.css";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("example@notreal.com");
  const [password, setPassword] = useState("password");
  const [passwordConfirmation, setPasswordConfirmation] = useState("password");
  const [name, setName] = useState("username");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("password is to short");
      return; // do even try to register if passwords do not match
    }
    if (password !== passwordConfirmation) {
      alert("passwords do not match");
      return; // do even try to register if passwords do not match
    }
    register({ email, name, password });
  };
  return (
    <div className="register">
      <h1>Register</h1>

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
        <label>Username</label>
        <br />
        <input
          required
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          minLength={6}
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>password confirmation</label>
        <br />
        <input
          minLength={6}
          required
          autoFocus
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          register
        </Button>
      </form>
      <hr />
      <p>Already have an accont? </p>
      <Link href="login">Sign-in</Link>
    </div>
  );
};

export default Register;
