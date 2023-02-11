import React, { useReducer, useState } from "react";
import { Reducer } from "./Reducer";

export const store = React.createContext({
    state:[],
    dispatch: (dispatch)=>[],
    expenseObj:{},
    setExpenseObj:()=>{},
    modalStatus:'hiden',
    setModalStatus:()=>{},
    id:"",
    setId:()=>{},
    totalBudget:{},
    setTotalBudget:()=>{}
}) 

const ContextProvider = ({children})=> {
    const [state , dispatch] = useReducer(Reducer , [])
    const [modalStatus , setModalStatus] = useState('hiden')
    const initialExpense = {name:"", cost:0 , id : ""}
    const [expenseObj , setExpenseObj] = useState(initialExpense)
    const [id , setId] = useState()
    const initialCost = {budget:2000 , remaining:0 , spend:0 , editMood:false}
    const [totalBudget , setTotalBudget] = useState(initialCost)
  
    return(
        <store.Provider value={{
            state , dispatch,
            expenseObj , setExpenseObj,
            modalStatus , setModalStatus,
            id , setId ,
            totalBudget , setTotalBudget       
        }}>{children}</store.Provider>
    )
}

export default ContextProvider