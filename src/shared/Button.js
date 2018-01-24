import styled from 'styled-components'


const Button = styled.button`
  background-color: ${props => props.theme.color.primary_l};
  color: ${props => props.theme.color.white};
  cursor: pointer;
  font-family: inherit;
  text-align: center;
  display: inline-block;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.color.primary_d};
  }
`

export default Button
