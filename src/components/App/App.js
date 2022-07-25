import "./App.scss";
import Layout from "../pages/Layout";
import Page404 from "../pages/Page404";
import Users from "../Users";
import SingleUserPage from '../pages/SingleUserPage';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("");

  const setTitle = (value) => {
    setHeaderTitle(value);
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="users" element={<Users />}/>
          <Route path="users/:userName" element={<SingleUserPage/>} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
