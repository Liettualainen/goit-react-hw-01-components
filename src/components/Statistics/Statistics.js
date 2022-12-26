import { PropTypes } from 'prop-types';

import {
  StatisticsShape, StatisticsTitle, StatisticsList,
  StatisticsItem, StatisticsLabel, StatisticsPercentage
} from './Statistics.styled';

export const Statistic = ({ title, stat }) => {
    return <StatisticsShape>
<section class="statistics">       
        <StatisticsTitle>
          {title !== undefined && (title)}
        </StatisticsTitle>   
  <StatisticsList>
          {stat.map(stat => (
            <StatisticsItem>
              <StatisticsLabel>{stat.label}
              </StatisticsLabel>
         
              <StatisticsPercentage>{stat.percentage}
              </StatisticsPercentage>
            </StatisticsItem>
          ))}  
    </StatisticsList>
</section>
</StatisticsShape>
};

Statistic.propTypes = {
    title: PropTypes.string.isRequired,  
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
    }).isRequired
}


// title= "Upload stats"