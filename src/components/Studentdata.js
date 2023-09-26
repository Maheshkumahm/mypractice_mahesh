import React from 'react'
const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
function Studentdata() {
  return (
<div className="background-container bg-transparent border-spacing-2 border-fuchsia-500 border-4 w-screen flex">
    <div className="p-8 rounded bg-blue-100 border-2 border-blue-300  shadow-md w-96">
    
    <label className="block  text-xl text-black">STUDENT NAME
    </label>
    <input 
              type="name"
              id="name"
              className="border border-gray-300 p-2 w-full rounded"
              required
            />

            <label className="block  text-xl text-black">AGE</label>
            <select>

            <option value=""></option>
         
         
         <option value="18">7</option>

         <option value="19">8</option>

         <option value="20">9</option>

         <option value="18">10</option>

         <option value="18">11</option>

         <option value="18">12</option>

         <option value="18">13</option>

       </select>
    
                    <label className="block  text-xl text-black">EMAIL</label>
    <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
                        <label className="block  text-xl text-black">DATE OF BIRTH</label>
                        <label>Day:</label>
      <select>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <label>Month:</label>
      <select>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <label>Year:</label>
      <select>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>


             <label className="block  text-xl text-black">GENDER</label>
             <select>


             <option value="male"> </option>
             <option value="male">MALE </option>

<option value="female">FEMALE</option>

<option value="others">OTHERS</option>

</select>
             <label className="block  text-xl text-black">CLASS/SECTION</label>
             <select>
                        <option value=""> </option>

<option value="A">A </option>

<option value="B">B</option>

<option value="C">C</option>
<option value="D">D</option>
<option value="E">E</option>

</select>



        <div className="mb-4">

        </div>
    </div>

      
    </div>
  )
}

export default Studentdata;
