import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { p1 } = this.props;
    const { id, name, type, base_experience } = p1;
    let imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
      id
    ).padStart(3, '000')}.png`;
    return (
      <div className="Pokecard">
        <p className="Pokecard-item">
          <strong>ID: </strong>
          {id}
        </p>
        <p className="Pokecard-item">
          <img className="Pokecard-img" src={imageSrc} alt="" />
        </p>
        <p className="Pokecard-item">
          <strong>Name: </strong>
          {name}
        </p>
        <p className="Pokecard-item">
          <strong>Type: </strong>
          {type}
        </p>
        <p className="Pokecard-item">
          <strong>Exp: </strong>
          {base_experience}
        </p>
      </div>
    );
  }
}

export default Pokecard;
