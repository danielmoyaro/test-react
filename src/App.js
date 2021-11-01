import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Admin from './pages/Admin'
import PageNotFound from './pages/PageNotFound';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route component={PageNotFound} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
