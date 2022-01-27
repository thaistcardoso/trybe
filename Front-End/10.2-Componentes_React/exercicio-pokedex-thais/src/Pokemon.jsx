import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, imag } } = this.props;
    return (
      <div className='pokemon'>
        <div>
        <p> {name}</p>
        <p>{type}</p>
        <p>
          {` Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        </div>
        <img src={imag} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    pokeImg: PropTypes.string,
  }).isRequired
};

export default Pokemon;