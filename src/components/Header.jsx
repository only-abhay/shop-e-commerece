// components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AddtoCart } from "../context/Context";

export default function Header() {
  const{cart,setCart} = useContext(AddtoCart)
  const {pathname}= useLocation();
  const items=[
    {
      path:"/",
      data:"Home"
    },
     {
      path:"/about",
      data:"About"
    },
     {
      path:"/contact",
      data:"Contact"
    },
  ]
  return (
    <header  className= "bg-white w-full shadow-md p-4 flex justify-between fixed z-50 top-0 left-0  items-center">
      <h1 className="text-xl font-bold">Shop</h1>
      <nav className="flex gap-6">
       {
        items.map(
          (d,i)=>{
            return(
             <Link className={`${pathname==d.path? "font-bold text-[#ff7b00]":""}`} key={i} to={d.path}>{d.data}</Link>
            )
          }
        )
       }
       
      </nav>
     <Link to="/cart">
      <div className="relative px-7 bg-[#d5cbcb] py-2 rounded-2xl flex items-center justify-center hover:bg-[#ff7b00] cursor-pointer active:scale-95 ">
        
        {/* Cart Icon */}
        <FaShoppingCart size={20} />

        {/* Badge */}
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
        
      </div>
    </Link>
    </header>
  );
}