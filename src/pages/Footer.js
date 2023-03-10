import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "./Context"

function Footer(){
    const FooterContainer=styled.footer`
      display: flex;
      flex-direction: row;
      align:items: center;
      justify-content: center;
      padding-top: 60px;
    `

    const NightModeButton=styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: red;
    `
    const {theme,toggleTheme}=useContext(ThemeContext)
    return(
        <FooterContainer>
            <NightModeButton onClick={()=>toggleTheme()}>
                Switch Mode : {theme==='light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer