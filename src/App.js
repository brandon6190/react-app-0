import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert("Hello Wolrd!");
  }

  render() {
    return (
      <div>
        <h1>BF Finder!</h1>
        <Pet name="Piru" animal="Dog" breed="Pitbull"/>
        <Pet name="Onyx" animal="Cat" breed="Bombay"/>
        <Pet name="Lui" animal="Snake" breed="Python"/>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
