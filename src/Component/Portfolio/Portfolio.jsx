import React from 'react'

export default function Portfolio() {

 function SayHi(){
        
 }



  return <>

  
    <div className='Portfolio  '>
      <div className='flex  justify-center  py-16'>
          <div>
            <h2 className='text-4xl pt-10 font-bold text-gray-800'>PORTFOLIO COMPONENT</h2>
            <div className='flex justify-center'>
                  <div className='fill  bg-slate-800 w-32 h-1 my-4 rounded'></div>
                  <i class="fa-solid fa-star mx-10 py-4   text-gray-800"></i>
                  <div className='fill   bg-slate-800 w-32 h-1 my-4 rounded'></div>
              </div>
          </div>
      </div>
      <div className='container w-10/12 mx-auto justify-center pb-8  flex '>
        <div className='grid grid-cols-3 gap-12  '>
          <div className='hoverr col-span-1 rounded-lg  relative group' onClick={SayHi}>
            <img src='../src/assets/poert1.png' className='image  rounded-lg mx-auto' /> 
            <div className='absolute left-0 top-0 bottom-0 right-0 rounded  opacity-0 group-hover:opacity-80 transition-opacity duration-500   bg-emerald-500 content-center'>
              <div className='flex justify-center '> 
                <i class="fa-solid fa-plus text-8xl font-bold text-white"></i>
              </div>
            </div>  
          </div>

          <div className='hoverr col-span-1 rounded-lg  relative group'>
            <img src='../src/assets/port2.png' className='image  rounded-lg mx-auto' /> 
            <div className='absolute left-0 top-0 bottom-0 right-0 rounded  opacity-0 group-hover:opacity-80 transition-opacity duration-500   bg-emerald-500 content-center'>
              <div className='flex justify-center '> 
                <i class="fa-solid fa-plus text-8xl text-white font-bold"></i>
              </div>
            </div>  
          </div>
          <div className='hoverr col-span-1 rounded-lg  relative group'>
            <img src='../src/assets/port3.png' className='image  rounded-lg mx-auto' /> 
            <div className='absolute left-0 top-0 bottom-0 right-0 rounded  opacity-0 group-hover:opacity-80 transition-opacity duration-500   bg-emerald-500 content-center'>
              <div className='flex justify-center '> 
                <i class="fa-solid fa-plus text-8xl text-white font-bold"></i>
              </div>
            </div>  
          </div>
          <div className='hoverr col-span-1 rounded-lg relative group'>
            <img src='../src/assets/poert1.png' className='image  rounded-lg mx-auto' /> 
            <div className='absolute left-0 top-0 bottom-0 right-0 rounded  opacity-0 group-hover:opacity-80 transition-opacity duration-500   bg-emerald-500 content-center'>
              <div className='flex justify-center '> 
                <i class="fa-solid fa-plus text-8xl text-white font-bold"></i>
              </div>
            </div>  
          </div>
          <div className='hoverr col-span-1 rounded-lg  relative group'>
            <img src='../src/assets/port2.png' className='image  rounded-lg mx-auto' /> 
            <div className='absolute left-0 top-0 bottom-0 right-0 rounded  opacity-0 group-hover:opacity-80 transition-opacity duration-500   bg-emerald-500 content-center'>
              <div className='flex justify-center '> 
                <i class="fa-solid fa-plus text-8xl text-white font-bold"></i>
              </div>
            </div>  
          </div>
          <div className='hoverr col-span-1 rounded-lg  relative group'>
            <img src='../src/assets/port3.png' className='image  rounded-lg mx-auto' /> 
            <div className='absolute left-0 top-0 bottom-0 right-0 rounded  opacity-0 group-hover:opacity-80 transition-opacity duration-500   bg-emerald-500 content-center'>
              <div className='flex justify-center '> 
                <i class="fa-solid fa-plus text-8xl text-white font-bold"></i>
              </div>
            </div>  
          </div>
           
 

           
 

           
        </div>
       
         
      </div>
    </div>


  </>
     
  
}
