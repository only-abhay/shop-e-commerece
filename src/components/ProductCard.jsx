// components/ProductCard.jsx
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AddtoCart } from "../context/Context";

export default function ProductCard({ product }) {
 const {getProducts} =useContext(AddtoCart)
  return (
   <div className="bg-white shadow-md p-4 rounded-xl">
   <Link to={`/dynamic/${product.id}`}>    <img src={product.images[0]} className="h-40 w-full object-cover" /></Link>
      <h3 className="font-bold mt-2">{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={()=>{
        getProducts({
          id:product.id,
          title: product.title,
          thumbnail:product.thumbnail,
          price: product.price,
          qty:1,
        })
      }} className=" bg-green-500 text-white px-3 active:scale-95 cursor-pointer py-1 mt-2 rounded flex items-center gap-2">
        <FaShoppingCart /> Add
      </button>
    </div>
  );
}