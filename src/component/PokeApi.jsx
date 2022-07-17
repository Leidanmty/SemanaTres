import axios from "axios";
import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";

function App() {
  const [pokemonType, setPokemonType] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 20) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/type/${random}/`)
      .then((res) => setPokemonType(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${searchValue}/`)
      .then((res) => setPokemonType(res.data));
  };

  const [page, setPage] = useState(1);
  const lastIndex = page * 20;
  const firstIndex = lastIndex - 20;
  const pokemonsPaginated = pokemonType.pokemon?.slice(firstIndex, lastIndex);

  const lastPage = Math.ceil(pokemonType.pokemon?.length / 20);

  const numbers = []; // [1, 2, 3, 4]
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={searchType}>Submit</button>
      <h1>{pokemonType.name}</h1>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev page
      </button>
      {numbers.map((number) => (
        <button onClick={() => setPage(number)}>{number}</button>
      ))}
      <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
        Next Page
      </button>
      <ul>
        {pokemonsPaginated?.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={pokemon.pokemon.url} />
        ))}
      </ul>
    </div>
  );
}

export default App;
