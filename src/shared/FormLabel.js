import styled from 'styled-components'


const FormLabel = styled.label`
  color: ${p => p.error ? p.theme.color.warn : 'inherit'};
`

export default FormLabel
