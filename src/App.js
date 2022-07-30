import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navigation from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import PrivatePage from "./components/PrivatePage";
import useFetch from "./hooks/useFetch";
import {AUTH_ME_HOST} from "./variables";

function App() {
  const { data, error } = useFetch({pathLink: AUTH_ME_HOST });
  return (
    <Router>
    <Navigation userData={data} />
    <Routes>
      <Route path="/" element={<Home />} />
      {!data  && <Route path="/login" element={<Login />} />}
      {!!data  && <Route path="/userPage" element={<UserPage userData={data} />} />}
      <Route path="/privatePage" element={<PrivatePage />} />
    </Routes>
  </Router>
  );
}

export default App;
