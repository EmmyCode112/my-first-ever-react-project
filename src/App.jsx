import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/Navbar/Dropdown';
import ContentBody from './ContentBody';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Dropdown />
      <ContentBody />
      <Footer/>
    </div>
  )
}

export default App;