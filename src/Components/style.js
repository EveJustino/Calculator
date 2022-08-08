import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
`

export const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-image: linear-gradient(#BA55D3, #FF69B4);
`
export const Title = styled.h1`
    font-size:30px;
    
`
export const Input = styled.input`
    margin-top:2px;
    border-radius:8px;
`

export const Buttons = styled.div`
    width:19vw;
    margin-top:10px;
`
export const Button = styled.button`
    width:40px;
    height:30px;
    margin-left:20px;
    font-size:25px;
    border-radius:10px;
    border:none;
    background-color:white;
`
export const Delete = styled.button`
    margin-top:10px;
    font-size:17px;
    border-radius:10px;
    border:none;
    background-color:white;    
`