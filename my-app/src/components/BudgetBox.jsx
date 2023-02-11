import React, {useContext} from "react";
import styled from 'styled-components'
import Button from "./Button";
import { store } from "./Contexts";

const BudgetBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
width: 28%;
height: 2.2rem;
border-radius: 7px;
padding:.75rem;
`

const BudgetbOX = ({color,lable,state,price})=> {
    const {setTotalBudget} = useContext(store)

    const EditHandler = ()=> {
        setTotalBudget({editmood:true})     
     }

    return(
        <>
          {state === 'editBtn' ?
          <BudgetBox style={{backgroundColor:color}}>{lable+price}$<Button children={'Edit'} clickEdit={EditHandler} stateBtn={"edit"} /></BudgetBox>
          :
          <BudgetBox style={{backgroundColor:color}}>{lable+price+'$'}</BudgetBox>
          }    
        </>       
    )
}
export default BudgetbOX