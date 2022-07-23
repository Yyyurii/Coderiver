import StatisticsItem from '../StatisticsItem';
import './Statistics.scss';

const Statistics = () => {
  const statisticsDetails = [
    {
      title: 'Actice',
      value: 60
    },
    {
      title: 'Online',
      value: 16,
      class: 'active'
    },
    {
      title: 'Filtred',
      value: 43
    },
    {
      title: 'Banned',
      value: 64
    }
  ];

  return (
    <div className="statistics">
      {
        statisticsDetails.map(item => <StatisticsItem key={item.title} details={item}/>)
      }
      
    </div>
  );
};

export default Statistics;