import React, { Component } from 'react';



export class WhalesNearMe extends Component {

  getData() 
  { 
   fetch('https://localhost:7146/api/LocationsData', {  // Enter your IP address here

    headers: {'Content-Type': 'application/json'},
    method: 'GET', 
    mode: 'no-cors'
  }).then((response) => {
    console.log("promis",response.json());
  });


  }

  render() {
    return (
      <div>
        <h1>Whales near me!</h1>
        <button className="btn btn-primary" onClick={this.getData}>Get Data</button>
      </div>
    );
  }
}