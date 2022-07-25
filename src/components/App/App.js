import "./App.scss";
import Layout from "../pages/Layout";
import Page404 from "../pages/Page404";
import Users from "../Users";
import SingleUserPage from "../pages/SingleUserPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UsersContext from "../../context";
import useUsers from "../../services/users";

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const { getUsers } = useUsers();

  useEffect(() => {
    function getUsersList() {
      getUsers().then((res) => setUsers(res));
    }

    getUsersList();
  }, []);

  return (
    <div className="wrapper">
      <UsersContext.Provider
        value={{
          headerTitle,
          setHeaderTitle,
          users,
          activeUser,
          setActiveUser,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="users" element={<Users />} />
            <Route path="users/:userName" element={<SingleUserPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </UsersContext.Provider>
    </div>
  );
};

export default App;
