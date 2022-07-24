import "./MainTable.scss";
import MainTableRow from "../MainTableRow";
import useUsers from "../../services/users";
import { useState, useEffect } from "react";

const MainTable = () => {
  const [users, setUsers] = useState([]);
  const { getUsers } = useUsers();

  useEffect(() => {
    getUsersList();
  }, []);

  function getUsersList() {
    getUsers().then((res) => setUsers(res));
  }

  function renderUsersList(users) {
    const usersList = users.map((item) => {
      return <MainTableRow key={item.id} details={item} />;
    });
    return usersList;
  }

  const content = renderUsersList(users);

  return (
    <table className="main-table table">
      <thead>
        <tr className="table__header header">
          <td className="header__item">
            <span>User details</span>
          </td>
          <td className="header__item">
            <span>Company name</span>
          </td>
          <td className="header__item">
            <span>Email</span>
          </td>
          <td className="header__item">
            <span>Distance</span>
          </td>
        </tr>
      </thead>

      <tbody>{content}</tbody>
    </table>
  );
};

export default MainTable;
