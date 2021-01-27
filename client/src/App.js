import './App.css';
import Home from './components/Home/Home.js';
import Http404 from './components/404/404.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='*' component={Http404}></Route>
      </Switch>
    </Router>
  );
}

export default App;
