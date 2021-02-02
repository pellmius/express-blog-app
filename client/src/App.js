import './App.css';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Http404 from './components/404/404.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SidebarProvider} from './contexts/SidebarContext';
import {Login} from './components/Login';

function App() {
  return (
    <Router>

      <SidebarProvider>
       <Navbar></Navbar>
       <Sidebar></Sidebar> 

      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/home' component={Home}></Route>
        <Route path ='/login' component={Login}></Route>
        <Route  path='*' component={Http404}></Route>
      </Switch>
      </SidebarProvider>
    </Router>
  );
}

export default App;
