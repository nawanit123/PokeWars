import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function totalExp(arr) {
  let total = 0;
  arr.forEach((e) => (total += e.base_experience));
  return total;
}

class Pokegame extends Component {
  render() {
    const { pokecards } = this.props;
    const shuffled = shuffle(pokecards);
    const hand1 = shuffled.slice(0, 4);
    const hand2 = shuffled.slice(4, 8);
    const condition = totalExp(hand1) > totalExp(hand2);

    return (
      <div className="Pokegame">
        <Pokedex hand={hand1} condition={condition} />
        <Pokedex hand={hand2} condition={!condition} />
      </div>
    );
  }
}

export default Pokegame;
