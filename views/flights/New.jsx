const React = require('react');

const New = (props) => {
  return (
    <div>
      <h1>New Flight</h1>
      {
      /* In here goes your form for creating a new Flight */
      <form action="/flights" method="POST">
        <label>Airline:</label>
        <input type="text" name="airline" /><br/>
        <label>Flight No:</label>
        <input type="number" name="flightNo" /><br/>
      
        <input type="submit" name="" value="Create Flight!" />
      </form>
      }
    </div>
  )
}

module.exports = New;