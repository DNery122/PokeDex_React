import React, { useEffect, useState } from "react";
import "./css/PokeVista.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const PokeVista = ({ nombre, url }) => {
  const [img, setimg] = useState();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const consultarPokemon = async () => {
      const respuesta = await axios.get(url);
      setimg(respuesta.data.sprites.front_default);
      setPokemon(respuesta.data);
    };
    consultarPokemon();
  }, []);

  return (
    <>
      <div className="card">
        <img src={img} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
        </div>
      </div>
    </>
  );
};
