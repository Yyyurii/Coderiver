import "./UsersTable.scss";
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
    <div className="main-table table">
        <div className="table__header header-table">
          <div className="header-table__item">
            <span>User details</span>
          </div>
          <div className="header-table__item">
            <span>Company name</span>
          </div>
          <div className="header-table__item">
            <span>Email</span>
          </div>
          <div className="header-table__item">
            <span>Distance</span>
          </div>
        </div>

      <div>{content}</div>
    </div>
  );
};

export default UsersTable;
