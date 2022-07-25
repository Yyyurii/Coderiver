import UsersContent from "../UsersContent";
import UsersFooter from "../UsersFooter";
import "./Users.scss";

const Users = () => {
  return (
    <section className="users">
      <UsersContent />
      <UsersFooter />
    </section>
  );
};

export default Users;
