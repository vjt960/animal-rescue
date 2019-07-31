import React from 'react';
import { connect } from 'react-redux';

const AnimalsContainer = ({ animals }) => {
  const animalCards = animals.map(animal => {
    return (
      <article key={animal.name} className="animal-card">
        <img src={animal.img} alt={animal.img} />
        <strong>{animal.name}</strong>
        <p className="species">{`species: ${animal.species}`}</p>
        <p className="description">{animal.description}</p>
      </article>
    );
  });

  return <section className="animals-container">{animalCards}</section>;
};

const mapStateToProps = state => ({
  animals: state.animals
});

export default connect(mapStateToProps)(AnimalsContainer);
