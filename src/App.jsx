import './App.css'
import { useState } from "react";
import { useEffect } from 'react';
import Div from './components/div';
import Lottie from 'lottie-react';
import Lotti from './components/lottie';
//rafce : to create an arrow function with export method 

const App = () => {
  return (
  <div className='bg-teal-800 text-white font-[35px] h-[800px] w-[1600px] p-20 border border-black border-solid rounded gap-[20px]' >
  <Div name={"Admane"} />  
  

  <Lotti />
  </div>
  )

  
}

export default App

