import "./MainTable.scss";
import UsersTableRow from "../UsersTableRow";
import AppContext from "../../context";
import { useContext } from "react";

const UsersTable = () => {
  const { users } = useContext(AppContext);

  function renderUsersList(users) {
    const usersList = users.map((item) => {
      return <UsersTableRow key={item.id} details={item} />;
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

export default UsersTable;
