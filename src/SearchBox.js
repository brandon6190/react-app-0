import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';

class Search extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  }

	render() {
		return (
			<Consumer>
				{context => (
					<div className="search-params">
						<form onSubmit={this.props.handleFormSubmit} >
							<label htmlFor="location">
								Location:
								<input
									onChange={context.handleLocationChange}
									id="location"
									value={context.location}
									placeholder="Location"
								/>
							</label>

							<label htmlFor="animal">
								Animal:
								<select
									id="animal"
									value={context.animal}
									onChange={context.handleAnimalChange}
									onBlur={context.handleAnimalChange}>
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
									disabled={!context.breeds.length}
									id="breed"
									value={context.breed}
									onChange={context.handleBreedChange}
									onBlur={context.handleBreedChange}>
									<option />
									{context.breeds.map((breed, index) => {
										return (
											<option key={index} value={breed}>
												{breed}
											</option>
										);
									})}
								</select>
							</label>

							<button>Submit</button>
						</form>
					</div>
				)}
			</Consumer>
		);
	}
}

export default Search;
