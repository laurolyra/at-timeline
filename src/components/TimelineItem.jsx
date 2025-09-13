export default function TimelineItem({ allUniqueDates, start, end, name, columnWidth, laneIndex }) {
    const intervalDates = allUniqueDates.filter(date => date>= start && date<= end).length;

    const startDateIndex = allUniqueDates.findIndex(date => date === start);
    const leftPosition = startDateIndex * (columnWidth + 15);
    
    const topPosition = laneIndex * 60;
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FF3333', '#33FF33', '#3333FF', '#FF33A1', '#A133FF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className="timeline-item" style={{
            width: `${(columnWidth*intervalDates) + (15*(intervalDates -1))}px`,
            left: `${leftPosition+10}px`,
            top: `${topPosition}px`
        }}>
            <div className="event-name" style={{backgroundColor: color}}>
                <p>{name}</p>
            </div>
        </div>
    )
}