import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'normalize-css'

// import styles from './app.css'
import Header from '../../components/Header'
import Main from '../Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/"
              render={
                () => {
                  return (
                    <Main />
                  )
                }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
