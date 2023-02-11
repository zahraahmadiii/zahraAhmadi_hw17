import React, { useContext } from "react";
import styled from 'styled-components'
import Button from "./Button";
import { store } from "./Contexts";
import  ReactDOM from "react-dom";

const ModalOverlay = styled.div`
background-color: rgb(143 143 143 / 50%);
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
overflow: hidden;
`;
const ModalWrapper = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;
align-items: center;
justify-content: center;
width: 20%;
height: 28vh;
background-color:white;
border-radius: 10px;
`;

const ModalText= styled.p`
font-family: sans-serif;
font-size:1rem;
margin-bottom:1rem;
`;

const WrapperBtn = styled.div`
display: flex;
gap: 1rem;
`

const ModalPortal = ()=> {

    const {dispatch ,modalStatus , setModalStatus, id , setId} = useContext(store)

    if (!modalStatus) return null
 
    //yes btn of modal portal and delete expense Item
    const DeletHandler = (id)=> {  
        dispatch({
            type: "DELET",
            payload:{
                id
            }
        })   
        setModalStatus('hiden')
        setId('')
    }

    //no btn of modal portal and close modal
    const DontDelet = ()=> {
        setModalStatus('hiden')
        setId('')
    }
  
    return ReactDOM.createPortal( 
        <ModalOverlay>
            <ModalWrapper>
                <ModalText>
                    Are you sure to delete this expenseitem?
                </ModalText>
                <WrapperBtn>
                    <Button clickYesModal={()=>DeletHandler(id)} stateBtn={'yesDelet'}>Yes</Button>
                    <Button clickNoModal={DontDelet} stateBtn={'noDelet'}>No</Button>
                </WrapperBtn>
            </ModalWrapper>
        </ModalOverlay>,

        document.getElementById('portal') 
    )
}
export default ModalPortal