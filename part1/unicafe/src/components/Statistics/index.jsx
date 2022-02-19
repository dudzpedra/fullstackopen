import React from "react";
import Header from "../Header";
const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <div>
        <Header text="Statistics" />
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.all}</p>
        <p>Average: {props.avg}</p>
        <p>Positive: {props.positive} %</p>
      </div>
    );
  }
  return (
    <div>
      <Header text="Statistics" />
      <p>No feedback given</p>
    </div>
  );
};

export default Statistics;
