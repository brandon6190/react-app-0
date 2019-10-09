import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { Provider } from './SearchContext';

import Results from './Results';
import Details from './Details';
import SearchParams from './SearchParams';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: 'New York, NY',
			animal: '',
			breed: '',
			breeds: [],
			handleLocationChange: this.handleLocationChange,
			handleAnimalChange: this.hanldeAnimalChange,
			handleBreedChange: this.handleBreedChange,
			getBreeds: this.getBreeds,
		};
	}

	handleLocationChange = event => {
		this.setState({
			location: event.target.value,
		});
	};

	handleAnimalChange = event => {
		this.setState(
			{
				animal: event.target.value,
				breed: '',
			},
			this.getBreeds,
		);
	};

	handleBreedChange = event => {
		this.setState({
			breed: event.target.value,
		});
	};

	getBreeds() {
		if (this.state.animal) {
			petfinder.breed
				.list({ animal: this.state.animal })
				.then(({ petfinder }) => {
					if (
						petfinder &&
						petfinder.breeds &&
						Array.isArray(petfinder.breeds.breed)
					) {
						this.setState({
							breeds: petfinder.breeds.breed,
						});
					} else {
						this.setState({ breeds: [] });
					}
				});
		} else {
			this.setState({ breeds: [] });
		}
	}

	render() {
		return (
			<div>
				<header>
					<Link to="/">Adopt Me!</Link>
				</header>
				<Provider value={this.state}>
					<Router>
						<Results path="/" />
						<Details path="/details/:id" />
						<SearchParams path="/search-params" />
					</Router>
				</Provider>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
