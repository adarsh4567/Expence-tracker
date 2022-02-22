const initialList = ()=>{
    const list = localStorage.getItem('expense-list');
    let expenseList = [];
    if(list){
        expenseList=JSON.parse(list);
    }
    return expenseList
}


const initialState = {
    expense:initialList(),
    query:''
}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
      case 'add-expense':
          localStorage.setItem('expense-list',JSON.stringify([...state.expense,action.data]))
          return{
              ...state,
              expense:[...state.expense,action.data],
          }
      case 'delete-expense':
          const {data} = action;
          const update = state.expense.filter((item)=> item.createdAt !== data.createdAt);
          localStorage.setItem('expense-list',JSON.stringify(update))
          return{
             ...state,
             expense:update,
          }      
      case 'search-expense':
          const {query} = action;
          return{
               ...state,
               query
          }      
    
        default:
            return state
    }
}