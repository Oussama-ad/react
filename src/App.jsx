import './App.css'
//rafce : to create an arrow function with export method 

const App = () => {
  const name ="Admane Oussama" ; 
  const names = ["Oussama","Ali","Yazen"] ; 
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-black w-[100vh] h-[45vh] p-[10px] flex flex-col justify-center items-center gap-[20px]' >
        <h1 className='text-white  text-[35px] text-center font-mono '>Hello {name} </h1>
        <button className=' bg-white text-black border-2 border-solid rounded border-white w-50 h-15 hover:bg-gray-300 cursor-pointer transition-all duration-300'>Press me </button>
      </div> 
      <ul>
        {names.map((namee)=>(
          <li className='text-[25px] font-roboto text-yellow-600 ' key={namee}>{namee}</li> 
        ))}
      </ul>
      </div>
  )
}

export default App

