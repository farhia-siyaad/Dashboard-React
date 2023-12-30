import { useState } from "react"

import {  NavLink } from "react-router-dom"

function Sidenav({children}){

    const [isOpen, setisOpen] = useState (false)

    const handleIsOpen =() =>{
        setisOpen(true)
    }

    const handlIsClose =() =>{
        setisOpen(false)
    }

    return <div>
    <div style={{width:  isOpen  === true ?   "100px" : "" }} 
    className="bg-purple-900 fixed overflow-hidden transition-all duration-500
     text-white h-screen w-[22%]
     border-r-4 border-red-900">
         <i style={{display: isOpen === true ? "none" : "flex"}} onClick={handleIsOpen} className="fa-solid fa-xmark text-4xl text-white ml-[205px] mt-2"></i>
         <i style={{display: isOpen === true ? "block" : "none"}} onClick={handlIsClose} className="fa-solid fa-bars text-4xl text-white ml-[1.2em]  hidden"></i>
         <div style={{display: isOpen === true ? "none" : "flex"}} className="ml-12 mt-10 text-2xl flex flex-col gap-12 transition-all duration-500">
              <NavLink to={"/"} className="cursor-pointer hover:underline"> <i className="fa-brands fa-microsoft"></i> Dahboard</NavLink>
              <NavLink to={"/Product"} className="cursor-pointer hover:underline"><i className="fa-brands fa-product-hunt"></i> Product</NavLink>
              <NavLink to={"/Service"} className="cursor-pointer hover:underline"><i className="fa-solid fa-bag-shopping"></i> Services</NavLink>
              <NavLink to={"/Parent"} className="cursor-pointer hover:underline"><i className="fa-solid fa-image-portrait"></i> Parent</NavLink>
              <NavLink to={"/Attendence"} className="cursor-pointer hover:underline"><i className="fa-solid fa-table-cells"></i> Attendence</NavLink>
              <NavLink tp={"/a"} className="cursor-pointer hover:underline"><i className="fa-solid fa-headphones"></i> Help</NavLink>
         </div>
       
      <div style={{display: isOpen === true ?"flex": "hidden"}} className="ml-10 mt-10 flex-col text-3xl gap-14 hidden">
      <i className="fa-brands fa-microsoft"></i>
      <i className="fa-brands fa-product-hunt"></i>
      <i className="fa-solid fa-bag-shopping"></i>
      <i className="fa-solid fa-image-portrait"></i>
      <i className="fa-solid fa-table-cells"></i>
      <i className="fa-solid fa-headphones"></i>

     
      </div>
      </div>
      <div style={{marginLeft:isOpen === true ? "100px" : ""}}id="main" className="ml-[21%] 
      transition-all duration-500" >
        {children}
      </div>
    </div>
   
   
}
export default Sidenav