import "./MainTableRow.scss";
import agents from "../../assets/images/agents.svg";
import dots from "../../assets/images/dots.svg";

const MainTableRow = () => {
  return (
    <tr className="table-row">
      <td className="table-row__item user-row">
        <img className="user-row__img" src={agents} alt="user" />
        <div className="user-row__information">
          <div className="user-row__title user-row__title_name">Leanne Graham</div>
          <div className="user-row__subtitle user-row__subtitle_city">Gwenborough</div>
        </div>
      </td>
      <td className="table-row__item">
        <div className="user-row__information">
          <div className="user-row__title user-row__title_company">Microsoft</div>
          <div className="user-row__subtitle user-row__subtitle_bs">harness real-time e-markets</div>
        </div>
      </td>
      <td className="table-row__item">
        <div className="user-row__information">
          <div className="user-row__title user-row__title_email">asd@asd.asd</div>
          <div className="user-row__subtitle user-row__subtitle_website">hildegard.org</div>
        </div>
      </td>
      <td className="table-row__item">
        <button className="table-row__btn table-row__btn_high">HIGH</button>
      </td>
      <td className="table-row__item">
        <img className="table-row__dots" src={dots} alt="settings"/>
      </td>
    </tr>
  );
};

export default MainTableRow;
