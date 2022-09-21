import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to AI based Whale watching podcast!</h1>
        <img src="https://www.clippervacations.com/wp-content/uploads/2021/01/Seattle_WW_HalfDay_Feature.jpg" alt="Girl in a jacket" width="100%" height="600"></img>
        <img src="https://www.visitseattle.org/wp-content/uploads/2018/04/Whale-Watching_courtesy-San-Juan-Islands-Whale-and-Wildlife-Tours.jpg" alt="Girl in a jacket" width="100%" height="600"></img>
      </div>
    );
  }
}
