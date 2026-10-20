import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
    const {carprods, devolver} = useContext(CartContext);

    return (
        <div className=" flex justify-center">
            {carprods.map((carprod) => (
                <div key={carprod.id} className=" flex flex-col items-center shadow shadow-gray-700 w-1/6 p-2 m-2 bg-[#556B2F] font-serif rounded-lg text-white"> 
                    {carprod.img && ( <img  src={carprod.img}  alt={carprod.name}  className="w-50 h-50 object-cover mb-2 rounded"/> )}
                    <b><h2>{carprod.name}</h2> </b>
                    <span>Cantidad: <b>{carprod.cant}</b></span> 
                    <span>{carprod.desc}</span> 
                    <br></br>
                    <button onClick={()=>devolver(carprod.id)} className=' cursor-pointer bg-[#F5F5DC] p-2 text-[#556B2F] rounded-2xl'> X </button>
                </div>
            ))}
        </div>
    )
}