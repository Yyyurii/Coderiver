import "./Tasks.scss";
import plus from "../../assets/images/plus.svg";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="tasks__header">
        <h1 className="tasks__title">Tasks</h1>
        <button className="tasks__btn">View all</button>
      </div>
      <div className="tasks__subtitle">Today</div>
      <div className="tasks__create-task">
        <input className="tasks__input" placeholder="Create new task" />
        <img className="tasks__plus-btn" src={plus} alt="add task" />
      </div>
      <div className="tasks__item">
        <label className="tasks__label">
          <input
            className="tasks__input-label"
            type="checkbox"
            name="happy"
            value="yes"
          />
          Finish ticket update
        </label>
        <button className="tasks__status-btn tasks__status-btn_urgent">URGENT</button>
      </div>
      <div className="tasks__item">
        <label className="tasks__label">
          <input
            className="tasks__input-label"
            type="checkbox"
            name="happy"
            value="yes"
          />
          Create new ticket example
        </label>
        <button className="tasks__status-btn tasks__status-btn_new">new</button>
      </div>
      <div className="tasks__item">
        <label className="tasks__label">
          <input
            className="tasks__input-label"
            type="checkbox"
            name="happy"
            value="yes"
            defaultChecked
          />
          Update ticket report
        </label>
        <button className="tasks__status-btn">default</button>
      </div>
    </div>
  );
};

export default Tasks;
