import "./MainTableRow.scss";
import agents from "../../assets/images/agents.svg";
import dots from "../../assets/images/dots.svg";

const MainTableRow = ({ details }) => {
  const { name, address, company, email, website } = details;
  return (
    <tr className="table-row">
      <td className="table-row__item user-row">
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
      </td>
      <td className="table-row__item">
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
      </td>
      <td className="table-row__item">
        <div className="user-row__information">
          <div title={email} className="user-row__title user-row__title_email">
            {email}
          </div>
          <div
            title={website}
            className="user-row__subtitle user-row__subtitle_website"
          >
            {website}
          </div>
        </div>
      </td>
      <td className="table-row__item">
        <button className="table-row__btn table-row__btn_high">HIGH</button>
      </td>
      <td className="table-row__item">
        <img className="table-row__dots" src={dots} alt="settings" />
      </td>
    </tr>
  );
};

export default MainTableRow;
