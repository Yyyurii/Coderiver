import MainContent from "../MainContent";
import MainFooter from "../MainFooter";
import MainHeader from "../MainHeader";
import SingleUserPage from "../SingleUserPage";
import Statistics from "../Statistics";
import "./Main.scss";

const Main = () => {
  return (
    <section className="main">
      <MainHeader />
      <Statistics />
      {/* <MainContent />
      <MainFooter /> */}
      <SingleUserPage />
    </section>
  );
};

export default Main;
