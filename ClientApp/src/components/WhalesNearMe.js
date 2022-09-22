import React, { Component } from 'react';



export class WhalesNearMe extends Component {

   getData() {
    let rep =fetch('https://localhost:7146/api/LocationsData', {  // Enter your IP address here
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
      mode: 'no-cors'
    }).then((response) => response.json())
    .then((data) => console.log(data));   
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