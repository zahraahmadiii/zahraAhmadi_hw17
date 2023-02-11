import React from "react";
import styled from "styled-components";

const Btn = styled.button`
width: 3.80rem;
height: 2.20rem;
background-color:#2c82f2;
color: white;
border-radius: 6px;
border: none;
`

const Button = ({clickAdd , children , stateBtn , clickYesModal, clickNoModal, id , clickEdit, editBudget})=> {

    const clickHandler = ()=> {
        if(stateBtn === 'save'){
            clickAdd()
        } else if(stateBtn === 'yesDelet'){
            clickYesModal(id)
        } else if(stateBtn === 'noDelet') {
            clickNoModal()
        } else if(stateBtn === 'edit') {
            clickEdit()
        } else if(stateBtn === 'saveEdit') {
            editBudget()
        }   
}

    return(
        <Btn onClick={clickHandler}>{children}</Btn>
    )
}
export default Button