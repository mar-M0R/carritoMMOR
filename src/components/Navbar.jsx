import React from 'react'
import { useNavigate } from "react-router"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Navbar = () => {
    const navigate = useNavigate();
    const { totalItems } = useContext(CartContext);

    return (
        <div className=' flex justify-center bg-[#556B2F] p-1 text-[#F5F5DC] font-serif text-[30px]'>
            <ul className=' list-none flex gap-15 cursor-pointer'>
                <li> <b onClick={()=>navigate("/")}>Catálogo</b> </li>
                <li> <b onClick={()=>navigate("/cart")}>Carrito<sup>{totalItems}</sup></b></li>
                <li> <b onClick={()=>navigate("/add")}>Agregar equipo</b> </li>
            </ul>
        </div>
    )
}