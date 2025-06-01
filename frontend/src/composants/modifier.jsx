import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Modifier() {
  const { id } = useParams();
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        setNom(result.data.nom);
        setMail(result.data.mail);
        setAge(result.data.age);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { nom, mail, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center bg-primary align-items-center">
        <form className="w-50 bg-white p-3 rounded" onSubmit={Update}>
          <h3>Modifier utilisateur</h3>
          <div className="form-group">
            {/* <label for="exampleInputEmail1">Nom</label> */}
            <input
              type="text"
              className="form-control mb-3"
              id="nom"
              placeholder="Entrer votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <label for="exampleInputPassword1">E-Mail</label> */}
            <input
              type="mail"
              className="form-control mb-3"
              id="mail"
              placeholder="Entrer votre mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <label for="exampleInputPassword1">Age</label> */}
            <input
              type="number"
              className="form-control mb-3"
              id="age"
              placeholder="Entrer votre age "
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100">Modifier</button>
        </form>
      </div>
    </div>
  );
}
//a
