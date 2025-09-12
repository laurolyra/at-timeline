import assignLanes from "../services/assignLanes.js";
import TimelineItem from "./TimelineItem.jsx";

const TimelineItems = ({ items }) => {
    const lanes = assignLanes(items);
    console.log('lanes', lanes);
    const allUniqueStartDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.start)))];
    const allUniqueEndDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.end)))];
    console.log('allUniqueStartDates', allUniqueStartDates);
    console.log('allUniqueEndDates', allUniqueEndDates);
    const allUniqueDates = [...new Set([...allUniqueStartDates, ...allUniqueEndDates])].sort((a, b) => new Date(a) - new Date(b))
    console.log('allUniqueDates', allUniqueDates);
    return (
    <div>
        <div className="date-label">
            {allUniqueDates.map((date) => (
                <p key={date}>{date}</p>
            ))}
        </div>
        {
            lanes[0].map((item) => (
                <TimelineItem key={item.id} start={item.start} end={item.end} name={item.name} />
            ))
        }
        {/* <TimelineItem start="2021-01-14" end="2021-01-22" name="Recruit translators" /> */}
        
        {/* <table>
            <thead>
                <tr>{allUniqueStartDates.map((date) => (
                    <th key={date}>{date}</th>
                ))}</tr>
            </thead>
            <tbody>
                {lanes.map((lane) => (
                    <tr key={lane.id}>
                        {allUniqueStartDates.map((date) => (
                            <td key={date}>{lane.find((item) => item.start === date)?.name || ''}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table> */}
    </div>
    );
};

export default TimelineItems;