import './UnresolvedTickets.scss';

const UnresolvedTickets = () => {
  return (
    <div className="tickets">
      <div className="tickets__header">
        <h1 className="tickets__title">Unresolved tickets</h1>
        <button className="tickets__btn">View details</button> 
      </div>
      <div className="tickets__subtitle">Group: <span>Support</span></div>
      <div className="tickets__item">
        <div className="tickets__text">Waiting on Feature Request</div>
        <div className="tickets__value">4238</div>
      </div>
      <div className="tickets__item">
        <div className="tickets__text">Awaiting Customer Response</div>
        <div className="tickets__value">1005</div>
      </div>
      <div className="tickets__item">
        <div className="tickets__text">Awaiting Developer Fix</div>
        <div className="tickets__value">914</div>
      </div>
      <div className="tickets__item">
        <div className="tickets__text">Pending</div>
        <div className="tickets__value">281</div>
      </div>
    </div>
  );
};

export default UnresolvedTickets;