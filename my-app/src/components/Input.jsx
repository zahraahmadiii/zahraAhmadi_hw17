import React from "react";
import styled from 'styled-components'

const InputItem = styled.input`
border: 1px solid lightgray;
border-radius: 5px;
padding: .6rem;
outline: none;
`


const Input = ({placeholder , changeHandlers})=> {

    const ChangeInput = (event)=> {
        changeHandlers(event)
    }
    return(
        <InputItem type="text" placeholder={placeholder} onChange={ChangeInput}/>
    )
}
export default Input