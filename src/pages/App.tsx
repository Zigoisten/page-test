import React, { useState } from "react";
import logo from "../logo.svg";
import "./App.css";

function App() {
  const [elso, setElso] = useState(0);
  const [masodik, setMasodik] = useState(0);
  const [relacio, setRelacio] = useState("osszead");
  const [eredmeny, setEredmeny] = useState("");

  const Szamolas = () => {
    if (relacio === "osszead") {
      setEredmeny(`${elso + masodik}`);
    }
    if (relacio === "kivon") {
      setEredmeny(`${elso - masodik}`);
    }
    if (relacio === "szoroz") {
      setEredmeny(`${elso * masodik}`);
    }
    if (relacio === "oszt") {
      if (masodik === 0) {
        setEredmeny(`Nana, nullával nem osztunk buta >:c`);
      } else {
        setEredmeny(`${elso / masodik}`);
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Giga Csanád Számológép</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input
            type="number"
            placeholder="elso szam"
            onChange={(e) => setElso(Number(e.target.value))}
          />
          <select onChange={(e) => setRelacio(e.target.value)}>
            <option value="osszead">+</option>
            <option value="kivon">-</option>
            <option value="szoroz">x</option>
            <option value="oszt">/</option>
          </select>
          <input
            type="number"
            placeholder="masodik szam"
            onChange={(e) => setMasodik(Number(e.target.value))}
          />
          {`${eredmeny}`}
        </div>
        <br/>
        <button onClick={Szamolas}>Számol</button>
      </header>
    </div>
  );
}

export default App;
