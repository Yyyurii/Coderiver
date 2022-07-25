import "./Header.scss";
import search from "../../assets/images/search.svg";
import bell from "../../assets/images/bell-new-notifications.svg";
import agents from "../../assets/images/agents.svg";
import AppContext from "../../context";
import { useContext } from "react";

const Header = () => {
  const { headerTitle } = useContext(AppContext);
  return (
    <div className="header">
      <h1 className="header__title">{headerTitle}</h1>
      <div className="header__right-column">
        <img className="header__actions-img" src={search} alt="search" />
        <img className="header__actions-img" src={bell} alt="bell" />
        <div className="header__user user">
          <span className="user__name">Jones Ferdinand</span>
          <div className="user__img">
            <img src={agents} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
