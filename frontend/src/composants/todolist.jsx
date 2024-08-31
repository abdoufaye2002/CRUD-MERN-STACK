import React, { useState } from "react";

function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Liste d'éléments</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez un élément"
      />
      <button onClick={handleClick}>Ajouter</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
