import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import HomeCourt from './views/HomeCourt';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <div className="nav-bar">
          <ul>
            {/* <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/new"></Link>
            </li>
            <li>
              <Link to="/details/:id"></Link>
            </li> */}
            <li>
              <Link to="/canchauno">Dashboard</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>        
          <Switch>         
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/">
            <xx/>
          </Route>
          <Route exact path="">
            <xx/>
          </Route>
          <Route exact path="">
            <xx/> */}
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/home">
              <HomeCourt/>
            </Route>
            <Route exact path="/canchas/:id">
              <Dashboard/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
