import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard.js';

class Pokedex extends Component {
  // static defaultProps = {
  //   pokecards: [
  //     { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  //     { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  //     { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  //     { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  //     { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  //     { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  //     { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  //     { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
  //   ],
  // };
  render() {
    const { hand, condition, total1, total2 } = this.props;
    // console.log(hand);
    return (
      <div className="Pokedex">
        {condition ? (
          <h3 className="win">
            WINNER (Total experience: {Math.max(total1, total2)})
          </h3>
        ) : (
          <h3 className="lose">
            LOSER (Total experience: {Math.min(total1, total2)})
          </h3>
        )}
        <div className="Pokedex-content">
          {hand.map((e) => (
            <div className="Pokedex-item">
              <Pokecard p1={e} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
