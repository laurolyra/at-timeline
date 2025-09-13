import { useRef, useEffect, useState } from 'react';
import assignLanes from "../services/assignLanes.js";
import TimelineItem from "./TimelineItem.jsx";

const TimelineItems = ({ items }) => {
    const lanes = assignLanes(items);
    const [columnWidth, setColumnWidth] = useState(0);
    
    const dateLabelRef = useRef(null);
    
    const allUniqueStartDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.start)))];
    const allUniqueEndDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.end)))];

    const allUniqueDates = [...new Set([...allUniqueStartDates, ...allUniqueEndDates])].sort((a, b) => new Date(a) - new Date(b))

    useEffect(() => {
        if (dateLabelRef.current) {
            const firstP = dateLabelRef.current.querySelector('p');
            if (firstP) {
                setColumnWidth(firstP.offsetWidth);
            }
        }
    }, [allUniqueDates]);

    return (
    <div>
        <div className="date-label" ref={dateLabelRef}>
            {allUniqueDates.map((date) => (
                <p key={date}>{date}</p>
            ))}
        </div>
        <div className="timeline-items-container">
            {lanes.map((lane, laneIndex) => (
                lane.map(item => {
                    return <TimelineItem key={item.id}
                    columnWidth={columnWidth}
                    allUniqueDates={allUniqueDates} 
                    start={item.start} 
                    end={item.end} 
                    name={item.name}
                    laneIndex={laneIndex} />
                })
            ))}
        </div>
    </div>
    );
};

export default TimelineItems;