import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Carrito } from '../components/Carrito';
import { Productos } from '../components/Productos';
import { Producto } from '../components/Producto';


export const MyRoutes = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Navigate to="/inicio"/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/productos' element={<Productos/>} /> 
            <Route path='/producto' element={<Producto/>} />            
        </Routes>
    
  )
}
