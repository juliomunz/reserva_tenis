import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Login from './views/Login';
import ReservarCancha from './views/BookCourt';
import HomeCourt from './views/HomeCourt';
import DetalleCancha from './views/DetailsCourt'

function App() {
  
  return (
    <div className="App">
      <Router>
      <div>
        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>        
          <Switch>         
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/home">
              <HomeCourt/>
            </Route>
            <Route exact path="/detallecancha/:id">
              <DetalleCancha/>
            </Route>
            <Route exact path="/cancha/:id">
              <ReservarCancha/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
