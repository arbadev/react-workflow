import styled from 'styled-components'

/*
*  initial is a Keyword tha represents the same property value that
*  would be there if no value is defined, its like a default value
*/
const Input = styled.input.attrs({
  type: 'text',
  size: props => props.large ? 15 : 8,
  defaultValue: props => props.defaultValue,
})`
  background: mintcream;
  border-radius: 1px;
  border: none;
  color: dimgray;
  padding: 10px;
  margin: 10px;
  width: 180px;
`

export default Input
