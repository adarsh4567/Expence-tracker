export const addExpense = (data)=>{
    console.log(data);
    return{
        type:'add-expense',
        data
    }
}

export const deleteExpense = (data)=>{
    
    return{
        type:'delete-expense',
        data
    }
}

export const searchExpense = (query)=>{
    return{
        type:'search-expense',
        query
    }
}