import React, { PropTypes } from 'react'
import styled from 'styled-components'

/*   Atoms   */
import FlexContainer from '../../atoms/FlexContainer'
import FlexElement from '../../atoms/FlexElement'
import Label from '../../atoms/Label'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const propTypes = {
  stateUsername: PropTypes.string,
  reduxUsername: PropTypes.string,
  onSetName: PropTypes.func,
  onTextChange: PropTypes.func,
}

const CoralLabel = styled(Label)`
  background: coral;
`

function InputMolecule(props) {
  return (
    <div>
      <FlexContainer
        justifyContent="space-around"
      >
        <FlexElement
          basis={100}
          // flexShrink={1}
        >
          1
        </FlexElement>

        <FlexElement
          basis={100}
          background="palevioletred"
          // height={100}
          // borderRadius={10}
          // flexShrink={2}
          // order={1}
          alignSelf="center"
        >
          2
        </FlexElement>

        <FlexElement
          basis={100}
          // flexShrink={1}
        >
          3
        </FlexElement>

        <FlexElement
          basis={100}
          // flexShrink={1}
        >
          4
        </FlexElement>
      </FlexContainer>
    </div>

  )
}


{/* <Input
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
<CoralLabel large >
  reduxUsername: {props.reduxUsername}
</CoralLabel > */}
InputMolecule.propTypes = propTypes

export default InputMolecule
