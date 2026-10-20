import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Catalog = () => {
    const {products, comprar} = useContext(CartContext);
    return (
        <div className=" flex justify-center" >
            {products.map((product) => (
                <div key={product.id} className=" flex flex-col items-center shadow shadow-gray-700 w-1/6 p-2 m-2 bg-[#F5F5DC] font-serif rounded-lg "> 
                    {product.img && ( <img src={product.img} alt={product.name} className="w-50 h-50 object-cover mb-2 rounded"/> )}
                    <b><h2>{product.name}</h2> </b>
                    <span>Cantidad: <b>{product.cant}</b></span>
                    <span>{product.desc}</span> 
                    <br></br>
                    <button onClick={()=>comprar(product.id)} className=' cursor-pointer bg-[#556B2F] p-2 text-[#F5F5DC] rounded-2xl '> BUY </button>
                </div>
            ))}
        </div>
    )
}
