import styled from 'styled-components'


const InputError = styled.div`
  margin-bottom: 24px;
  font-size: 0.9em;
  color: ${props => props.theme.color.warn};
  margin-top: -15px;
  display: ${props => props.error ? 'visible' : 'none'};
`

export default InputError
