import React from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {

    // copiamos la logica de CatCar
    const [products, setProducts] = useState([
        {name: "Cámara", id: 1, cant: 3, desc:"Canon SX530 HS", img: "/img1.png"},
        {name: "Tripie", id: 2, cant: 5, desc:"Mini tripie Kodak KTP001", img: "/img2.jpg"},
        {name: "Lente", id: 3, cant: 7, desc:"Sony FE 100mm F2.8 Macro GM OSS", img: "/img3.avif"},
        {name: "Microfono", id: 4, cant: 3, desc:"D-Bugg Micrófono Inalámbrico con entrada Lightning", img: "/img4.png"},
    ])

    const [carprods, setCarprods] = useState([]);

    const totalItems = carprods.reduce((total, prod) => total + prod.cant, 0);

    // para aregar producto
    const agregarProducto = (nuevoProducto) => {
        setProducts([...products, nuevoProducto]);
    };

    const comprar = (id) => {
        const product = products.find((product)=>(product.id==id));

        if (product.cant == 0) 
            return;

        // restale 1 al catalogo
        const copyProducts = products.map((product) => {
            if (product.id==id) {
                product.cant = product.cant - 1;
                return product;
            }
            else 
                return product;
        });
        setProducts(copyProducts);
    
        if (carprods.find((product)=>(product.id==id))) {
            // agregarle 1 al carrito del elemento ya existente
            const copyCarprods = carprods.map((product) => {
            if (product.id == id) 
                return { ...product, cant: product.cant + 1 };
            else 
                return product;
            });
            setCarprods(copyCarprods);
        }
        else {
            // crear elemento en el carrito
            const copyProd = {...product, cant:1};
            const copyCarprods = [...carprods, copyProd];
            setCarprods(copyCarprods);
        }
    }

    const devolver = (id) => {
        const carprod = carprods.find((carprod)=>(carprod.id==id));
        if (!carprod)
            return;   

        // agregarle 1 al cataloo
        const copyProducts = products.map((product) => {
            if (product.id==id) {
                product.cant = product.cant + 1;
                return product;
            }
            else 
                return product;
        });
        setProducts(copyProducts);

        // quitarle 1 al carrito del elemento ya existente
        const copyCarprods = carprods.map((product) => {
        if (product.id == id) 
            return { ...product, cant: product.cant - 1 };
        else 
            return product;
        });
        setCarprods(copyCarprods);

        if (carprod.cant == 1) {
            const copyCarprods = carprods.filter((product) => product.id != id);
            setCarprods(copyCarprods);
        }
    }
    
    return (
        <CartContext.Provider value={{products, carprods, comprar, devolver, agregarProducto, totalItems}}>
            {children}
        </CartContext.Provider>
    )
}