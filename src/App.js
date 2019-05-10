import { Component } from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends Component {
  handleTitleClick() {
    alert("Hello Wolrd!");
  }

  render() {
    return (
      <div>
        <h1 onCLick={this.handleTitleClick}>BF Finder!</h1>
        <Pet name="Piru" animal="Dog" breed="Pitbull"/>
        <Pet name="Onyx" animal="Cat" breed="Bombay"/>
        <Pet name="Lui" animal="Snake" breed="Python"/>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
