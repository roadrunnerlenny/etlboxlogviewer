import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { ProcessOverviewContainer } from '../containers/ProcessOverviewContainer'
import { LogContainer } from '../containers/LogContainer'

export class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/overview' component={ProcessOverviewContainer} />        
        <Route path='/log' component={LogContainer} />        
      </Layout>
    );
  }
}
