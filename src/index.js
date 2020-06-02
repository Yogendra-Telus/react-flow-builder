import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter } from 'react-router-dom';

import Overview from './Overview';
import Basic from './Basic';
import CustomNode from './CustomNode';
import Stress from './Stress';
import Inactive from './Inactive';
import Empty from './Empty';
import Edges from './Edges';
import Horizontal from './Horizontal';

import './index.css';

const routes = [{
  path: '/',
  component: Overview,
  label: 'Overview'
}, {
  path: '/basic',
  component: Basic,
  label: 'Basic'
}, {
  path: '/edges',
  component: Edges,
  label: 'Edges'
}, {
  path: '/custom-node',
  component: CustomNode,
  label: 'CustomNode'
}, {
  path: '/horizontal',
  component: Horizontal,
  label: 'Horizontal'
}, {
  path: '/stress',
  component: Stress,
  label: 'Stress'
}, {
  path: '/empty',
  component: Empty
}, {
  path: '/inactive',
  component: Inactive
}];

const navLinks = routes.filter(route => route.label);

const SourceDisplay = withRouter(({ location }) => {
  const route = routes.find(route => route.path === location.pathname);
  const sourceLink = `https://github.com/wbkd/react-flow/tree/master/example/src/${route.label}/index.js`;

  return (
    <a className="sourcedisplay" href={sourceLink}>
     {'<Source />'}
    </a>
  );
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState();

  return  (
    <header>
      <a className="logo" href="https://github.com/wbkd/react-flow">React Flow</a>
      <nav className={menuOpen ? 'is-open' : ''}>
        {navLinks.map(route => (
          <NavLink to={route.path} key={route.label} exact>
            {route.label}
          </NavLink>
        ))}
      </nav>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
    </header>
  );
}

ReactDOM.render((
  <Router forceRefresh={true}>
    <Header />
    <SourceDisplay />
    <Switch>
      {routes.map(route => (
        <Route exact path={route.path} render={() => <route.component />} key={route.path} />
      ))}
    </Switch>
  </Router>
), document.getElementById('root'));

