import Tasks from '../Tasks';
import UnresolvedTickets from '../UnresolvedTickets';
import './MainFooter.scss';

const MainFooter = () => {
  return (
    <div className="main-footer">
      <UnresolvedTickets />
      <Tasks />
    </div>
  );
};

export default MainFooter;