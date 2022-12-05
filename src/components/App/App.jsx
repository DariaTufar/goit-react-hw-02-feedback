import React, { Component } from 'react';

import { Box } from 'components/Box';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCountFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { bad, neutral, good } = this.state;

    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Section title="Please, leave feedback">
          <Box display="flex" flexDirection="row" alignItems="center">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onCountFeedback}
            />
          </Box>
        </Section>

        <Section title="Statistics" display="flex"   >
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Box>
    );
  }
}
