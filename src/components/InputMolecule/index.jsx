import React, { PropTypes } from 'react'
import styled from 'styled-components'

/*   Atoms   */
import FlexContainer from '../../atoms/FlexContainer'
// import FlexElement from '../../atoms/FlexElement'
import Label from '../../atoms/Label'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const propTypes = {
  stateUsername: PropTypes.string.isRequired,
  reduxUsername: PropTypes.string.isRequired,
  onSetName: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
}

const CoralLabel = styled(Label)`
  background: coral;
`

function InputMolecule(props) {
  return (
    <FlexContainer
      justifyContent="space-around"
      flexWrap="wrap"
      height={20}
    >
      <Input
        defaultValue={props.stateUsername}
        onChange={props.onTextChange}
        large
      />
      <CoralLabel>
        stateUsername:<br /> {props.stateUsername}
      </CoralLabel>
      <Button
        onClick={props.onSetName}
      >
        Set username
      </Button>
      <CoralLabel>
        reduxUsername:<br /> {props.reduxUsername}
      </CoralLabel>

    </FlexContainer>
  )
}

InputMolecule.propTypes = propTypes

export default InputMolecule
