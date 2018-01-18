import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

/*
 * Actions
*/

import { setUserName } from '../../actions/user'

const propTypes = {
  user: PropTypes.object,
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { user } = this.props
    console.log('user', user)
    return (
      <div>
        <h1>Hola mundo!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setUserName,
    }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
