export default function TimelineItem({ start, end, name }) {
    return (
        <div className="timeline-item">
        { start && end ? (
            <div className="date-range">
                <h1>{start}</h1>
                <h1>{end}</h1>
            </div>
        ) : null}
            <div className="event-name">
                <p>{name}</p>
            </div>
        </div>
    )
}