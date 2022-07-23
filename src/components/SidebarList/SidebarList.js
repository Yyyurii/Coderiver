import "./SidebarList.scss";
import SidebarListItem from "../SidebarListItem";
import overview from "../../assets/images/overview.svg";
import users from "../../assets/images/users.svg";
import ideas from "../../assets/images/ideas.svg";
import contacts from "../../assets/images/contacts.svg";
import agents from "../../assets/images/agents.svg";
import articles from "../../assets/images/articles.svg";
import settings from "../../assets/images/settings.svg";
import subscription from "../../assets/images/subscription.svg";

const SidebarList = () => {
  const topListItems = [
    {
      img: overview,
      title: "Overview",
    },
    {
      img: users,
      title: "Users",
      class: "active",
    },
    {
      img: ideas,
      title: "Ideas",
    },
    {
      img: contacts,
      title: "Contacts",
    },
    {
      img: agents,
      title: "Agents",
    },
    {
      img: articles,
      title: "Articles",
    },
  ];

  const bottomListItems = [
    {
      img: settings,
      title: "Settings",
    },
    {
      img: subscription,
      title: "Subscription",
    },
  ];

  return (
    <div className="sidebar-list">
      <div className="sidebar-list__top">
        <ul>
          {topListItems.map((item) => (
            <SidebarListItem key={item.title} details={item} />
          ))}
        </ul>
      </div>
      <div className="sidebar-list__bottom">
        <ul>
          {bottomListItems.map((item) => (
            <SidebarListItem key={item.title} details={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarList;
