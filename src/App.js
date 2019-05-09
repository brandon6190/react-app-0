import { Component, createElement } from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends Component {
  handleTitleClick() {
    alert("Hello Wolrd!");
  }

  render() {
    return createElement("div", {}, [
      createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "BF Finder!"
      ),
      createElement(Pet, {
        name: "Piru",
        animal: "Dog",
        breed: "Pitbull"
      }),
      createElement(Pet, {
        name: "Onyx",
        animal: "Cat",
        breed: "Bombay"
      }),
      createElement(Pet, {
        name: "Lui",
        animal: "Snake",
        breed: "Python"
      })
    ]);
  }
}

render(createElement(App), document.getElementById("root"));
