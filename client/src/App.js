import "./App.css";
import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Movies from "./components/shared/movies/Movies";
import EditMovie from "./components/shared/movies/EditMovie";
import AddMovie from "./components/shared/movies/AddMovie";
import Directors from "./components/shared/Directors/Directors";
import DirectorPage from "./components/shared/Directors/DirectorPage";

const App = () => (
  <>
    <Navbar />
    <>
      <FetchUser>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/directorpage/:id" element={<DirectorPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<UserAccount />} />
            <Route path="/editMovie/:id" element={<EditMovie />} />
            <Route path="/addMovie" element={<AddMovie />} />
        </Route>
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </FetchUser>
    </>
  </>
);

export default App;
