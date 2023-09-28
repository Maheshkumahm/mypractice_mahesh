export default function Login() {
  return (
    
    <div>
    
    <div className="min-h-screen flex items-center justify-center bg-orange-200">

      <div className=" p-8 rounded bg-blue-100 border-2 border-blue-300  shadow-md w-96 ">
        <h2 className="text-4xl text-red-500 text-center font-semibold mb-8">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block  text-xl text-red-500">Username</label>
            <input 
              type="Username"
              id="Username"
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-500 text-xl" >Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full rounded"
              required />
          </div>
          <div className="mb-6 flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
             Register
            </button>
            <button 
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 pl-8 pr-4 hover:bg-blue-600">
              Login</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
   