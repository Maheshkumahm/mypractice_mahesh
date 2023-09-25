import React from 'react'
import Indiapostlogo from "./Indiapostlogo.png";
const Dashboard1 = ({children}) => {
  return (
    <div>
   <div className="w-screen flex">
  <div className="w-1/3 h-screen border-4 border-red-700 bg-yellow-200">
  <img src={Indiapostlogo} alt='mo'className=' w-62 h-48 p-4' />

    <div className='mb-14'></div>
    <form>
    <button className='pl-16'>
    <div className='flex justify-center items-center text-2xl bg-red-500 text-white font-bold py-2 px-4 w-52 h-12  mb-4 rounded-lg'>
    Home
    </div>
</button>
<button className='pl-16'>
<div className=" flex justify-center items-center text-2xl bg-red-500 text-white font-bold py-2  px-4 w-52 h-12 mb-4 rounded-lg">
    Login 
    </div>
</button>
<button className='pl-16'>
<div className=" flex justify-center items-center text-2xl bg-red-500 text-white font-bold py-2 px-4 w-52 h-12 mb-4 rounded-lg">Data Entry</div>
</button>
<button className='pl-16'>
<div className=" flex justify-center items-center text-2xl bg-red-500 text-white font-bold py-2 px-4 w-52 h-12 mb-4 rounded-lg">About</div>
   </button>
    </form>
  </div>
  <div className='flex w-screen h-screen'>
    <div className='w-full  bg-yellow-700'>
      <div className='w-5/3 h-1/6 text-white border-4  bg-slate-400 text-6xl flex justify-center items-center'>
        <div className=' text-white'>Student Data Entry</div>
          </div>
          <div className='flex w-5/3 h-5/6 bg-green-300 border-4 border-blue-800'>
        
        </div>
        </div>
  </div>
  
</div>
    {children}
    </div>
    
  )
}

export default Dashboard1