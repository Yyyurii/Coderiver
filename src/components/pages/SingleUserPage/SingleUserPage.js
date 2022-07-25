import "./SingleUserPage.scss";
import background from "../../../assets/images/background.svg";
import user1 from "../../../assets/images/user1.svg";
import AppContext from "../../../context";
import { useContext } from "react";

const SingleUserPage = () => {
  const { activeUser } = useContext(AppContext);
  const { name, address, phone, website, company } = activeUser;
  return (
    <div className="single-user">
      <img
        className="single-user__background-img"
        src={background}
        alt="background"
      />
      <img className="single-user__avatar" src={user1} alt="user" />
      <div className="single-user__information">
        <div className="single-user__title single-user__title_start">
          {name}
        </div>
        <div className="single-user__subtitle single-user__subtitle_gray">
          {company.catchPhrase}
        </div>
      </div>
      <div className="single-user__information single-user__information_start">
        <div className="single-user__title">Address</div>
        <div className="single-user__subtitle single-user__subtitle">
          <span className="single-user__street">{address.street}</span>,{" "}
          <span className="single-user__suite">{address.suit}</span>,<br />
          <span className="single-user__city">{address.city}</span>
          <span className="single-user__zipcode">{address.zipcode}</span>
        </div>
      </div>
      <div className="single-user__information single-user__information_start">
        <div className="single-user__title">Phone</div>
        <div className="single-user__subtitle single-user__subtitle">
          {phone}
        </div>
      </div>
      <div className="single-user__information single-user__information_start">
        <div className="single-user__title">Website</div>
        <div className="single-user__subtitle single-user__subtitle">
          <a href={`${website}`}>{website}</a>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
