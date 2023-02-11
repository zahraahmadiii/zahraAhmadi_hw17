export const Reducer = (state , action)=> {
    switch(action.type){
        case "SAVE":
        return[...state, {
            name: action.payload.name,
            cost: action.payload.cost,
            id: Date.now()
        }]
        case "DELET":
            return state.filter(item => item.id !== action.payload.id)   
                 
        default: return state    
    }
}