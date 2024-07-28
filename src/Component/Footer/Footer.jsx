import React from 'react'

export default function Footer() {
  return <>
   <div className='footer   '>
      <div className='bg-slate-700   '>
        <div className='container mx-auto w-10/12  '>
          <div className='grid grid-cols-3 gap-12 justify-items-center'>
            <div className='col-span-1 mx-auto  grid justify-items-center my-24'>
              <h3 className='text-white font-semibold text-3xl'>LOCATION</h3>  
              <p className='text-white py-2'>2215 John Daniel Drive</p>
              <p className='text-white '>Clark, MO 65243</p>     
            </div>

            <div className='col-span-1 mx-auto grid justify-items-center my-24'>
              <h3 className='text-white font-semibold text-3xl'>AROUND THE WEB</h3>  
              <div className='  w-full rounded-full'>
                <div className='container mx-auto w-10/12  flex gap-3 justify-center' >
                  <div className='w-8 h-8 rounded-full border-white border-2 grid justify-items-center items-center'>
                    <div className='w-6   bg-white grid justify-items-center rounded-full h-6 items-center'>
                       <i class="fa-brands fa-facebook-f text-xl"></i>
                    </div>
                  </div>
                  <div className='w-8 h-8 rounded-full border-white border-2 grid justify-items-center items-center'><i class="fa-brands fa-twitter text-white"></i></div>
                  <div  className='w-8 h-8 rounded-full border-white border-2 grid justify-items-center items-center'><i class="fa-brands fa-linkedin-in text-white"></i></div>  
                  <div  className='w-8 h-8 rounded-full border-white border-2 grid justify-items-center items-center'><i class="fa-solid fa-globe text-white"></i></div>
                </div>
                
              </div>
            </div>

            <div className='col-span-1 mx-auto  grid justify-items-center my-24'>
              <h3 className='text-white font-semibold text-3xl'>ABOUT FREELANCER</h3>  
              <p className='text-white py-2 mx-auto'>Freelance is a free to use, licensed Bootstrap </p>
               <p className='text-white'>theme created by Route</p>  
            </div>
          </div>
        </div>
        <div className='bg-gray-800 w-full text-white flex justify-center pt-4  pb-8'>
              <p>Copyright © Your Website 2021</p>
        </div>
      </div>
   </div>
  </>
    
}
 