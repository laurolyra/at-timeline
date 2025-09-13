import { useRef, useEffect, useState } from 'react';
import assignLanes from "../services/assignLanes.js";
import TimelineItem from "./TimelineItem.jsx";

const TimelineItems = ({ items }) => {
    const lanes = assignLanes(items);
    const [columnWidth, setColumnWidth] = useState(0);
    const dateLabelRef = useRef(null);
    
    console.log('lanes', lanes);
    const allUniqueStartDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.start)))];
    const allUniqueEndDates = [...new Set(lanes.flatMap((lane) => lane.map((item) => item.end)))];
    console.log('allUniqueStartDates', allUniqueStartDates);
    console.log('allUniqueEndDates', allUniqueEndDates);
    const allUniqueDates = [...new Set([...allUniqueStartDates, ...allUniqueEndDates])].sort((a, b) => new Date(a) - new Date(b))
    console.log('allUniqueDates', allUniqueDates);

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
            {/* <TimelineItem start="2021-01-14" end="2021-01-22" name="Recruit translators" /> */}
            <TimelineItem 
            columnWidth={columnWidth}
            allUniqueDates={allUniqueDates} start={lanes[0][0].start  } end={lanes[0][0].end} name={lanes[0][0].name} /><br/>
            {/* <TimelineItem 
            columnWidth={columnWidth}
            allUniqueDates={allUniqueDates} start={lanes[1][1].start  } end={lanes[1][1].end} name={lanes[1][1].name} /> */}
        </div>
        {/* {
            lanes[0].map((item) => (
                <TimelineItem key={item.id} start={item.start} end={item.end} name={item.name} />
            ))
        } */}
        
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