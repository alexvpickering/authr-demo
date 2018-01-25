import styled from 'styled-components'


const InputMessage = styled.div`
  margin-bottom: 24px;
  font-size: 0.9em;
  color: ${props => props.error ? props.theme.color.warn : props.theme.color.success};
  margin-top: -15px;
  display: ${props => (props.error || props.success) ? 'visible' : 'none'};
`

export default InputMessage
