const React = require('react');

const Index = (props) => {
  return (
    <div>
      <h1>Index Route</h1>

      <ul>
      {
      /* In here goes your list with airline name, flight no, and departure date/time */
      props.flights.map((flight, index) => {
        return (
          <li>
      {`/$flight._id`}<br/>
      Airline: {flight.airline}
      <br/>
      Flight No: {flight.flightNo}
      <br/>
      Departure Date/Time: {flight.departs}
    </li>
        )}
        )
      }
      </ul>
    </div>
  )
}

module.exports = Index;