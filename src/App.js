import React, { Component } from 'react';
import './App.css';
import Pokegame from './Pokegame';
import axios from 'axios';

const randomNumber = (num) => {
  const arr = [];
  while (arr.length < num) {
    let r = Math.floor(Math.random() * 150) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};
const fetchPokemon = async () => {
  try {
    let randomArray = randomNumber(8);
    const poke1 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[0]}`
    );
    const poke2 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[1]}`
    );
    const poke3 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[2]}`
    );
    const poke4 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[3]}`
    );
    const poke5 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[4]}`
    );
    const poke6 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[5]}`
    );
    const poke7 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[6]}`
    );
    const poke8 = axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomArray[7]}`
    );
    const promisedData = await Promise.all([
      poke1,
      poke2,
      poke3,
      poke4,
      poke5,
      poke6,
      poke7,
      poke8,
    ]);
    return promisedData;
  } catch {
    console.log('Oops!! Something went wrong!!!');
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeData: [],
    };
  }
  componentDidMount() {
    fetchPokemon()
      .then((res) =>
        res.map((e) => {
          const { name, id, base_experience } = e.data;
          let type = [];
          e.data.types.forEach((e) => type.push(e.type.name));
          return { name, id, type: type.join(), base_experience };
        })
      )
      .then((pokemons) => this.setState({ pokeData: pokemons }))
      .catch((err) => console.log(err));
  }
  render() {
    const { pokeData } = this.state;
    return (
      <div className="App">
        <Pokegame pokecards={pokeData} />
      </div>
    );
  }
}

export default App;

// [
//   { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
//   { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
//   { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
//   {
//     id: 12,
//     name: 'Butterfree',
//     type: 'flying',
//     base_experience: 178,
//   },
//   { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
//   { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
//   { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
//   { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
// ];
