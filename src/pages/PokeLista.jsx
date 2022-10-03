import React, { useEffect, useState } from "react";
import "./css/PokeLista.css";
import axios from "axios";
import { PokeVista } from "./PokeVista";

export const PokeLista = () => {
  const [pokemones, setpokemones] = useState([]);

  useEffect(() => {
    const consultar = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const respuesta = await axios.get(url);
      setpokemones(respuesta.data.results);
    };
    consultar();
  }, []);

  return (
    <>
      <div className="header">
        <label className="title">pokedex</label>
      </div>
      <div className="content">
        {pokemones.map((pokemon) => (
          <PokeVista
            key={pokemon.name}
            nombre={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </>
  );
};
