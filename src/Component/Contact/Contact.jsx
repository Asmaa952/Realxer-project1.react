import React from 'react'

export default function Contact() {
  return <> 
    <div className='flex  justify-center pt-24'>
          <div>
            <h2 className='text-4xl pt-10 font-bold text-gray-800'>CONATCT SECTION  </h2>
            <div className='flex justify-center'>
                  <div className='fill  bg-slate-800 w-24 h-1 my-4 rounded'></div>
                  <i class="fa-solid fa-star mx-5 py-4   text-gray-800"></i>
                  <div className='fill   bg-slate-800 w-24 h-1 my-4 rounded'></div>
              </div>
          </div>
    </div>
    <div className='container  w-6/12 justify-center mx-auto items-center mt-16'>
        <div class="mb-4">
          <label class="block text-gray-700 text-xl  font-bold mb-2" for="username">UserName</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Name    "/>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-xl  font-bold mb-2" for="username">User Age</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Age    "/>
        </div>

        <div class="mb-4">
      <label class="block text-gray-700  text-xl font-bold mb-2" for="email">User Email</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="User Email  "/>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700  text-xl  font-bold mb-2" for="password">Password</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password "/>
        </div> 

        <button className='text-white bg-teal-500 rounded-lg p-2 mb-3'>Send Message</button>

    </div>
    
  </>
}
 