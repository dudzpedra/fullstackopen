import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {
    setAll(good + bad + neutral)
    console.log(all)
  }, [good, neutral, bad, all])

  useEffect(() => {
    setAvg((good - bad) / all)
  }, [good, bad, all])

  useEffect(() => {
    setPositive((good / all) * 100)
  }, [good, all])

  return (
    <div className="App">
      <Header text='Give Feedback'/>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <div>
        <Header text='Statistics' />
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {all}</p>
        <p>Average: {avg}</p>
        <p>Positive: {positive} %</p>
      </div>
    </div>
  );
}

export default App;
