import React, { useState } from "react";
import "./Szamologep.css";

function Szamologep() {
  const [elso, setElso] = useState(0);
  const [masodik, setMasodik] = useState(0);
  const [relacio, setRelacio] = useState("+");
  const [eredmeny, setEredmeny] = useState("");
  const BtnClick = () => {
    if (relacio === "+") {
      setEredmeny(`Eredmeny : ${elso + masodik}`);
    }
    if (relacio === "-") {
      setEredmeny(`Eredmeny : ${elso - masodik}`);
    }
    if (relacio === "*") {
      setEredmeny(`Eredmeny : ${elso * masodik}`);
    }
    if (relacio === "/") {
      if (elso === 0) {
        setEredmeny(`Nullával nem osztunk >:(`);
      } else {
        setEredmeny(`Eredmeny : ${elso + masodik}`);
      }
    }
  };
  return (
    <div className="Szamologep">
      <header className="Szamologep-header">
        <h1>Egyszerű Számológép</h1>
        <input
          type="number"
          placeholder="Adja meg az 1. számot"
          onChange={(e) => setElso(Number(e.target.value))}
        />
        <select onChange={(e) => setRelacio(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          placeholder="Adja meg a 2. számot"
          onChange={(e) => setMasodik(Number(e.target.value))}
        />
        <button onClick={BtnClick}>Számítás</button>
        <div>{eredmeny}</div>
      </header>
    </div>
  );
}

export default Szamologep;
