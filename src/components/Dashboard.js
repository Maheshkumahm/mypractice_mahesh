import React from 'react'
import myImage from"./indiapostlogo.png";
const Dashboard = () => {
  return (
    <div>
      <div className="W-screen flex">
        <div className='w-1/6 h-screen bg-orange-200 border-4 border-red-400'>
          
          <img src={myImage} alt="myImage" />
          <div className='mb-14'></div>
          <form>
          <button className='pl-16'>
            <div className='flex justify-centre items-center text-2xl bg-red-500 text-white font-bold py-2 px-4 w-52 h-12 mb-4 rounded-lg'>Home
            </div>
</button>
            </div>

          </form>
          

          </div>
          
       </div>
       <div className='w-5/6 h-screen bg-green-300 border-4 border-red-400'>
        <div className='w-5/6 h-1/6 bg-neutral-400 border-yellow-200'>
  <h1 className='text-center font-bold stroke-indigo-400 text-4xl'>Student Data Entry</h1>
  </div>
</div>










      </div>
      
    </div>
  )
}

export default Dashboard
