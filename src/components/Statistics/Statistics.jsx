import { Box } from 'components/Box';
import React from 'react';
import { Number, Text } from './Statistics.styled';
import PropTypes from 'prop-types';
 

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <Box display="flex" flexDirection="row"   >
      <div>
        <p>
          Good : <Number>{good} </Number>
        </p>
        <p>
          Neutral : <Number>{neutral} </Number>
        </p>
        <p>
          Bad : <Number>{bad} </Number>
        </p>
        <Text>
          Total : <Number>{total} </Number>
        </Text>
        <Text>
          Positive feedback : <Number> {positiveFeedback} % </Number>
        </Text>
      </div>
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