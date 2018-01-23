import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

/*
 * Components
*/
import InputMolecule from '../../components/InputMolecule'

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

  handleSetName(event) {
    event.preventDefault()
    const { username } = this.state
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
      <InputMolecule
        stateUsername={username}
        reduxUsername={user.username}
        onTextChange={this.handleInputChange}
        onSetName={this.handleSetName}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserName,
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
