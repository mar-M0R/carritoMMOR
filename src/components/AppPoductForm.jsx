import React, { useState } from 'react';

export const AddProductForm = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [cant, setCant] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !cant || !desc.trim()) 
            return;

        const newProduct = {
            id: Date.now(),
            name,
            cant: Number(cant),
            desc, 
            img: image
        };

        onAddProduct(newProduct);
        setName('');
        setCant('');
        setDesc('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 rounded-lg m-2 font-serif justify-center">
            <input type="text" placeholder="Nombre del producto" value={name} onChange={(e) => setName(e.target.value)} className="p-1 border rounded"/>
            <input type="number"  placeholder="Cantidad" value={cant} onChange={(e) => setCant(e.target.value)} className="p-1 border rounded w-24"/>
            <input type="text" placeholder="Descripción" value={desc} onChange={(e) => setDesc(e.target.value)} className="p-1 border rounded"/>
            <input type="text" placeholder="URL de Imagen"  value={image} onChange={(e) => setImage(e.target.value)} className="p-1 border rounded text-sm"/>
            <button type="submit" className="bg-[#556B2F] text-white px-3 py-1 rounded cursor-pointer">Agregar Producto</button>
        </form>
    );
};