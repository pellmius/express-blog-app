import './App.css';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Http404 from './components/404/404.js';
import Logout from './components/Logout/Logout.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SidebarProvider} from './contexts/SidebarContext';
import {LoginProvider} from './contexts/LoginContext';
import {NavbarProvider} from './contexts/NavbarContext';

import Login from './components/Login/Login.js';

function App() {
  return (
    <Router>
      <NavbarProvider>
        <LoginProvider>
          <SidebarProvider>
            <Navbar></Navbar>
            <Sidebar></Sidebar> 

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route  path='/home' component={Home}></Route>
              <Route path ='/login' component={Login}></Route>
              <Route path='/logout' component={Logout}></Route>
              <Route  path='*' component={Http404}></Route>
              
            </Switch>
          </SidebarProvider>
        </LoginProvider>
      </NavbarProvider>
    </Router>
  );
}

export default App;
