import React from 'react'
import { useState } from 'react'
import {FaUser} from 'react-icons/fa'
const Div = ({name}) => {
    const [read,setread]= useState(false) ; 
    const text  = "i am a junior web devaloper who wants to bacame senior in the future and i hope to achieve this and become a full stack web devaloper ";
    const less = "Less";
    const more = "More";
return (
<>
<div className='flex flex-col justify-center items-center gap-[20px]'>
  <div className="flex items-center gap-2">
    <FaUser className="text-2xl" />
    <h1>Hello Mr {name}</h1>
  </div>
  <h3>We hope that everything is fine with you</h3>
  <p>{read ? text : text.substring(0,90)+"..."}</p>
  <button className='border border-black border-solid rounded w-[90px] h-[50px] bg-red-900' onClick={() => setread(!read)}>
    {read ? less : more}
  </button>
</div>

</>    
)
}

export default Div