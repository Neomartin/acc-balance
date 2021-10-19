import './App.css';
import { Switch, Route, Router, NavLink } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
        <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
        <NavLink to="/contact" activeClassName="active-link" exact>Contacto</NavLink>
        <NavLink to="/about" activeClassName="active-link" exact>Acerca de</NavLink>
        <NavLink to="/login" activeClassName="active-link" exact>Login</NavLink>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </>
  );
}

export default App;
