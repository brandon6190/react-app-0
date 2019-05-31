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
            pets = [data.petfinder.pets.pet];
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
        <h1>Find A Pet!</h1>
        <div>
          { this.state.pets.map(pet => {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(', ');
            }
            else {
              breed = pet.breeds.breed;
            }

            return (
              <Pet
                key={pet.id}
                name={pet.name}
                animal={pet.animal}
                breed={breed}
              />
            )
          }) }
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
