import React from 'react'
import Carousel from './Component/Slider/Slider'
import './Body.css';
import FoodInfo from './Component/FoodInfo/FoodInfo.jsx';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Menu from './Component/menuBar/Menu.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <div className='Body'>
          <div className='InnerBody'>
              <Carousel/>
              <FoodInfo/>
              <About/>
          </div>
      </div>
    </div>
  )
}

export default App