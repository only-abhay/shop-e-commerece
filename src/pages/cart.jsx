import React, { useContext } from "react";
import { AddtoCart } from "../context/Context";

export default function CartUI() {
  const {cart,setCart,QtyHandler,Sum,removeItem} = useContext(AddtoCart)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">🛒 My Cart</h1>

      {/* Cart Item */}
     {
      cart.map((d,i)=>(
         <div key={i} className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4">
        <img
          src={d.thumbnail}
          alt="product"
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div className="flex-1 ml-4">
          <h2 className="text-lg font-semibold">{d.title}</h2>
          <p className="text-gray-600">${d.price}</p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={()=>{
            QtyHandler(d.id,0)
          }} className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer active:scale-95">-</button>
          <span className="text-lg font-medium ">{d.qty}</span>
          <button  onClick={()=>{
            QtyHandler(d.id,1)
          }} className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer active:scale-95">+</button>
        </div>

        <div className="ml-6 font-semibold">${d.qty*d.price}</div>
<button 
  onClick={() => removeItem(d.id)} 
  className="ml-4 px-3 cursor-pointer active:scale-95 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
>
  Remove
</button>
      </div>
      ))
     }

      {/* Total + Checkout */}
      <div className="bg-gray-100 p-6 rounded-xl mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Total */}
        <div>
          <h2 className="text-lg font-semibold">Total</h2>
          <p className="text-2xl font-bold">${Sum}</p>
        </div>

        {/* Checkout Button */}
        <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}