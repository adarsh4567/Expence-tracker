import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { categories } from '../../constants/add-expense'
import { addExpense } from '../../redux/actions/expences';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal'
import './add-form.css'


const AddForm = () => {
    const [categoryOpen,setCategoryOpen]= useState(false);
    const cat = categories;
    const [state,setState]= useState({
        title:'',
        amount:'',
    })
    const [category,setCategory]=useState();
    const dispatch = useDispatch();
    const [modalOpen,setModalOpen] = useState(false);
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        if(isNaN(value)&& name==='amount'){
            setState((preVal)=>{
                return{
                    ...preVal,
                    [name]:''
                }
            })
        }else{
        setState((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
}
    const handleCategory = (category)=>{
        setCategory(category);
        setCategoryOpen(false)
    }
    const handleSubmit = ()=>{
        if(state.title ===''|| state.amount===''||!category){
            const notify = ()=> toast('please enter the data');
            notify();
            return;
        }
        const data = {
            title:state.title,
            amount:state.amount,   
            category,
            createdAt:new Date(),
        }
        dispatch(addExpense(data));
        setModalOpen(true);

    }
    return (
        <div className='add-form'>
        <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
<SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
               <label>Title</label>
               <input placeholder='write the expense' name='title' value={state.title} onChange={handleChange}></input>
            </div>
            <div className='form-item'>
                <label>Amount</label>
                <input className='amount-input' placeholder='Enter the amount' name='amount' value={state.amount} onChange={handleChange}></input>
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={()=>{ setCategoryOpen(!categoryOpen);
                    console.log('clicked')}}>
                    <label>{category ? category.title:'Category'}</label>
                    <i class="fas fa-chevron-down" ></i>
                    </div>
                    {categoryOpen &&
                        <>
                        {cat.map((category,index)=>(
                            
                            <div className='category-item' style={{borderRight:`5px solid ${category.color}`}}
                             key={index} onClick={()=>handleCategory(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon.default} alt={category.title}/>
                            </div>
                            
                        ))
                           
                         }
                    </>}
                </div>
            </div>
            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="far fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm
