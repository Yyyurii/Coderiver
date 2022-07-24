import MainContent from "../MainContent";
import MainHeader from "../MainHeader";
import Statistics from "../Statistics";
import "./Main.scss";

const Main = () => {
  return (
    <section className="main">
      <MainHeader />
      <Statistics />
      <MainContent />
    </section>
  );
};

export default Main;
