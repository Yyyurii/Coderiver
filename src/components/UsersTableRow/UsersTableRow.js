import "./UsersTableRow.scss";
import agents from "../../assets/images/agents.svg";
import dots from "../../assets/images/dots.svg";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { useContext } from "react";

const UsersTableRow = ({ details }) => {
  const { name, address, company, email, website } = details;
  const { setActiveUser } = useContext(AppContext);

  return (
    <Link to={`/users/${name}`}>
      <div className="table-row" onClick={() => setActiveUser(details)}>
        <div className="table-row__item user-row">
          <img className="user-row__img" src={agents} alt="user" />
          <div className="user-row__information">
            <div title={name} className="user-row__title user-row__title_name">
              {name}
            </div>
            <div
              title={address.city}
              className="user-row__subtitle user-row__subtitle_city"
            >
              {address.city}
            </div>
          </div>
        </div>
        <div className="table-row__item">
          <div className="user-row__information">
            <div
              title={company.name}
              className="user-row__title user-row__title_company"
            >
              {company.name}
            </div>
            <div
              title={company.bs}
              className="user-row__subtitle user-row__subtitle_bs"
            >
              {company.bs}
            </div>
          </div>
        </div>
        <div className="table-row__item">
          <div className="user-row__information">
            <div
              title={email}
              className="user-row__title user-row__title_email"
            >
              {email}
            </div>
            <div
              title={website}
              className="user-row__subtitle user-row__subtitle_website"
            >
              {website}
            </div>
          </div>
        </div>
        <div className="table-row__item">
          <button className="table-row__btn table-row__btn_high">HIGH</button>
        </div>
        <div className="table-row__item">
          <img className="table-row__dots" src={dots} alt="settings" />
        </div>
      </div>
    </Link>
  );
};

export default UsersTableRow;
