const React = require('react');

const Show = (props) => {
  return (
    <div>
      <h1> Show Flight </h1>
      <p>
      Your {props.flight.airline} flight number is {props.flight.flightNo} and the flight leaves at {props.flight.departs.toDateString()}.
      </p>
    </div>
  );
}

module.exports = Show;