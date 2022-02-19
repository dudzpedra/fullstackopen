import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack App development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],    
  };
  let sum = 0
  course.parts.forEach((part) => sum += part.exercises)
  console.log(sum) 

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={sum} />
    </div>
  );
};

export default App;
