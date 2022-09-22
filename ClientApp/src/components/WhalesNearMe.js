import React, { Component } from 'react';
import BingMapsReact from "bingmaps-react";



export class WhalesNearMe extends Component {



  async getData() {
    let rep = await fetch('https://localhost:7146/api/LocationsData', {  // Enter your IP address here
      // headers: { 'Content-Type': 'application/json' },
      method: 'GET',
      mode: 'no-cors'
    });
    //let rep = await fetch('https://localhost:7146/api/LocationsData');
    // let rep = await fetch('https://localhost:7146/api/LocationsData', {  // Enter your IP address here
    //   // headers: { 'Content-Type': 'application/json' },
    //   method: 'GET',
    //   //   mode: 'no-cors'
    // });
    console.log(rep);
    const data = await rep.text();
    console.log(data);

  }

  render() {
    return (
      <div>
        {/* <script src="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0" type="text/javascript">          
        </script> */}
        <h1>Whales near me!</h1>
        <button className="btn btn-primary" onClick={this.getData}>Get Data</button>
        <BingMapsReact
      bingMapsKey="Amhldcz34o9Q9k3vkKXOIYjgCXLxYJBf5asYmNXL6up5tPOFKmWuRQI9ZUppfoSU"
      height="1000px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="1000px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />        
        {/* <body>
          <div id="divMap" style="position:relative;width:400px;   height:400px;border:1px solid blue;"></div>
        </body> */}
      </div>
    );
  }
}