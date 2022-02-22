import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className='header-container'>
           <div className='header'>
               <div className='header-logo'>Expense Tracker<i class="fas fa-credit-card"></i></div>
               <div className='header-button'>
               <a href='https://github.com/adarsh4567' target='_blank' rel='noreferrer'><i class="fab fa-github"></i>Star</a>
           </div>
           </div> 
           
        </div>
    )
}

export default Header
