import React, { Component } from 'react';

export class ReportWhales extends Component {

  reportWhales() {
    let latitude = document.getElementById("latitude").value;
    let longitude = document.getElementById("longitude").value;
    let id= Math.floor(Math.random() * 100);;
  let requestUrl=  "https://localhost:7146/api/LocationsData?id="+id+"&latitude="+latitude+"&longitude="+longitude;

    // Send data to the backend via POST
    fetch(requestUrl, {  // Enter your IP address here

      headers: {'Accept': 'application/json','Content-Type': 'application/json', 'charset': 'UTF-8'},
      method: 'POST', 
      mode: 'no-cors'
    })   
  }

  render() {
    return (
      <div>
        <h1>Report whales!</h1>
        <br></br><br></br>
        <label for="latitude">Latitude:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" id="latitude" name="latitude"></input> <br></br><br></br>
        <label for="longitude">Longitude:&nbsp;</label>
        <input type="text" id="longitude" name="longitude"></input><br></br><br></br>
        <button className="btn btn-primary" onClick={this.reportWhales}>Report</button>
      </div>
    );
  }
}
