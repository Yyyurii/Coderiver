import Tasks from '../Tasks';
import UnresolvedTickets from '../UnresolvedTickets';
import './UsersFooter.scss';

const UsersFooter = () => {
  return (
    <div className="main-footer">
      <UnresolvedTickets />
      <Tasks />
    </div>
  );
};

export default UsersFooter;