import styled from 'styled-components'

/*
*  initial is a Keyword tha represents the same property value that
*  would be there if no value is defined, its like a default value
*/
const FlexElement = styled.div`
  flex-basis: ${props => props.basis || 20}rem;
  align-self: ${props => props.alignSelf};
  order: ${props => props.order || 9999};
  flex-grow: ${props => props.flexGrow || 0};
  flex-shrink: ${props => props.flexShrink || 0};

  height: ${props => props.height || 5}rem;
  width: ${props => props.width || 20}rem;
  color: ${props => props.color || '#fff'};
  background: ${props => props.background || 'coral'};
  border-radius: ${props => props.borderRadius || 0.3}rem;
  text-align: ${props => props.textAlign || 'center'};
`

export default FlexElement
