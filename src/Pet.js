import { createElement } from 'react';

const Pet = props => {
  return createElement("div", {}, [
    createElement("h1", {}, props.name),
    createElement("h2", {}, props.animal),
    createElement("h2", {}, props.breed)
  ]);
};

export default Pet;
