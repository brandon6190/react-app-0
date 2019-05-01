const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ]);
}

class App extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('h1', {}, 'BF Finder!'),
      React.createElement(Pet, {
        'name': 'Piru',
        'animal': 'Dog',
        'breed': 'Pitbull'
      }),
      React.createElement(Pet, {
        'name': 'Onyx',
        'animal': 'Cat',
        'breed': 'Bombay'
      }),
      React.createElement(Pet, {
        'name': 'Lui',
        'animal': 'Snake',
        'breed': 'Python'
      }),
    ]);  
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
