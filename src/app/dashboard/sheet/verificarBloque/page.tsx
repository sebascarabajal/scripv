"use client";
import React from 'react'
import { useStoreBloque } from '@/states/storeBloque'
import { useRouter } from 'next/navigation'
import { Box, Button, Heading, Text } from '@radix-ui/themes'
import { ArrowLeftIcon, UploadIcon } from '@radix-ui/react-icons'
import { Toaster, toast } from 'sonner';
import axios from 'axios';

export default function VerificiarBloque() {
  const datos = useStoreBloque(State => State);
  const router = useRouter()

  const VolverAtras = () => {
    router.push('/dashboard/sheet/new')
  }
  const Senddatos = async () => {
    const res = await axios.post('/api/cargar/bloque', {
      datos: {
        sector: datos.sector,
        manzana: datos.manzana,
        casa: datos.casa,
        vivienda: datos.vivienda,
        hogar: datos.hogar,
        supervisor: datos.supervisor,
        encuestador: datos.encuestador,
        responde: datos.responde,
        p20: datos.p20,
        p21: datos.p21,
        p22: datos.p22,
        p23: datos.p23,
        p24: datos.p24,
        p25: datos.p25,
        p251: datos.p251,
        p26: datos.p26,
        p261: datos.p261,
        p262: datos.p262,
        p27: datos.p27,
        p28: datos.p28,
        p281: datos.p281,
        p29: datos.p29,
        p291: datos.p291,
        p301: datos.p301,
        p302: datos.p302,
        p31: datos.p31,
        p311: datos.p311,
        p312: datos.p312,
        p313: datos.p313,
        p314: datos.p314,
        p32: datos.p32,
        p321: datos.p321,
        p322: datos.p322,
        p323: datos.p323,
        p324: datos.p324,
        p325: datos.p325,
        p331: datos.p331,
        p332: datos.p332,
        p333: datos.p333,
        p334: datos.p334,
        p341: datos.p341,
        p342: datos.p342,
        p35: datos.p35,
        p36: datos.p36,
        p361: datos.p361,
        p362: datos.p362,
        p363: datos.p363,
        p364: datos.p364,
        p365: datos.p365,
        p366: datos.p366,
        p367: datos.p367,
        p368: datos.p368,
        p369: datos.p369,
        p3610: datos.p3610,
        p3611: datos.p3611,
        p3612: datos.p3612,
        p37: datos.p37,
        p38: datos.p38,
        p391: datos.p391,
        p392: datos.p392,
        p393: datos.p393,
        p394: datos.p394,
        p395: datos.p395,
        p396: datos.p396,
        p40: datos.p40,
        p41: datos.p41,
        p42: datos.p42,
        p43: datos.p43,
        p44: datos.p44,
        p45: datos.p45,
        p46: datos.p46,
        p47: datos.p47,
        p481: datos.p481,
        p482: datos.p482,
        p491: datos.p491,
        p492: datos.p492,
        p501: datos.p501, 
        p502: datos.p502,
        p503: datos.p503,
        p504: datos.p504,
        p51: datos.p51,
        p521: datos.p521,
        p522: datos.p522,
        p53: datos.p53,
        p54: datos.p54,
        p55: datos.p55,
        p561: datos.p561,
        p562: datos.p562,
        p57: datos.p57,
        p58: datos.p58,
        p59: datos.p59,
        p60: datos.p60,
        p61: datos.p61,
        p62: datos.p62,
        p63: datos.p63,
        p631: datos.p631,
        p641: datos.p641,
        p642: datos.p642,
        p643: datos.p643,
        p644: datos.p644,
        p645: datos.p645,
        p65: datos.p65,
        p66: datos.p66,
        p661: datos.p661,
        p67: datos.p67,
        p68: datos.p68,
        p69: datos.p69,
        p70: datos.p70,
        P701: datos.p701,
        p71: datos.p71,
        p711: datos.p711,
        p72: datos.p72,
        p73: datos.p73,
        p74: datos.p74,
        p75: datos.p75,
      }
    })
    console.log(res)

    if (res.status) {
      toast.success('¡Datos cargados correctamente!', {
        description: 'Redirigiendo...',
        position: 'top-center',
      })
      console.log("Datos cargados correctamente")
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 3000);
    }

    console.log("Datos cargados correctamente")
  }
  return (
    <div>
      <Toaster richColors />
      <Box className="p-4">
        <Heading as="h1" className=" text-2x text-[#7ab1ff] text-center">Datos cargados para casa: {datos.casa} en sector: {datos.sector}</Heading>
        <ul className="grid grid-cols-3 gap-4 justify-items-center mt-10 mb-10">
          {Object.entries(datos).map(([key, value]) => {
            if (key === 'setBloque') return null;
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
          <Button onClick={Senddatos} color='jade'><UploadIcon color='black' ></UploadIcon>Cargar definitivamente</Button>
        </div>
      </Box>
    </div>
  )
}

