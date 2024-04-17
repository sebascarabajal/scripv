"use client"
import React from 'react'
import { useStore } from '@/states/store'
import { Box, Button, Heading, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, UploadIcon } from '@radix-ui/react-icons';


function Verificar() {

  const datos = useStore(state => state);
  const router = useRouter()

  const VolverAtras = () => {
    router.push('/dashboard/sheet/newFamilia')
  }

  return (
    <div>
      <Box className="p-4">
        <Heading as="h1" className=" text-2x text-[#7ab1ff] text-center">Datos cargados para casa: {datos.casa} en sector: {datos.sector}</Heading>
        <ul className="grid grid-cols-3 gap-4 justify-items-center mt-10 mb-10">
          {Object.entries(datos).map(([key, value]) => {
            if (key === 'setDatos') return null;
            return (
              <li key={key} className="mb-2">
                <Text as="span" className="font-bold">{key}: {value.toLocaleString()}</Text>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mb-5">
          <Heading size={'2'} color='red'>VERIFICAR LOS DATOS CARGADOS ANTES DE ENVIAR</Heading>
        </div>
        <div className="flex justify-center mb-5">
          <Heading size={'2'} color='red'>NO PODRAN SER MODIFICADOS</Heading>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <Button color='red' onClick={VolverAtras}><ArrowLeftIcon></ArrowLeftIcon>Volver</Button>
          <Button color='jade'><UploadIcon color='black' ></UploadIcon>Cargar definitivamente</Button>
        </div>
      </Box>
    </div>
  )
}

export default Verificar