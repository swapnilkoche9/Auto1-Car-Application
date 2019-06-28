import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/styles.scss'
import asyncComponent from './hoc/AsyncComponent';

const CarHome = asyncComponent(() => {
  return import('./container/CarHome');
})
const CarDetails = asyncComponent(() => {
  return import('./container/CarDetails');
})
const PageNotFound = asyncComponent(() => {
  return import('./components/PageNotFound');
})
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={CarHome} />
          <Route exact path='/car/:stockNumber' component={CarDetails} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App
