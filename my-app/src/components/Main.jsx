import { useContext} from 'react'
import BudgetbOX from './BudgetBox'
import Input from './Input'
import ExpenseItem from './ExpenseItem'
import Button from './Button'
import EditModal from './EditModal'
import styled from 'styled-components'
import { store } from './Contexts'


const Container = styled.div`
background-color:#f7f7f7;
display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;
width:75vw;
height:90vh;
padding: 2rem 3.5rem;
margin: 0 auto;
font-family: sans-serif;
position: relative;
`;
const Header = styled.h2`
margin-right: 45rem;
font-size:1.80rem;
`;
const Wrapper_budget = styled.div`
display: flex;
gap: 2rem;
padding: 1rem;
width: 77%; 
`;
const Wrapper_search = styled.div`
width:57vw;
display: flex;
flex-direction: column;
gap: 0.5rem;  
`;
const H4 = styled.div`
font-size:1.40rem; 
font-weight:100;  
`
const Wrapper_allItems = styled.div`
width: 57vw;
border: .5px solid lightgray;
border-radius: 10px;
overflow: hidden;
`;
const WrapperAddExpense =styled.div`
width: 57vw;
display: flex;
 flex-direction: column;
gap: .5rem;
`;
const H3 = styled.h3`
margin: 1rem 0;
font-weight: 100;
font-size:1.40rem; 
`;
const Wrapper_lable = styled.div`
display: flex;
gap: 11rem;
font-size: 1rem;
`;
const Wrapper_input = styled.div`
display: flex;
gap: 1rem;
margin-bottom: .5rem;
`;


function Main() {
  
 const {expenseObj, setExpenseObj, state , dispatch, totalBudget , setTotalBudget}= useContext(store)
 
  const ChangeHandlerName = (event)=> {
    setExpenseObj({...expenseObj, name:event.target.value})
  }

  const ChangeHandlerCost = (event)=> {
    setExpenseObj({...expenseObj, cost: parseInt (event.target.value)})
  }

  const AddHandler = ()=> {
    
    if(expenseObj.name !== '' && expenseObj !== ''){
      dispatch({
        type:"SAVE",
        payload:{
        name:expenseObj.name,
        cost:expenseObj.cost
        }
      })
  

      //map for calculating price of budgetbox
      let totalCost = expenseObj.cost 
      state.map(item => {
      totalCost += item.cost   
      })

      //setstate of budgetbox
      const calc= totalBudget.budget-totalCost
      setTotalBudget({...totalBudget, remaining:calc, spend:totalCost})
    }  
    }

  return (
    <Container>
      <Header>My Budget Planner</Header>

      <Wrapper_budget>
        <BudgetbOX state={'editBtn'} color={'#ccccc8'} lable={"Budget:"} price={totalBudget.budget}/>
        <BudgetbOX color={'#c0ebb2'} lable={"Remaining:"} price={totalBudget.remaining}/>
        <BudgetbOX color={'#b9e1eb'} lable={"SpendSoFar:"} price={totalBudget.spend}/>
      </Wrapper_budget>

      <Wrapper_search>
        <H4>Expenses</H4> 
        <Input placeholder={"Type To Search..."}/>
      </Wrapper_search> 

      <Wrapper_allItems>
       {state.map(item => {
         return <ExpenseItem item={item} key={item.id} />
       })}
      </Wrapper_allItems>

      <WrapperAddExpense>
        <H3>Add Expense</H3>
        <Wrapper_lable>
          <label>Name</label>
          <label>Cost</label>
        </Wrapper_lable>

        <Wrapper_input>
          <Input changeHandlers={ChangeHandlerName} value={expenseObj.name} />
          <Input changeHandlers={ChangeHandlerCost} value={expenseObj.cost}/>
        </Wrapper_input>

        <Button clickAdd={AddHandler} stateBtn={'save'}>Save</Button>
      </WrapperAddExpense>
      {totalBudget.editmood && (<EditModal/>) }  
    </Container>  
  )
}

export default Main
