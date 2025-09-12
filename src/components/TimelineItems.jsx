import assignLanes from "../services/assignLanes.js";

const TimelineItems = ({ items }) => {
  const lanes = assignLanes(items);
  console.log('lanes', lanes);
  const allUniqueDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.start)))];
  console.log('allUniqueDates', allUniqueDates);
  return (
    <div>
        <table>
            <thead>
                <tr>{allUniqueDates.map((date) => (
                    <th key={date}>{date}</th>
                ))}</tr>
            </thead>
            <tbody>
                {lanes.map((lane) => (
                    <tr key={lane.id}>
                        {allUniqueDates.map((date) => (
                            <td key={date}>{lane.find((item) => item.start === date)?.name || ''}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {items.map((lane) => (
        <div key={lane.id}>{lane.name}  - {lane.start} - {lane.end}</div>

      ))}
    </div>
  );
};

export default TimelineItems;