
// pages/Home.jsx
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import SkeletonCard from "../components/skeletoncard";
import { Link, useParams } from "react-router-dom";
import Categories from "../components/categories";

export default function Home() {
  const {slug}=useParams();
 const [value,setValue]=useState([]);
 const [loading,setLoading]=useState(false);
 const[category,setCategory]=useState([]);
 const [sortType, setSortType] = useState("");
 const [Toggle,setToggle]=useState(false);
 

 function getCategoriez(){
  axios.get("https://dummyjson.com/products/categories").then(
        (response)=>{
            setCategory(response.data)
            
        }
    ).catch(
        (error)=>{
         console.log(error)
        }
    ).finally(
        ()=>{
    
        }
    )

 }
 function getdata(){
    setLoading(true)
    let API="https://dummyjson.com/products"
    if(slug){
   API=`https://dummyjson.com/products/category/${slug}`
    }
    if(sortType){
      API+=`?sortBy=price&order=${sortType}`;
    }
    axios.get(API).then(
        (response)=>{
            setValue(response.data.products)
            
        }
    ).catch(
        (error)=>{
         console.log(error)
        }
    ).finally(
        ()=>{
         setLoading(false)
        }
    )
 }
 useEffect(
    ()=>{
getdata()
 },
    [slug,sortType]
 )
 useEffect(
  ()=>{
    getCategoriez()
  },
  []
 )

  return (
    <div>
      <Hero />
     <Categories category={category}/>

     <div className="bg-white shadow-lg rounded-2xl p-4 mt-4">
      <h2 className="text-lg font-semibold mb-3 cursor-pointer w-30 rounded-lg hover:bg-gray-100"  onClick={()=>{
        setToggle(!Toggle)
        console.log(Toggle)
      }} >Sort By Price</h2>
      <div  style={{display:Toggle==true? "block":"none"}} >
      <div className=" grid grid-cols-2" >
        <button
          onClick={() => setSortType("asc")}
          className="text-left px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          Price: Low to High
        </button>
        <button
          onClick={() => setSortType("desc")}
          className="text-left px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          Price: High to Low
        </button>
      </div>
      </div>
    </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {     loading ?
              [1,2,44,2,24,5,2,45,].map((data,i)=>( <SkeletonCard key={i}/>)) 
            :
        value.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))
        }
      </div>
    </div>
  );
}