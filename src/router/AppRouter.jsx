import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokeDetalles } from "../pages/PokeDetalles";
import { PokeLista } from "../pages/PokeLista";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokeLista />} />
        <Route path="detalles" element={<PokeDetalles />} />
      </Routes>
    </>
  );
};
