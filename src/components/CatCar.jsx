import React from 'react'
import { useState } from 'react'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { AddProductForm } from './AppPoductForm';


export const CatCar = () => {
    const [products, setProducts] = useState([
        {name: "Cámara", id: 1, cant: 3, desc:"Canon SX530 HS", img: "/img1.png"},
        {name: "Tripie", id: 2, cant: 5, desc:"Mini tripie Kodak KTP001", img: "/img2.jpg"},
        {name: "Lente", id: 3, cant: 7, desc:"Sony FE 100mm F2.8 Macro GM OSS", img: "/img3.avif"},
        {name: "Microfono", id: 4, cant: 3, desc:"D-Bugg Micrófono Inalámbrico con entrada Lightning", img: "/img4.png"},
    ])

    const [carprods, setCarprods] = useState([]);

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
        <div>
            <AddProductForm onAddProduct={agregarProducto}/>
            <Catalog products={products} comprar={comprar}></Catalog>
            <Cart carprods={carprods} devolver={devolver}></Cart>
        </div>
    )
}