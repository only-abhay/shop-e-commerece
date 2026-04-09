import React, { createContext, useState } from 'react'
 const AddtoCart=createContext();

 
export  function Context({children}) {
    const [cart,setCart]=useState([])
  const Sum= cart?.reduce((sum,item)=>sum+ item.price*item.qty,0 )

  //  get data 
    function getProducts(product){
      const findProdId= cart.find((d)=>d.id===product.id);

      if(findProdId){
     const updateCart=cart.map((item)=>{
      return(
       product.id===item.id ? {...item,qty:item.qty+1} : item
      )
     })
      setCart(updateCart)
      }else{
            setCart([...cart,product])
      }     
    }
    // qty inc dec 
    function QtyHandler(id,flag){
  const findProdId= cart.find((d)=>d.id===id);
 let UpdateCart=[];
 if(flag===1){
  UpdateCart=cart.map((item)=>{
      return(
       id===item.id ? {...item,qty:item.qty+1} : item
      )
     })
 }else{
 UpdateCart=cart.map((item)=>{
      return(
       id===item.id && item.qty>1 ? {...item,qty:item.qty-1} : item
      )
     })
 }
 setCart(UpdateCart)
    }
  //  removing item from cart 
  function  removeItem(id){
     const removedItem= cart.filter((data,i)=>id!=data.id)
     setCart(removedItem)
  }
  return (
   <AddtoCart value={{cart,setCart,getProducts,QtyHandler,Sum,removeItem}}>
    {children}
   </AddtoCart>
  )
}
export {AddtoCart}
