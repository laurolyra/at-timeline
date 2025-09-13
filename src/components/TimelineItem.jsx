export default function TimelineItem({ allUniqueDates, start, end, name, columnWidth }) {
    const intervalDates = allUniqueDates.filter(date => date>= start && date<= end).length;

    return (
        <div className="timeline-item" style={{width: `${(columnWidth*intervalDates) + (15*(intervalDates -1))}px`}}>
        { start && end ? (
            <div className="date-label-2" >
                <p>{start}</p>
                <p>{end}</p>
            </div>
        ) : null}
            <div className="event-name">
                <p>ok{name}</p>
            </div>
        </div>
    )
}