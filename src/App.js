import React from 'react';
import { render } from 'react-dom';
import pf from 'petfinder-client';
import Pet from './Pet';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    petfinder.pet.find( { output: 'full', location: 'New York, NY'} )
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) { 
            pets = data.petfinder.pets.pet; 
          }
          else {
            pets = [data.petfinder.pets.pet];  and assign it to pets
          }
        }
        else { 
          pets = [];
        }

        this.setState({
          pets
        });
      });

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
