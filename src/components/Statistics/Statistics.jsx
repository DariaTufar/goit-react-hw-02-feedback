import { Box } from 'components/Box';
import React from 'react';
import {
  Number,
  TextTotal,
  TextPositiveFeedback,
  StatisticLine,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <Box display="flex" flexDirection="column">
      <StatisticLine style={{ color: 'green' }}>
        Good : <Number>{good} </Number>
      </StatisticLine>
      <StatisticLine style={{ color: 'grey' }}>
        Neutral : <Number>{neutral} </Number>
      </StatisticLine>
      <StatisticLine style={{ color: 'orange' }}>
        Bad : <Number>{bad} </Number>
      </StatisticLine>

      <StatisticLine>
        <TextTotal>Total : </TextTotal> <Number>{total} </Number>
      </StatisticLine>

      <TextPositiveFeedback>
        <StatisticLine style={{ color: 'green', fontSize: '20px' }}>
          Positive feedback : <Number> {positiveFeedback} % </Number>
        </StatisticLine>
      </TextPositiveFeedback>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
