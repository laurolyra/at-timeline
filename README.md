# AT Timeline

A React-based timeline visualization tool that displays project events in a Gantt chart-style layout.

## What it does

- **Timeline Visualization**: Renders project events as horizontal bars on a timeline
- **Smart Lane Assignment**: Automatically assigns overlapping events to different lanes to prevent visual conflicts
- **Dynamic Layout**: Calculates positioning and sizing based on event duration and dates
- **Color-coded Events**: Each event gets a random color for visual distinction

## Key Features

- Displays 16 sample project events from 2021
- Automatic lane assignment algorithm to handle overlapping time periods
- Responsive column width calculation based on date labels
- Clean, modern UI with color-coded event bars

## Tech Stack

- React 18
- Parcel (build tool)
- Vanilla CSS for styling

## Getting Started

```bash
npm install
npm start
```

The app will open in your browser showing the timeline visualization.

# FAQ

- What you like about your implementation?
  I enjoyed the idea of calculating each column width and start. It took me some hours but IO tghought it was a creative way to resolve this.
- What you would change if you were going to do it again.
  I'd like to style more, crossing clear lines between dates, and make each of the items to be draggable; Also, unit tests are needed
- How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
  I didn't looked for another models and it took me hours to think in a solutino to put bars over dates - I thought it was necessary to use moment, but I didnt.
- How you would test this if you had more time.
  I dont know right now how could I test it, but surely I'll implement typescript to resolve a lot of problems that I had when coding here.
