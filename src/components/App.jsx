import { useState } from 'react';
// import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

// const App = () => {
//   const [username, setUsername] = useState("");
// };
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleClickButton = event => {
    // console.log(e.target.name, e.target.value);
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  // handleClickButton = event => {
  //   const name = event.target.name;
  //   this.setState(prevState => {
  //     console.log(prevState);
  //     console.log(name);
  //     return { [name]: prevState[name] + 1 };
  //   });

  const totalFeedbacks = () => {
    console.log(good + neutral + bad);
    return good + neutral + bad;
  };
  // totalFeedbacks = () =>
  //   Object.values(this.state).reduce((acc, value) => acc + value, 0);

  const countPositivePercent = () => {
    const total = totalFeedbacks();
    return total ? Math.round((good / total) * 100) : 0;
  };
  // countPositivePercent = () => {
  //   return this.totalFeedbacks()
  //     ? ((this.state.good / this.totalFeedbacks()) * 100).toFixed(0)
  //     : '0';
  // };

  const buttonNames = ['good', 'neutral', 'bad'];
  // const buttonNames = Object.keys(this.state);

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        marginLeft: '50px',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonNames}
          onLeaveFeedback={handleClickButton}
        />
      </Section>

      {totalFeedbacks() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positivePercentage={countPositivePercent()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

export default App;

// const handleClickButton = event => () => {
//   const option = event.target;
//   option === 'good' && setGood(good + 1);
//   option === 'neutral' && setNeutral(neutral + 1);
//   option === 'bad' && setBad(bad + 1);
// };
