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
  border-radius: ${props => props.borderRadius || 3}px;
  padding: ${props => props.padding || 10}px;
  width: ${props => props.width || 500}px;
  height: ${props => props.height || 500}px;
  margin:0 auto;
`
export default FlexContainer
