import React, { PropTypes } from 'react'
import styled from 'styled-components'

const propTypes = {
  stateUsername: PropTypes.string,
  reduxUsername: PropTypes.string,
  onSetName: PropTypes.func,
  onTextChange: PropTypes.func,
}

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px;
  margin: 10px;
`

const Input = styled.input.attrs({
  type: 'text',
  size: props => props.large ? 15 : 8,
  defaultValue: props => props.defaultValue,
})`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px;
  margin: 10px;
`

const Label = styled.label`
  background: papayawhip;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px;
  margin: 10px;
`

function InputMolecule(props) {
  return (
    <div>
      <Input
        defaultValue={props.stateUsername}
        onChange={props.onTextChange}
        large
      />
      <Button
        onClick={props.onSetName}
      >
        Set username
      </Button>
      <Label large >
        stateUsername: {props.stateUsername}
      </Label>
      <Label large >
        reduxUsername: {props.reduxUsername}
      </Label>
    </div>
  )
}

InputMolecule.propTypes = propTypes

export default InputMolecule
