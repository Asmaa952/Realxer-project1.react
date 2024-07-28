 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import  Navebar from './Component/Navebar/Navebar'
import  Footer  from './Component/Footer/Footer'
import Contact  from './Component/Contact/Contact'
import Portfolio from './Component/Portfolio/Portfolio'
import About from './Component/About/About'
import Start from './Component/Start Frame/Start'
import Layout from './Component/Layout/Layout'
 
function App() {
 let router = createBrowserRouter([
     {path:'',element:<Layout/>,children:[
        {index:true,element:<Start/>}, 
        {path:'about',element:<About/>},
        {path:'portfolio',element:<Portfolio/>},
        {path:'contact',element:<Contact/>}
     ]},
     
  ])
  console.log(router);
  return <>  
       
        <RouterProvider router={router}></RouterProvider>
        


    </>
  
}

export default App
 
