import React from 'react';
import pf, { ANIMALS } from 'petfinder-client';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET,
});

class SearchParams extends React.Component {
	state = {
		location: 'New York, NY',
		animal: '',
		breed: '',
		breeds: [],
	};

	render() {
		return (
			<div className="search-params">
				<label htmlFor="location">
					Location:
					<input
						onChange={this.handleLocationChange}
						id="location"
						value={this.state.location}
						placeholder="Location"
					/>
				</label>

				<label htmlFor="animal">
					Animal:
					<select
						id="animal"
						value={this.state.animal}
						onChange={this.handleAnimalChange}
						onBlur={this.handleAnimalChange}>
						<option />
						{ANIMALS.map(animal => {
							return (
								<option key={animal} value={animal}>
									{animal}
								</option>
							);
						})}
					</select>
				</label>

				<label htmlFor="breed">
					Breed:
					<select
						id="breed"
						value={this.state.breed}
						onChange={this.handleBreedChange}
						onBlur={this.handleBreedChange}
						disabled={!this.state.breeds.length}>
						<option />
						{this.state.breeds.map((breed, index) => {
							return (
								<option key={index} value={breed}>
									{breed}
								</option>
							);
						})}
					</select>
				</label>

				<button>Submit</button>
			</div>
		);
	}
}

export default SearchParams;
