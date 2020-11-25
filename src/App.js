import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from './Components/Inicio';
import Contacto from './Components/Contacto';
import Nosotros from './Components/Nosotros';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button"


function App() {
  return (
    <>
      <Router>
        <div className="App">

          <ButtonGroup arial-label="Basic example">
            <Link to="/">
              <Button variant="secondary">Inicio</Button>
            </Link>
            <Link to="/nosotros">
              <Button variant="secondary">Nosotros</Button>
            </Link>
            <Link to="/contacto">
              <Button variant="secondary">Contacto</Button>
            </Link>
          </ButtonGroup>
        </div>
        <Switch>
          <Router path="/" exact>
            <Inicio />
          </Router>
          <Router path="/nosotros">
            <Nosotros />
          </Router>
          <Router path="/contacto">
            <Contacto />
          </Router>
        </Switch>
      </Router>
    </>
  );
}

export default App;
