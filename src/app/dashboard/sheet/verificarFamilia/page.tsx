"use client"
import React from 'react'
import { useStore } from '@/states/store'
import { Box, Button, Heading, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, UploadIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Toaster, toast } from 'sonner';


export default function Verificar() {

  const { handleSubmit } = useForm()

  const datos = useStore.getState();
  const router = useRouter()

  const VolverAtras = () => {
    router.push('/dashboard/sheet/newFamilia')
  }

  const Senddatos = async () => {
    console.log(datos)
    const res = await axios.post('/api/cargar/familia', {
      datos: {
        nro_integrante: datos.nro_integrante,
        rel_paren: datos.rel_paren,
        genero: datos.genero,
        edad: datos.edad,
        discapacidad: datos.discapacidad,
        dificultad: datos.dificultad,
        certificado: datos.certificado,
        pension: datos.pension,
        nivel_estudio: datos.nivel_estudio,
        estudio_completo: datos.estudio_completo,
        motivo: datos.motivo,
        tipo_establec: datos.tipo_establec,
        lugar_establec: datos.lugar_establec,
        actividad: datos.actividad,
        categoria: datos.categoria,
        motivo_categ: datos.motivo_categ,
        lugar_trabajo: datos.lugar_trabajo,
        aportes_jub: datos.aportes_jub,
        ingreso_ind: datos.ingreso_ind,
        cobra_jub: datos.cobra_jub
      }
    })

    if (res.status === 201) {
      toast.success('¡Datos cargados correctamente!', {
        description: 'Redirigiendo...',
        position: 'top-center',
      })
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 3000);
    }
  }

  return (
    <div>
      <Toaster richColors />
      <Box className="p-4">
        <Heading as="h1" className=" text-2x text-[#7ab1ff] text-center">Datos cargados para casa:  en sector: </Heading>
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
          <Button color='jade' onClick={Senddatos} ><UploadIcon color='black' ></UploadIcon>Cargar definitivamente</Button>
        </div>
      </Box>
    </div>
  )
}

