import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

function totalExp(arr) {
  return arr.reduce((acc, curVal) => {
    return acc + curVal.base_experience;
  }, 0);
}

class Pokegame extends Component {
  static defaultProps = {
    pokecards: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      {
        id: 12,
        name: 'Butterfree',
        type: 'flying',
        base_experience: 178,
      },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };
  render() {
    const { pokecards } = this.props;
    const hand1 = [];
    const hand2 = [...pokecards];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    const total1 = totalExp(hand1);
    const total2 = totalExp(hand2);
    const condition = totalExp(hand1) > totalExp(hand2);

    return (
      <div className="Pokegame">
        <Pokedex
          hand={hand1}
          condition={condition}
          total1={total1}
          total2={total2}
        />
        <Pokedex
          hand={hand2}
          condition={!condition}
          total1={total1}
          total2={total2}
        />
      </div>
    );
  }
}

export default Pokegame;
