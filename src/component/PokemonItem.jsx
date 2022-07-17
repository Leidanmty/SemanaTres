import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonItem = ({ pokemon }) => {
    const [pokemonItem, setPokemonItem] = useState({});

    useEffect(() => {
        axios.get(pokemon.pokemon.url).then((res) => setPokemonItem(res.data));
    }, [pokemon]);

    console.log(pokemonItem);

    return (
        <div>
            <h2>{pokemonItem.name}</h2>
            <img src={pokemonItem.sprites?.front_default} alt="" />
        </div>
    );
};

export default PokemonItem;
