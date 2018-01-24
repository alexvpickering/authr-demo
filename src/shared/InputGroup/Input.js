import styled from 'styled-components'


const Input = styled.input`
  border: 1px solid ${p => p.error ? p.theme.color.warn : p.theme.color.gray_l};
  border-radius: 2px;
  padding: 16px 12px;
  font-size: 16px;
  line-height: 20px;
  font-family: inherit;
  margin: 10px 0 24px;
  display: block;
  width: 100%;
  box-sizing: border-box;
`

export default Input
