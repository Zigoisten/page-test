import React, { useState } from "react";
import "./Homero.css";

function Homero() {
  const [fok, setFok] = useState(0);
  const [kel, setKel] = useState(0);
  const [fahr, setFahr] = useState(0);
  const BtnClick = () => {
    setKel(fok + 273.15);
    setFahr(fok * 1.8 + 32);
  };
  return (
    <div className="Homero">
      <h1>Hőmérséklet Átváltó</h1>
      <p>Adja meg a Celsius hőmérsékletet:</p>
      <input
        type="number"
        placeholder=""
        onChange={(e) => setFok(Number(e.target.value))}
      />
      <button onClick={BtnClick}>Számítás</button>
      <div>
        {fok} &deg;C = {kel} &deg;K
      </div>
      <div>
        {fok} &deg;C = {fahr} &deg;F
      </div>
    </div>
  );
}

export default Homero;
