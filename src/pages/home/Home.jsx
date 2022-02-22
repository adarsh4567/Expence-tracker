import React from 'react'
import ExpenseList from '../../components/expense-list/ExpenseList'
import TopFold from '../../components/top-fold/TopFold'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <TopFold/>
            <ExpenseList/>
        </div>
    )
}

export default Home
