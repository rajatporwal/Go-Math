import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import JavaScript from './Javascript';
import Regex from './Regex';
import Questions from './Questions';
import PageNotFound from './PageNotFound';
import Conversion from './Conversion';
import DataStructure from './DataStructure';
import MyApps from './MyApps';
import SystemDesign from './SystemDesign';
import ReactJS from './React';
import NodeJS from './Node';
import Typescript from './Typescript';
import Todo from './Todo/todo';
import Admin from './Admin/admin';

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route exact key='home' path='/home' component={Home} />
      <Route exact key='javascript' path='/javascript' component={JavaScript} />
      <Route exact key='react' path='/react' component={ReactJS} />
      <Route exact key='node' path='/node' component={NodeJS} />
      <Route exact key='typescript' path='/typescript' component={Typescript} />
      <Route exact key='regex' path='/regex' component={Regex} />
      <Route exact key='questions' path='/questions' component={Questions} />
      <Route exact key='conversion' path='/conversion' component={Conversion} />
      <Route exact key='ds' path='/ds' component={DataStructure} />
      <Route exact key='myapps' path='/myapps' component={MyApps} />
      <Route exact key='system_design' path='/system_design' component={SystemDesign} />
      <Route exact key='todo' path='/todo' component={Todo} />
      <Route exact key='admin' path='/admin' component={Admin} />
      <Route
        path='*'
        render={() => {
          return <PageNotFound />;
        }}
      />
    </Switch>
  </main>
);

export default Main;
