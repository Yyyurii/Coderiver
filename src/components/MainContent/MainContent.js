import './MainContent.scss';
import sort from '../../assets/images/sort.svg';
import MainTable from '../MainTable';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="main-content__header">
        <h1 className="main-content__title">All users</h1>
        <div className="main-content__sort">
          <img className="main-content__sort-img" src={sort} alt="sort" />
          <span>Sort</span>
        </div>
      </div>
      <MainTable />
    </div>
  );
};

export default MainContent;