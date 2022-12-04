import React, { Component } from 'react';
 
import { Box } from 'components/Box';
// import { Section } from 'components/Section';

// const OPTIONS = {
//   bad: 'bad',
//   neutral: 'neutral',
//   good: 'good',
// };

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  countGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  countBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    // const { bad, neutral, good } = this.state;
    return (
      <Box>
        <label>
          <h1>="Please, leave feedback"</h1>
          <button type="button" onClick={this.countGoodFeedback}>
            good
          </button>
          <button type="button" onClick={this.countNeutralFeedback}>
            neutral
          </button>
          <button type="button" onClick={this.countBadFeedback}>
            bad
          </button>

          <h2>"Statistics"</h2>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:{this.countTotalFeedback()}</li>
            <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
          </ul>
        </label>
      </Box>
    );
  }
}

