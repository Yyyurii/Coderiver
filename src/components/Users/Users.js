import UsersContent from "../UsersContent";
import UsersFooter from "../UsersFooter";
import Statistics from "../Statistics";
import "./Users.scss";

const Users = () => {
  return (
    <section className="users">
      <Statistics />
      <UsersContent />
      <UsersFooter />
    </section>
  );
};

export default Users;
