import React from 'react'
import Carousel from './Component/Slider/Slider'
import './Body.css';
import FoodInfo from './Component/FoodInfo/FoodInfo.jsx';
import About from './Component/About/About';

const App = () => {
  return (
    <div className='Body'>
        <div className='InnerBody'>
            <Carousel/>
            <FoodInfo/>
            <About/>
        </div>
    </div>
  )
}

export default App