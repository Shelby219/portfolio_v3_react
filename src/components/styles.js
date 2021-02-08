import styled from "styled-components"

export const AppContainer = styled.div `
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

`
export const Logo = styled.div `
  color: #ffffff;
  fontWeight: 600;
  text-align: center;
  padding: 2px;
  margin: 10px;
  width: 150px;
  border-bottom: 1px solid #ffffff;
    @media only screen and  (max-width:600px) {
      align-self: center;
    }
`
export const Background = styled.div `
    background-color: #307060;
    height: 100vh;
`
