import "./SingleUserPage.scss";
import background from "../../assets/images/background.svg";
import user1 from "../../assets/images/user1.svg";

const SingleUserPage = () => {
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
          Leanne Graham
        </div>
        <div className="single-user__subtitle single-user__subtitle_gray">
          Multi-layered client-server neural-net
        </div>
      </div>
      <div className="single-user__information single-user__information_start">
        <div className="single-user__title">Address</div>
        <div className="single-user__subtitle single-user__subtitle">
          <span className="single-user__street">Kulas Light</span>,{" "}
          <span className="single-user__suite">Apt. 556</span>,<br />
          <span className="single-user__city">Gwenborough</span>
          <span className="single-user__zipcode">92998-3874</span>
        </div>
      </div>
      <div className="single-user__information single-user__information_start">
        <div className="single-user__title">Phone</div>
        <div className="single-user__subtitle single-user__subtitle">
          +12312312313132
        </div>
      </div>
      <div className="single-user__information single-user__information_start">
        <div className="single-user__title">Website</div>
        <div className="single-user__subtitle single-user__subtitle">
          <a>somethng.com</a>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
