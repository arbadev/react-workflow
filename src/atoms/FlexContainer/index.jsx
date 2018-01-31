import styled from 'styled-components'

/*
*  initial is a Keyword tha represents the same property value that
*  would be there if no value is defined, its like a default value
*/
const FlexContainer = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'initial'};
  flex-wrap: ${props => props.flexWrap || 'initial'};
  justify-content: ${props => props.justifyContent || 'center'};
/* align-items for single lines and align-content for multilines */
  align-items: ${props => props.alignItems || 'center'};
  align-content: ${props => props.alignContent || 'center'};

  background: ${props => props.background || 'Gainsboro'};
  border-radius: ${props => props.borderRadius || 0.3}rem;
  padding: ${props => props.padding || 1}rem;
  width: ${props => props.width || 50}rem;
  height: ${props => props.height || 50}rem;
  margin:0 auto;
`
export default FlexContainer
