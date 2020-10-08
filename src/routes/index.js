import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../screens/About';
import Landing from '../screens/Landing';
import Projects from '../screens/Projects';
import Showroom from '../screens/Showroom';
import Contact from '../screens/Contact';
import Container from '../components/Container';
import { LightSecondary } from '../colors';

const Routes = () => (
  <Container background={LightSecondary}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/gallery" component={Showroom} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </Container>
);

export default Routes;
