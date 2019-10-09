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
      getBreeds: this.getBreeds
    }
  }

	render() {
		return (
			<div>
				<header>
					<Link to="/">Adopt Me!</Link>
				</header>
				<Router>
					<Results path="/" />
					<Details path="/details/:id" />
          <SearchParams path="/search-params" />
				</Router>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
