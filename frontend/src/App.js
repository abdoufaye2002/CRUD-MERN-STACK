import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Creer from "./composants/creer";
import Modifier from "./composants/modifier";
import Utilisateurs from "./composants/utilisateurs";
// import Todolist from "./composants/todolist"; c'etait juste un essaie apar

function App() {
  // const [users, setUsers] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Utilisateurs />}></Route>
          <Route path="/creer" element={<Creer />}></Route>
          <Route path="/modifier/:id" element={<Modifier />}></Route>
          {/* <Route path="/todolist" element={<Todolist />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//tt
