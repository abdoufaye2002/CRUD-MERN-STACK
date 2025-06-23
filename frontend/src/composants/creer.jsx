import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Creer({ setUsers }) {
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/creerUser", { nom, mail, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex vh-100 justify-content-center bg-primary align-items-center">
      <form className="w-50 bg-white p-3 rounded" onSubmit={submit}>
        <h3>Ajouter utilisateur</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-3"
            id="nom"
            placeholder="Entrer votre nom"
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="mail"
            className="form-control mb-3"
            id="mail"
            placeholder="Entrer votre mail"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control mb-3"
            id="age"
            placeholder="Entrer votre age "
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
//aaaa
