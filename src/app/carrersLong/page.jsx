"use client";
import React from "react";
import Nav from "@/components/navbar/Nav";
import "./styles.modules.css";

const CarrersLong = () => {
  return (
    <>
      <Nav />
      <section className="long-carrers-main">
        <div className="long-carrers-title">
          <h1>Universidades</h1>
        </div>
        <div className="carrers-input-container">
          <input
            className="long-carrers-input"
            placeholder="Busca alguna universidad o carrera"
          />
        </div>
        <section className="mini-cards"></section>
      </section>
    </>
  );
};

export default CarrersLong;
