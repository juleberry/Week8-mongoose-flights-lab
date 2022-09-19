const React = require('react');

const New = (props) => {
  return (
    <div>
      <h1>New Flight</h1>
      {
      /* In here goes your form for creating a new Flight */
      <form action="/flights" method="POST">
        <label>Airline:</label>
        <input type="text" name="name" /><br/>
        <label>Flight No:</label>
        <input type="number" name="flightNo" /><br/>
        <label>Departure Date:</label>
        <input type="date" name="departureDate" /><br/>
        <label>Departure Time:</label>
        <input type="time" name="departureTime" /><br/>
        <input type="submit" name="" value="Create Flight!" />
      </form>
      }
    </div>
  )
}

module.exports = New;