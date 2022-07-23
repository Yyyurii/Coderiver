import "./SidebarList.scss";
import SidebarListItem from "../SidebarListItem";

const SidebarList = () => {
  return (
    <ul className="sidebar-list">
      <SidebarListItem />
      <SidebarListItem />
      <SidebarListItem />
    </ul>
  );
};

export default SidebarList;
