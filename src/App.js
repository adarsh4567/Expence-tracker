import React from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import AddExpense from './pages/home/add-expense/AddExpense'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Router>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/expense' element={<AddExpense/>}/>
     </Routes>
     <Footer/>
     </Router>
    </>
  )
}

export default App
