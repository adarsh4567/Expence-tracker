import React, { useState } from 'react'
import './top-fold.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expences';
const TopFold = () => {
    const [search,setSearch] = useState('');
    const dispatch = useDispatch();
    const handleChange =(e)=>{
        setSearch(e.target.value);
        dispatch(searchExpense(e.target.value));
    }

    return (
        <>
          {window.location.pathname ==='/'?(
              <div className='topFold'>
              <div className='home-topFold'>
                  <div className='searchbar'>
                  <i class="fas fa-search"></i>
                  <input placeholder='Search' value={search} onChange={handleChange}></input>
                  </div>
                  <Link to='/expense'>
                  <div className='add-button'>
                  <i class="fas fa-plus-circle"></i>
                  <label>Add</label>
                  </div>
                  </Link>
              </div>
          </div>):(<div className='add-topFold'>
              <Link to='/'>
              <div className='add-topFold-button'>
              <i class="fas fa-chevron-left"></i>
              <label>Back</label>
              </div>
              </Link>
              <Link to='/'>
              <div className='add-topFold-button'>
              <i class="far fa-times-circle"></i>
              <label>Cancel</label>
              </div>
              </Link>
          </div>)}  
        </>
    )
}

export default TopFold
