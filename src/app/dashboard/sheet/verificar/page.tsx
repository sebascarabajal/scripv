"use client"
import React from 'react'
import { useStore } from '@/states/store'


function Verificar() {

  const datos = useStore(state => state);
 
  return (
    <div>
      <h1>Verificar</h1>
      <p>{datos.sector}</p>
      <p>{datos.manzana}</p>
    </div>  

  )
}

export default Verificar