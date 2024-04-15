"use client"
import React from 'react'
import { useStore } from '@/states/store'
import { Box, Button, Heading, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';


function Verificar() {

  const datos = useStore(state => state);
  const router = useRouter()

  const VolverAtras = () => {
    router.push('/dashboard/sheet/newFamilia')
  }

  return (
    <div>
      <Box className="p-4">
        <Heading as="h1" className="text-2xl mb-8 text-center">Datos cargados para casa: {datos.casa} en sector: {datos.sector}</Heading>
        <ul className="grid grid-cols-3 gap-4 justify-items-center">
        {Object.entries(datos).map(([key, value]) => {
          if (key === 'setDatos') return null;
          return (
            <li key={key} className="mb-2">
              <Text as="span" className="font-bold">{key}: {value.toLocaleString()}</Text>
            </li>
          );
        })}
      </ul>
        <div className="flex justify-center mt-4 space-x-4">
          <Button color='red' onClick={VolverAtras}>Volver</Button>
          <Button color='green'>Cargar definitivamente</Button>
        </div>
      </Box>
    </div>
  )
}

export default Verificar