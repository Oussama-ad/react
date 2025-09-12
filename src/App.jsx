import './App.css'
import Button from './button.jsx'
import { useState } from "react";

//rafce : to create an arrow function with export method 

const App = () => {
  const name ="Admane Oussama" ; 
  const names = ["Oussama","Ali","Yazen"] ; 
  const [Counter,setcount]=useState(0) ; 
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-black w-[100vh] h-[45vh] p-[10px] flex flex-col justify-center items-center gap-[20px]' >
        <h1 className='text-white  text-[35px] text-center font-mono '>Hello {name} </h1>
        <button className=' bg-white text-black border-2 border-solid rounded border-white w-50 h-15 hover:bg-gray-300 cursor-pointer transition-all duration-300' onClick={()=>(setcount(Counter+1))}>Increase </button>
        <h1 className='font-[40px] text-white'>This is the current count : {Counter}</h1>  
        <button className=' bg-white text-black border-2 border-solid rounded border-white w-50 h-15 hover:bg-gray-300 cursor-pointer transition-all duration-300' onClick={()=>(setcount(Counter-1))}>dicrease </button>  
      </div> 
      <ul>
        {names.map((namee)=>(
          <li className='text-[25px] font-roboto text-yellow-600 ' key={namee}>{namee}</li> 
        ))}
      </ul>
      <Button text="click me" />
      </div>
  )
}

export default App

