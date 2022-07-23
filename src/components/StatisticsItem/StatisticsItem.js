import "./StatisticsItem.scss";

const StatisticsItem = ({ details }) => {
  return (
    <div className={details.class ? "statistics-item active" : "statistics-item"}>
      <span className="statistics-item__title">{details.title}</span>
      <span className="statistics-item__value">{details.value}</span>
    </div>
  );
};

export default StatisticsItem;
