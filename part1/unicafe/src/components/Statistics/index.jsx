import React from "react";
import Header from "../Header";
import StatisticLine from "../StatisticLine";
const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <div>
        <Header text="Statistics" />
        <StatisticLine text='Good' value={props.good} />
        <StatisticLine text='Neutral' value={props.neutral} />
        <StatisticLine text='Bad' value={props.bad} />
        <StatisticLine text='All' value={props.all} />
        <StatisticLine text='Average' value={props.avg} />
        <StatisticLine text='Positive' value={props.positive} />
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
