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
  setUserName: PropTypes.func,
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: this.props.user.username,
    }

    this.handleSetName = this.handleSetName.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSetName(event, username) {
    event.preventDefault()
    this.setState({ username })
    this.props.setUserName(username)
  }

  handleInputChange(event) {
    event.preventDefault()
    const { target } = event
    this.setState({ username: target.value })
  }

  render() {
    const { user } = this.props
    const { username } = this.state
    return (
      <div>
        <div>
          <button onClick={e => this.handleSetName(e, username)}>
            setUserName
          </button>
          <input
            name="inputText"
            type="text"
            value={username}
            onChange={this.handleInputChange}
          />
        </div>
        <h1>Hola {user.username}!</h1>
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
