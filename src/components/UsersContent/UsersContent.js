import './UsersContent.scss';
import sort from '../../assets/images/sort.svg';
import UsersTable from '../UsersTable';

const UsersContent = () => {
  return (
    <div className="main-content">
      <div className="main-content__header">
        <h1 className="main-content__title">All users</h1>
        <div className="main-content__sort">
          <img className="main-content__sort-img" src={sort} alt="sort" />
          <span>Sort</span>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default UsersContent;