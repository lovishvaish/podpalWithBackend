import React, { Component } from 'react';

export class ReportWhales extends Component {
  //static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Report whales!</h1>
        <br></br><br></br>
        <form action="/action_page.php">
            <label for="latitude">Latitude:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" id="latitude" name="latitude"></input> <br></br><br></br>
            <label for="longitude">Longitude:&nbsp;</label>
            <input type="text" id="longitude" name="longitude"></input><br></br><br></br>
            <input type="submit" value="Submit"></input>
        </form>        
      </div>      
    );
  }
}
