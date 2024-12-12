import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png"

import "./App.css";

const GenreSelection = () => {
  //const navigate = useNavigate();

  const [genres, setGenres] = useState([
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Fantasia",
    "Ficção Científica",
    "Mistério",
    "Romance",
    "Terror",
    //"Animação"
  ]);

  const [selectedGenres, setSelectedGenres] = useState([]);

  const newGenres = ["Documentário", "Musical", "Histórico"];

  const toggleGenre = (genre) =>{
    setSelectedGenres((prevSelected) =>
    prevSelected.includes(genre)
      ? prevSelected.filter((item) => item !== genre)
      : [...prevSelected, genre]
    );
  };

  /*const handleNext = () => {
    navigate("/time-selection");  
  };*/
  
  const addGenres = () => {
    setGenres((prevGenres) => [...prevGenres, ...newGenres]);
  };
  
  return (
    <div className="container">

      <div className="left-section">
        
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <h1 className="title">
          Escolha <br /> dos <br /> Gêneros
        </h1>
      </div>
      
      <div className="right-section">
        
        <div className="genres-container">
          {genres.map((genre, index) => (
            <button 
            key={index} 
            className={`genre-button ${
              selectedGenres.includes(genre) ? "selected" : ""
            }`}
            onClick={() => toggleGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <br />
          <button className="add-button" onClick={addGenres}>+</button>
      </div>
      <button 
        className="next-button" 
        //onClick={handleNext}
        //disabled={selectedGenres.length === 0}
        >→</button>
    </div>
  );
};

export default GenreSelection;