import React from 'react'
import { useSelector } from 'react-redux'
// import list from 'tar/lib/list'
import {toast, ToastContainer} from 'react-toastify';
import Card from './Card'
import './expense.css'

const ExpenseList = () => {
  const { expense : list ,query} = useSelector((state)=> state.reducer);
  const filterList = list.filter((item)=> item.title.includes(query));
  // console.log(expense);
  const notifySuccess = ()=> toast.success('Expense Deleted');
    return (
        <div className='expense-list'>
          <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
        {filterList.length ? (filterList.map((item)=>(<Card item={item} notifySuccess={notifySuccess} />))):(<div className='empty-state'>
          <img src={require('../../images/empty.png').default} alt='emptyList' className='empty-image'/>
          <label>Ooh!! Your List is Empty</label>
        </div>)}
        </div>
    )
}

export default ExpenseList
