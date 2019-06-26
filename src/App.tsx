import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CarHome from './container/CarHome'
import CarDetails from './container/CarDetails'
import PageNotFound from './components/PageNotFound'
import './styles/styles.scss'
import './assets/logo.png'

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
