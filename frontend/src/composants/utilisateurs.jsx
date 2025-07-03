import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Utilisateurs() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 rounded p-3 bg-white">
        <Link to={"/creer"} className="btn btn-success mb-3">
          Ajouter +
        </Link>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Mail</th>
              <th>Age</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr>
                  <td>{user.nom}</td>
                  <td>{user.mail}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/modifier/${user._id}`}
                      className="btn btn-warning text-black"
                    >
                      Modifier
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-danger text-black"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Supprimer
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
//aaaaaaaa
