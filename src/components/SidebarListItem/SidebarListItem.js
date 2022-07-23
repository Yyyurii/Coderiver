import './SidebarListItem.scss';
import overveiw from '../../assets/images/overveiw.svg';

const SidebarListItem = () => {
  return (
    <li className="sidebar-list-item item">
      <img className="item__img" src={overveiw} alt="icon" />
      <span className="item__title">Overview</span>
    </li>
  );
};

export default SidebarListItem;