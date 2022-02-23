import Part from "../Part";

const Content = ({ parts, sum }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total Exercises: {sum}</p>
    </div>
  );
};

export default Content;
