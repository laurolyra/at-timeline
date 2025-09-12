import assignLanes from "../services/assignLanes.js";

const TimelineItems = ({ items }) => {
  const lanes = assignLanes(items);
  console.log('lanes', lanes);
  return (
    <div>
      {items.map((lane) => (
        <div key={lane.id}>{lane.name}</div>
      ))}
    </div>
  );
};

export default TimelineItems;