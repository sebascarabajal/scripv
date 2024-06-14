"use client"
import React from 'react'
import { AlertDialog, Button, Flex, Heading } from '@radix-ui/themes'
import Input from '@/components/Input';
import InputRadix from '@/components/InputRadix';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { DoubleArrowUpIcon } from '@radix-ui/react-icons';

function New() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    values: {
      sector: "",
      manzana: "",
      lote: "",
      casa: "",
      vivienda: "",
      hogar: "",
      supervisor: "",
      encuestador: "",
      responde: "",
      p20: "",
      p21: "",
      p22: "",
      p23: "",
      p24: "",
      p25: "",
      p251: "",
      p26: "",
      p261: "",
      p262: "",
      p27: "",
      p28: "",
      p281o1: "",
      p281o2: "",
      p281o3: "",
      p281o4: "",
      p281o5: "",
      p281o6: "",
      p281o7: "",
      p281o8: "",
      p281o9: "",
      p281o10: "",
      p281o11: "",
      p281o12: "",
      p281o13: "",
      p29: "",
      p291: "",
      p301: "",
      p302: "",
      p311: "",
      p312: "",
      p313: "",
      p314: "",
      p32: "",
      p321: "",
      p322: "",
      p323: "",
      p324: "",
      p325: "",
      p331: "",
      p332: "",
      p333: "",
      p334: "",
      p341: "",
      p342: "",
      p35: "",
      p36: "",
      cubierta_a: "",
      cubierta_b: "",
      cubierta_c: "",
      cubierta_d: "",
      cubierta_e: "",
      cielorraso_a: "",
      cielorraso_b: "",
      cielorraso_c: "",
      cielorraso_d: "",
      cielorraso_e: "",
      muroex_a: "",
      muroex_b: "",
      muroex_c: "",
      muroex_d: "",
      muroex_e: "",
      muromed_a: "",
      muromed_b: "",
      muromed_c: "",
      muromed_d: "",
      muromed_e: "",
      pisoyres_a: "",
      pisoyres_b: "",
      pisoyres_c: "",
      pisoyres_d: "",
      pisoyres_e: "",
      carp_a: "",
      carp_b: "",
      carp_c: "",
      carp_d: "",
      carp_e: "",
      artefac_a: "",
      artefac_b: "",
      artefac_c: "",
      artefac_d: "",
      artefac_e: "",
      grife_a: "",
      grife_b: "",
      grife_c: "",
      grife_d: "",
      grife_e: "",
      canieria_a: "",
      canieria_b: "",
      canieria_c: "",
      canieria_d: "",
      canieria_e: "",
      instelec_a: "",
      instelec_b: "",
      instelec_c: "",
      instelec_d: "",
      instelec_e: "",
      instgas_a: "",
      instgas_b: "",
      instgas_c: "",
      instgas_d: "",
      instgas_e: "",
      tanque_a: "",
      tanque_b: "",
      tanque_c: "",
      tanque_d: "",
      tanque_e: "",
      p37: "",
      p38: "",
      p391: "",
      p392: "",
      p393: "",
      p394: "",
      p395: "",
      p396: "",
      p40: "",
      p41: "",
      p42: "",
      p43: "",
      p44: "",
      p45: "",
      p46: "",
      p47: "",
      p481: "",
      p482: "",
      p491: "",
      p492: "",
      p501: "",
      p502: "",
      p503: "",
      p504: "",
      p51: "",
      p521: "",
      p522: "",
      p53: "",
      p54: "",
      p55: "",
      p561: "",
      p562: "",
      p57: "",
      p58: "",
      p59: "",
      p60: "",
      p61: "",
      p62: "",
      p63: "",
      p631: "",
      p641: "",
      p642: "",
      p643: "",
      p644: "",
      p645: "",
      p65: "",
      p66: "",
      p661: "",
      p67: "",
      p68: "",
      p69: "",
      p70: "",
      p701: "",
      p71: "",
      p711: "",
      p72: "",
      p73: "",
      p74: "",
      p75: "",
      observaciones: ""
    }
  });

  const router = useRouter();

  const submit = () => {
    onSubmit()
  }

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/cargar/bloque', data)
    console.log(res.status)

    if (res.status == 201) {
      toast.success('¡Datos cargados correctamente!', {
        description: 'Redirigiendo...',
        position: 'top-center',
      })
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 3000);
    }else{
      toast.error('¡Error al cargar los datos!', {
        description: 'Por favor intente nuevamente',
        position: 'top-center',
      })
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <Toaster richColors />
        <div className="flex justify-center">
          <Heading>Carga datos ubicacion</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <InputRadix name='sector' label='Sector: ' control={control} />
            {errors.sector && <span className="text-red-500">{errors.sector.message}</span>}
          </div>
          <div>
            <Input label='Manzana' name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
            {errors.manzana && <span className="text-red-500">{errors.manzana.message}</span>}
          </div>
          <div>
            <Input label='Lote' name='lote' control={control} placeholder='Nro de lote' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
            {errors.lote && <span className="text-red-500">{errors.lote.message}</span>}
          </div>
          <div>
            <Input label='Casa' name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
            {errors.casa && <span className="text-red-500">{errors.casa.message}</span>}
          </div>
          <div>
            <Input label='Vivienda' name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
            {errors.vivienda && <span className="text-red-500">{errors.vivienda.message}</span>}
          </div>
          <div>
            <Input label='Hogar' name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
            {errors.hogar && <span className="text-red-500">{errors.hogar.message}</span>}
          </div>
          <div>
            <Input label='Supervisor' name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.supervisor && <span className="text-red-500">{errors.supervisor.message}</span>}
          </div>
          <div>
            <Input label='Encuestador' name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.encuestador && <span className="text-red-500">{errors.encuestador.message}</span>}
          </div>
          <div>
            <Input label='Respondente de la vivienda' name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.responde && <span className="text-red-500">{errors.responde.message}</span>}
          </div>
        </div>

        <div className="flex justify-center m_0">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='20.Habitabilidad' name='p20' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-9]*$/ } }} type='number'></Input>
            {errors.p20 && <span className="text-red-500">{errors.p20.message}</span>}
          </div>
          <div>
            <Input label='21.Este hogar es...' name='p21' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-9]*$/ } }} type='number'></Input>
            {errors.p21 && <span className="text-red-500">{errors.p21.message}</span>}
          </div>
          <div>
            <Input label='22.Documentacion' name='p22' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-6]*$/ } }} type='number'></Input>
            {errors.p22 && <span className="text-red-500">{errors.p22.message}</span>}
          </div >
        </div >

        <div className="flex justify-center m_0">
          <Heading>Carga servicios, instalaciones e infraestructura </Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='23.Provicion agua' name='p23' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p23 && <span className="text-red-500">{errors.p23.message}</span>}
          </div>
          <div>
            <Input label='24.Agrego circuito...' name='p24' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-6]*$/ } }} type='number'></Input>
            {errors.p24 && <span className="text-red-500">{errors.p24.message}</span>}
          </div >
          <div>
            <Input label='25.Servicio electrico' name='p25' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p25 && <span className="text-red-500">{errors.p25.message}</span>}
          </div >
          <div>
            <Input label='25.1Tipo de alteraciones' name='p251' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p251 && <span className="text-red-500">{errors.p251.message}</span>}
          </div >
          <div>
            <Input label='26.Equipo de calefaccion' name='p26' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p26 && <span className="text-red-500">{errors.p26.message}</span>}
          </div >
          <div>
            <Input label='26.1.Cambio de equipo de calefaccion' name='p261' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p261 && <span className="text-red-500">{errors.p261.message}</span>}
          </div >
          <div>
            <Input label='26.2.Tipo de calefaccion de agua' name='p262' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-7]*$/ } }} type='number'></Input>
            {errors.p262 && <span className="text-red-500">{errors.p262.message}</span>}
          </div >
          <div>
            <Input label='27. Posee internet' name='p27' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p27 && <span className="text-red-500">{errors.p27.message}</span>}
          </div >
        </div >

        <div className="flex justify-center m_0">
          <Heading>Vivienda</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='28.Realizo ampliaciones' name='p28' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p28 && <span className="text-red-500">{errors.p28.message}</span>}
          </div>
        </div>
        <div className="flex justify-center m_0">
          <Heading size={'4'}>¿Que ampliaciones realizo?</Heading>
        </div>
        <div className="flex justify-center m_0">
          <Heading className='text-blue-400' size={'4'}>Marcar 1 para afirmativo - 0 para negativo</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-40 my-5">
          <div>
            <Input label='Dormitorio' name='p281o1' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o1 && <span className="text-red-500">{errors.p281o1.message}</span>}
          </div >
          <div>
            <Input label='Sala de estar' name='p281o2' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o2 && <span className="text-red-500">{errors.p281o2.message}</span>}
          </div >
          <div>
            <Input label='Comedor' name='p281o3' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o3 && <span className="text-red-500">{errors.p281o3.message}</span>}
          </div >
          <div>
            <Input label='Cocina' name='p281o4' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o4 && <span className="text-red-500">{errors.p281o4.message}</span>}
          </div >
          <div>
            <Input label='Baño' name='p281o5' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o5 && <span className="text-red-500">{errors.p281o5.message}</span>}
          </div >
          <div>
            <Input label='Galeria/Quincho' name='p281o6' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o6 && <span className="text-red-500">{errors.p281o6.message}</span>}
          </div >
          <div>
            <Input label='Garaje' name='p281o7' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o7 && <span className="text-red-500">{errors.p281o7.message}</span>}
          </div >
          <div>
            <Input label='Lavadero' name='p281o8' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o8 && <span className="text-red-500">{errors.p281o8.message}</span>}
          </div >
          <div>
            <Input label='Local comercial' name='p281o9' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o9 && <span className="text-red-500">{errors.p281o9.message}</span>}
          </div >
          <div>
            <Input label='Adaptacion de ambientes' name='p281o10' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o10 && <span className="text-red-500">{errors.p281o10.message}</span>}
          </div >
          <div>
            <Input label='Adaptacion de vivienda' name='p281o11' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o11 && <span className="text-red-500">{errors.p281o11.message}</span>}
          </div >
          <div>
            <Input label='Espacio propio para trabajo' name='p281o12' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o12 && <span className="text-red-500">{errors.p281o12.message}</span>}
          </div >
          <div>
            <Input label='Pileta' name='p281o13' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-1]*$/ } }} type='number'></Input>
            {errors.p281o13 && <span className="text-red-500">{errors.p281o13.message}</span>}
          </div >
        </div>

        <div className="flex justify-center m_0">
          <Heading></Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='29.Tuvo obstaculos' name='p29' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p29 && <span className="text-red-500">{errors.p29.message}</span>}
          </div>
          <div>
            <Input label='29.1.Tipo obstaculos' name='p291' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-5]*$/ } }} type='number'></Input>
            {errors.p291 && <span className="text-red-500">{errors.p291.message}</span>}
          </div>
          <div>
            <Input label='30.1.Evalue iluminacion' name='p301' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p301 && <span className="text-red-500">{errors.p301.message}</span>}
          </div >
          <div>
            <Input label='30.2.Evalue ventilacion' name='p302' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p302 && <span className="text-red-500">{errors.p302.message}</span>}
          </div >
          <div>
            <Input label='31.1.Temp. interior temporada calida' name='p311' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p311 && <span className="text-red-500">{errors.p311.message}</span>}
          </div >
          <div>
            <Input label='31.2.Habitable sin refrigeracion' name='p312' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p312 && <span className="text-red-500">{errors.p312.message}</span>}
          </div >
          <div>
            <Input label='31.3.Temp. interior temporada fria' name='p313' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p313 && <span className="text-red-500">{errors.p313.message}</span>}
          </div >
          <div>
            <Input label='31.4. Habitable sin calefaccion' name='p314' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p314 && <span className="text-red-500">{errors.p314.message}</span>}
          </div >
          <div>
            <Input label='32.Posee artefatos climatizadores' name='p32' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p32 && <span className="text-red-500">{errors.p32.message}</span>}
          </div >
          <div>
            <Input label='32.1Posee A.C split' name='p321' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p321 && <span className="text-red-500">{errors.p321.message}</span>}
          </div >
          <div>
            <Input label='32.2.Posee A.C de ventana' name='p322' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p322 && <span className="text-red-500">{errors.p322.message}</span>}
          </div >
          <div>
            <Input label='32.3.Posee ventilador' name='p323' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p323 && <span className="text-red-500">{errors.p323.message}</span>}
          </div >
          <div>
            <Input label='32.4.Posee calefactor' name='p324' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p324 && <span className="text-red-500">{errors.p324.message}</span>}
          </div >
          <div>
            <Input label='32.5.Posee estufa' name='p325' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p325 && <span className="text-red-500">{errors.p325.message}</span>}
          </div>
          <div>
            <Input label='33.1.Posee Heladera' name='p331' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p331 && <span className="text-red-500">{errors.p331.message}</span>}
          </div>
          <div>
            <Input label='33.2.Posee Freezer' name='p332' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p332 && <span className="text-red-500">{errors.p332.message}</span>}
          </div >
          <div>
            <Input label='33.3.Posee Horno elec.' name='p333' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p333 && <span className="text-red-500">{errors.p333.message}</span>}
          </div >
          <div>
            <Input label='33.4.Posee lavarropas' name='p334' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p334 && <span className="text-red-500">{errors.p334.message}</span>}
          </div >
          <div>
            <Input label='34.Monto Luz' name='p341' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p341 && <span className="text-red-500">{errors.p341.message}</span>}
          </div >
          <div>
            <Input label='34.Monto Gas' name='p342' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p342 && <span className="text-red-500">{errors.p342.message}</span>}
          </div >
          <div>
            <Input label='35.Frecuencia mantenimiento del hogar' name='p35' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p35 && <span className="text-red-500">{errors.p35.message}</span>}
          </div >
          <div>
            <Input label='36.Presento patologias constructivas' name='p36' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p36 && <span className="text-red-500">{errors.p36.message}</span>}
          </div >
        </div >

        <div className="flex justify-center m_0">
          <Heading size={'4'}>Patologias constructivas - Marcar 1 donde corresponda</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mx-40 my-5">
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Cubierta</label>
          </div >
          <div>
            <Input label='Rotura' name='cubierta_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cubierta_a && <span className="text-red-500">{errors.cubierta_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='cubierta_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cubierta_b && <span className="text-red-500">{errors.cubierta_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='cubierta_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cubierta_c && <span className="text-red-500">{errors.cubierta_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='cubierta_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cubierta_d && <span className="text-red-500">{errors.cubierta_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='cubierta_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cubierta_e && <span className="text-red-500">{errors.cubierta_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Cierlorraso</label>
          </div >
          <div>
            <Input label='Rotura' name='cielorraso_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cielorraso_a && <span className="text-red-500">{errors.cielorraso_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='cielorraso_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cielorraso_a && <span className="text-red-500">{errors.cielorraso_a.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='cielorraso_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cielorraso_c && <span className="text-red-500">{errors.cielorraso_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='cielorraso_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cielorraso_d && <span className="text-red-500">{errors.cielorraso_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='cielorraso_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.cielorraso_e && <span className="text-red-500">{errors.cielorraso_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Muro exterior</label>
          </div >
          <div>
            <Input label='Rotura' name='muroex_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muroex_a && <span className="text-red-500">{errors.muroex_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='muroex_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muroex_b && <span className="text-red-500">{errors.muroex_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='muroex_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muroex_c && <span className="text-red-500">{errors.muroex_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='muroex_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muroex_d && <span className="text-red-500">{errors.muroex_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='muroex_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muroex_e && <span className="text-red-500">{errors.muroex_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Muro medianero</label>
          </div >
          <div>
            <Input label='Rotura' name='muromed_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muromed_a && <span className="text-red-500">{errors.muromed_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='muromed_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muromed_b && <span className="text-red-500">{errors.muromed_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='muromed_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muromed_c && <span className="text-red-500">{errors.muromed_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='muromed_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muromed_d && <span className="text-red-500">{errors.muromed_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='muromed_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.muromed_e && <span className="text-red-500">{errors.muromed_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Piso y revest.</label>
          </div >
          <div>
            <Input label='Rotura' name='pisoyres_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.pisoyres_a && <span className="text-red-500">{errors.pisoyres_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='pisoyres_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.pisoyres_b && <span className="text-red-500">{errors.pisoyres_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='pisoyres_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.pisoyres_c && <span className="text-red-500">{errors.pisoyres_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='pisoyres_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.pisoyres_d && <span className="text-red-500">{errors.pisoyres_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='pisoyres_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.pisoyres_e && <span className="text-red-500">{errors.pisoyres_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Carpinteria</label>
          </div >
          <div>
            <Input label='Rotura' name='carp_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.carp_a && <span className="text-red-500">{errors.carp_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='carp_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.carp_b && <span className="text-red-500">{errors.carp_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='carp_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.carp_c && <span className="text-red-500">{errors.carp_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='carp_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.carp_d && <span className="text-red-500">{errors.carp_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='carp_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.carp_e && <span className="text-red-500">{errors.carp_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Artefactos</label>
          </div >
          <div>
            <Input label='Rotura' name='artefac_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.artefac_a && <span className="text-red-500">{errors.artefac_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='artefac_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.artefac_b && <span className="text-red-500">{errors.artefac_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='artefac_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.artefac_c && <span className="text-red-500">{errors.artefac_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='artefac_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.artefac_d && <span className="text-red-500">{errors.artefac_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='artefac_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.artefac_e && <span className="text-red-500">{errors.artefac_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Griferias</label>
          </div >
          <div>
            <Input label='Rotura' name='grife_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.grife_a && <span className="text-red-500">{errors.grife_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='grife_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.grife_b && <span className="text-red-500">{errors.grife_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='grife_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.grife_c && <span className="text-red-500">{errors.grife_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='grife_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.grife_d && <span className="text-red-500">{errors.grife_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='grife_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.grife_e && <span className="text-red-500">{errors.grife_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Cañerias</label>
          </div >
          <div>
            <Input label='Rotura' name='canieria_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.canieria_a && <span className="text-red-500">{errors.canieria_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='canieria_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.canieria_b && <span className="text-red-500">{errors.canieria_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='canieria_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.canieria_c && <span className="text-red-500">{errors.canieria_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='canieria_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.canieria_d && <span className="text-red-500">{errors.canieria_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='canieria_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.canieria_e && <span className="text-red-500">{errors.canieria_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Ins. Electricas</label>
          </div >
          <div>
            <Input label='Rotura' name='instelec_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instelec_a && <span className="text-red-500">{errors.instelec_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='instelec_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instelec_b && <span className="text-red-500">{errors.instelec_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='instelec_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instelec_c && <span className="text-red-500">{errors.instelec_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='instelec_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instelec_d && <span className="text-red-500">{errors.instelec_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='instelec_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instelec_e && <span className="text-red-500">{errors.instelec_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Ins. Gas</label>
          </div >
          <div>
            <Input label='Rotura' name='instgas_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instgas_a && <span className="text-red-500">{errors.instgas_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='instgas_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instgas_b && <span className="text-red-500">{errors.instgas_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='instgas_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instgas_c && <span className="text-red-500">{errors.instgas_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='instgas_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instgas_d && <span className="text-red-500">{errors.instgas_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='instgas_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.instgas_e && <span className="text-red-500">{errors.instgas_e.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p361 && <span className="text-red-500">{errors.p361.message}</span>} */}
            <label htmlFor="">Tanque de agua</label>
          </div >
          <div>
            <Input label='Rotura' name='tanque_a' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.tanque_a && <span className="text-red-500">{errors.tanque_a.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='tanque_b' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.tanque_b && <span className="text-red-500">{errors.tanque_b.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='tanque_c' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.tanque_c && <span className="text-red-500">{errors.tanque_c.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='tanque_d' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.tanque_d && <span className="text-red-500">{errors.tanque_d.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='tanque_e' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.tanque_e && <span className="text-red-500">{errors.tanque_e.message}</span>}
          </div >
        </div>

        <div className="flex justify-center m_0">
          <Heading>Hábitat y ambiente del barrio</Heading>
        </div>
        <div className="flex justify-center">
          <Heading className='text-blue-400' size={'4'}>Respuestas multiplechoice cargar seguido sin espacios</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='37.Actividades que realiza en EP - Multi' name='p37' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p37 && <span className="text-red-500">{errors.p37.message}</span>}
          </div>
          <div>
            <Input label='38.Cuando utilizan EP' name='p38' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p38 && <span className="text-red-500">{errors.p38.message}</span>}
          </div >
          <div>
            <Input label='39.1.Califique Iluminacion' name='p391' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p391 && <span className="text-red-500">{errors.p391.message}</span>}
          </div >
          <div>
            <Input label='39.2.Califique Distribucion de cestos' name='p392' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p392 && <span className="text-red-500">{errors.p392.message}</span>}
          </div >
          <div>
            <Input label='39.3.Califique Equipamiento recreativo' name='p393' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p393 && <span className="text-red-500">{errors.p393.message}</span>}
          </div >
          <div>
            <Input label='39.4.Califique Equipamiento deportivo' name='p394' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p394 && <span className="text-red-500">{errors.p394.message}</span>}
          </div >
          <div>
            <Input label='39.5.Califique Espacios para permanecer' name='p395' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p395 && <span className="text-red-500">{errors.p395.message}</span>}
          </div >
          <div>
            <Input label='39.6.Disponibilidad de zombras' name='p396' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p396 && <span className="text-red-500">{errors.p396.message}</span>}
          </div >
          <div>
            <Input label='40.EP son seguros' name='p40' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p40 && <span className="text-red-500">{errors.p40.message}</span>}
          </div >
          <div>
            <Input label='41.Motivos de inseguridad - Multi' name='p41' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p41 && <span className="text-red-500">{errors.p41.message}</span>}
          </div >
          <div>
            <Input label='42.Horario seguro para circular - Multi' name='p42' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p42 && <span className="text-red-500">{errors.p42.message}</span>}
          </div >
          <div>
            <Input label='43.Con quien usa EP' name='p43' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p43 && <span className="text-red-500">{errors.p43.message}</span>}
          </div >
          <div>
            <Input label='44.Que distancia se traslada para usar EP' name='p44' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p44 && <span className="text-red-500">{errors.p44.message}</span>}
          </div >
          <div>
            <Input label='45.Que hace los dias de calor extremo - Multi' name='p45' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p45 && <span className="text-red-500">{errors.p45.message}</span>}
          </div >
          <div>
            <Input label='46.Refugio al calor en EV de Lomas' name='p46' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p46 && <span className="text-red-500">{errors.p46.message}</span>}
          </div >
          <div>
            <Input label='47.Incorporar a los EV para el calor - Multi' name='p47' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p47 && <span className="text-red-500">{errors.p47.message}</span>}
          </div >
          <div>
            <Input label='48.1.Sabe que es ola de calor' name='p481' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p481 && <span className="text-red-500">{errors.p481.message}</span>}
          </div >
          <div>
            <Input label='48.2.Influencia humana en las ola de calor' name='p482' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p482 && <span className="text-red-500">{errors.p482.message}</span>}
          </div >
          <div>
            <Input label='49.1.Califique arbolado' name='p491' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p491 && <span className="text-red-500">{errors.p491.message}</span>}
          </div >
          <div>
            <Input label='49.2.Calidique estado de la vereda' name='p492' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p492 && <span className="text-red-500">{errors.p492.message}</span>}
          </div >
          <div>
            <Input label='50.1.Arbolado se mantuvo igual' name='p501' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p501 && <span className="text-red-500">{errors.p501.message}</span>}
          </div >
          <div>
            <Input label='50.2.Se plantaron mas arboles' name='p502' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p502 && <span className="text-red-500">{errors.p502.message}</span>}
          </div >
          <div>
            <Input label='50.3.El arbolado se seco' name='p503' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p503 && <span className="text-red-500">{errors.p503.message}</span>}
          </div >
          <div>
            <Input label='50.4.Se retiro arbolado' name='p504' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p504 && <span className="text-red-500">{errors.p504.message}</span>}
          </div >
          <div>
            <Input label='51.Valoriza mas en barrio arbolado' name='p51' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p51 && <span className="text-red-500">{errors.p51.message}</span>}
          </div >
          <div>
            <Input label='52.1.Califque contaminacion visual' name='p521' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p521 && <span className="text-red-500">{errors.p521.message}</span>}
          </div>
          <div>
            <Input label='52.2.Califique contaminacion sonora' name='p522' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p522 && <span className="text-red-500">{errors.p522.message}</span>}
          </div >
          <div>
            <Input label='53.Califique limpieza de lomas' name='p53' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p53 && <span className="text-red-500">{errors.p53.message}</span>}
          </div >
          <div>
            <Input label='54.Causa de faltas de limpieza - Multi' name='p54' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p54 && <span className="text-red-500">{errors.p54.message}</span>}
          </div >
          <div>
            <Input label='55.Utiliza Punto verde' name='p55' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p55 && <span className="text-red-500">{errors.p55.message}</span>}
          </div >
          <div>
            <Input label='56.1.Conoce el CIAT' name='p561' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p561 && <span className="text-red-500">{errors.p561.message}</span>}
          </div >
          <div>
            <Input label='56.2.Produccion de materiales reciclados' name='p562' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p562 && <span className="text-red-500">{errors.p562.message}</span>}
          </div >
        </div >

        <div className="flex justify-center m_0">
          <Heading>Equipamiento comunitario</Heading>
        </div>
        <div className="flex justify-center">
          <Heading className='text-blue-400' size={'4'}>Respuestas multiplechoice cargar seguido sin espacios</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='57.Emergencia de salud - Multi' name='p57' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p57 && <span className="text-red-500">{errors.p57.message}</span>}
          </div>
          <div>
            <Input label='58.Suficientes espacios de recreacion' name='p58' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p58 && <span className="text-red-500">{errors.p58.message}</span>}
          </div >
          <div>
            <Input label='59.Que espacios faltan' name='p59' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-6]*$/ } }} type='number'></Input>
            {errors.p59 && <span className="text-red-500">{errors.p59.message}</span>}
          </div >
          <div>
            <Input label='60.Se abastace en comercios locales' name='p60' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p60 && <span className="text-red-500">{errors.p60.message}</span>}
          </div >
          <div>
            <Input label='61.La oferta comercial es suficiente' name='p61' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p61 && <span className="text-red-500">{errors.p61.message}</span>}
          </div >
          <div>
            <Input label='62.Que locales hacen falta' name='p62' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p62 && <span className="text-red-500">{errors.p62.message}</span>}
          </div >
          <div>
            <Input label='63.Conoce mercados/ferias municipales' name='p63' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p63 && <span className="text-red-500">{errors.p63.message}</span>}
          </div >
          <div>
            <Input label='63.1.Utiliza mercados locales' name='p631' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p631 && <span className="text-red-500">{errors.p631.message}</span>}
          </div >
          <div>
            <Input label='64.1.Conoce centros vecinales' name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p641 && <span className="text-red-500">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='64.2.Conoce clubes deportivos' name='p642' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p642 && <span className="text-red-500">{errors.p642.message}</span>}
          </div >
          <div>
            <Input label='64.3.Conoce centros comunitarios' name='p643' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p643 && <span className="text-red-500">{errors.p643.message}</span>}
          </div >
          <div>
            <Input label='64.4.Conoce capillas comunitarios' name='p644' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p644 && <span className="text-red-500">{errors.p644.message}</span>}
          </div >
          <div>
            <Input label='64.5.Utiliza estos centros' name='p645' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p645 && <span className="text-red-500">{errors.p645.message}</span>}
          </div >
          <div>
            <Input label='65.Cree que los espacios son necesarios' name='p65' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p65 && <span className="text-red-500">{errors.p65.message}</span>}
          </div >
          <div>
            <Input label='66.Existen espacios que identifiquen al barrio' name='p66' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p66 && <span className="text-red-500">{errors.p66.message}</span>}
          </div >
          <div>
            <Input label='66.1.Cuales' name='p661' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
            {errors.p661 && <span className="text-red-500">{errors.p661.message}</span>}
          </div >
        </div >

        <div className="flex justify-center m_0">
          <Heading>Sitio, conectividad y traslado</Heading>
        </div>
        <div className="flex justify-center">
          <Heading className='text-blue-400' size={'4'}>Respuestas multiplechoice cargar seguido sin espacios</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='67.Estado del acceso al barrio' name='p67' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p67 && <span className="text-red-500">{errors.p67.message}</span>}
          </div>
          <div>
            <Input label='68.Medio de transporte que utiliza' name='p68' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p68 && <span className="text-red-500">{errors.p68.message}</span>}
          </div >
          <div>
            <Input label='69.Fin del uso del transporte publico' name='p69' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-6]*$/ } }} type='number'></Input>
            {errors.p69 && <span className="text-red-500">{errors.p69.message}</span>}
          </div >
          <div>
            <Input label='70.Transporte publico es eficiente' name='p70' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p70 && <span className="text-red-500">{errors.p70.message}</span>}
          </div >
          <div>
            <Input label='70.1.Desventajas transporte - Multi' name='p701' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p701 && <span className="text-red-500">{errors.p701.message}</span>}
          </div >
          <div>
            <Input label='71.Conoce/usa Ecobus' name='p71' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p71 && <span className="text-red-500">{errors.p71.message}</span>}
          </div >
          <div>
            <Input label='71.1.Califique Ecobus' name='p711' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-2]*$/ } }} type='number'></Input>
            {errors.p711 && <span className="text-red-500">{errors.p711.message}</span>}
          </div >
          <div>
            <Input label='72.Frecuencia del uso del vehiculo particular' name='p72' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-4]*$/ } }} type='number'></Input>
            {errors.p72 && <span className="text-red-500">{errors.p72.message}</span>}
          </div >
          <div>
            <Input label='73.Fin del uso del vehi. particular - Multi' name='p73' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
            {errors.p73 && <span className="text-red-500">{errors.p73.message}</span>}
          </div >
          <div>
            <Input label='74.Como se traslada en el barrio' name='p74' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-9]*$/ } }} type='number'></Input>
            {errors.p74 && <span className="text-red-500">{errors.p74.message}</span>}
          </div >
          <div>
            <Input label='75.Conoce a sus vecinos' name='p75' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "Fuera de rango", value: /^[0-3]*$/ } }} type='number'></Input>
            {errors.p75 && <span className="text-red-500">{errors.p75.message}</span>}
          </div >
        </div >
        <div className='grid grid-cols-2 md:grid-cols-1 gap-4 mx-40 my-5'>
          <Input label='Observaciones' name='observaciones' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: false } }} type='text'></Input>
          {errors.p75 && <span className="text-red-500">{errors.p75.message}</span>}
        </div>
        <div className="flex justify-center mb-5 mt-4 space-x-4">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button radius='full' size={"3"} className='bg-green-400 text-black cursor-pointer'><DoubleArrowUpIcon color='black' />Cargar datos</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title className='text-red-500'>¡Atencion!</AlertDialog.Title>
              <AlertDialog.Description size="4">
                Esta por cargar los datos ingresados. Por favor verifique que los datos sean correctos antes de continuar.
                No podrá modificar los datos una vez cargados.
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button className='bg-blue-500 text-black cursor-pointer'>
                    Voy a verificar los datos
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button onClick={submit} type='submit' variant="solid" className='bg-red-500 cursor-pointer'>
                    Cargar definitivamente
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </form >
    </>
  )
}

export default New