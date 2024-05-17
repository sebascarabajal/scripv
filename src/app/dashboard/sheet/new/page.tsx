"use client"
import React from 'react'
import { Button, Heading } from '@radix-ui/themes'
import Input from '@/components/Input';
import { useForm } from 'react-hook-form'
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { useStoreBloque } from '@/states/storeBloque'
import { useRouter } from 'next/navigation';

function New() {

  const { control, handleSubmit, formState: { errors } } = useForm({values: {sector:'', manzana: '', casa: '', vivienda: '', hogar: '', supervisor: '', encuestador: '', responde: '', visita: '', p20: '', p21: '', p22: '', p23: '', p24: '', p25: '', p251: '', p26: '', p261: '', p262: '', p27: '', p28: '', p281: '', p29: '', p291: '', p30: '', p31: '', p311: '', p312: '', p313: '', p314: '', p32: '', p321: '', p33: '', p341: '', p342: '', p35: '', p36: '', p361: '', p37: '', p38: '', p39: '', p40: '', p41: '', p42: '', p43: '', p44: '', p45: '', p46: '', p47: '', p48: '', p49: '', p50: '', p51: '', p52: '', p53: '', p54: '', p55: '', p56: '', p57: '', p58: '', p59: '', p60: '', p61: '', p62: '', p63: '', p631: '', p64: '', p641: '', p65: '', p66: '', p661: '', p67: '', p68: '', p69: '', p70: '', p701: '', p71: '', p711: '', p72: '', p73: '', p74: '', p75: ''}});
  const data = useStoreBloque(state => state);
  const setBloque = useStoreBloque(state => state.setBloque);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setBloque(data);
    router.push('/dashboard/sheet/verificarBloque');
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center">
          <Heading>Carga Estructura Familiar</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='Sector' value={data.sector} name='sector' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.sector && <span className="text-red-600">{errors.sector.message}</span>}
          </div>
          <div>
           <Input label='Manzana' value={data.manzana} name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
           {errors.manzana && <span className="text-red-600">{errors.manzana.message}</span>}
          </div>
          <div>
            <Input label='Casa' value={data.casa} name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.casa && <span className="text-red-600">{errors.casa.message}</span>}
          </div>
          <div>
            <Input label='Vivienda' value={data.vivienda} name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.vivienda && <span className="text-red-600">{errors.vivienda.message}</span>}
          </div>
          <div>
            <Input label='Hogar' value={data.hogar} name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.hogar && <span className="text-red-600">{errors.hogar.message}</span>}
          </div>
          <div>
            <Input label='Supervisor' value={data.supervisor} name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.supervisor && <span className="text-red-600">{errors.supervisor.message}</span>}
          </div>
          <div>
            <Input label='Encuestador' value={data.encuestador} name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.encuestador && <span className="text-red-600">{errors.encuestador.message}</span>}
          </div>
          <div>
            <Input label='Respondente de la vivienda' value={data.responde} name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.responde && <span className="text-red-600">{errors.responde.message}</span>}
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40">
          <div>
            <Input label='20' value={data.p20} name='p20' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p20 && <span className="text-red-600">{errors.p20.message}</span>}
          </div>
          <div>
            <Input label='21' value={data.p21} name='p21' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p21 && <span className="text-red-600">{errors.p21.message}</span>}
          </div>
          <div>
            <Input label='22' value={data.p22} name='p22' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p22 && <span className="text-red-600">{errors.p22.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Carga servicios, instalaciones e infraestructura </Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='23' value={data.p23} name='p23' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p23 && <span className="text-red-600">{errors.p23.message}</span>}
          </div>
          <div>
            <Input label='24' value={data.p24} name='p24' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p24 && <span className="text-red-600">{errors.p24.message}</span>}
          </div >
          <div>
            <Input label='25' value={data.p25} name='p25' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p25 && <span className="text-red-600">{errors.p25.message}</span>}
          </div >
          <div>
            <Input label='25.1' value={data.p251} name='p251' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p251 && <span className="text-red-600">{errors.p251.message}</span>}
          </div >
          <div>
            <Input label='26' value={data.p26} name='p26' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p26 && <span className="text-red-600">{errors.p26.message}</span>}
          </div >
          <div>
            <Input label='26.1' value={data.p261} name='p261' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p261 && <span className="text-red-600">{errors.p261.message}</span>}
          </div >
          <div>
            <Input label='26.2' value={data.p262} name='p262' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p262 && <span className="text-red-600">{errors.p262.message}</span>}
          </div >
          <div>
            <Input label='27' value={data.p27} name='p27' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p27 && <span className="text-red-600">{errors.p27.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Vivienda </Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='28' value={data.p28} name='p28' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "¡La contraseña debe contener al menos un número!", value: /.*[0-9].*/ }}} type='text'></Input>
            {errors.p28 && <span className="text-red-600">{errors.p28.message}</span>}
          </div>
          <div>
            <Input label='28.1' value={data.p281} name='p281' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p281 && <span className="text-red-600">{errors.p281.message}</span>}
          </div >
          <div>
            <Input label='29' value={data.p29} name='p29' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p29 && <span className="text-red-600">{errors.p29.message}</span>}
          </div>
          <div>
            <Input label='29.1' value={data.p291} name='p291' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p291 && <span className="text-red-600">{errors.p291.message}</span>}
          </div>
          <div>
            <Input label='30' value={data.p30} name='p30' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p30 && <span className="text-red-600">{errors.p30.message}</span>}
          </div >
          <div>
            <Input label='31' value={data.p31} name='p31' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p31 && <span className="text-red-600">{errors.p31.message}</span>}
          </div >
          <div>
            <Input label='31.1' value={data.p311} name='p311' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p311 && <span className="text-red-600">{errors.p311.message}</span>}
          </div >
          <div>
            <Input label='31.2' value={data.p312} name='p312' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p312 && <span className="text-red-600">{errors.p312.message}</span>}
          </div >
          <div>
            <Input label='31.3' value={data.p313} name='p313' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p313 && <span className="text-red-600">{errors.p313.message}</span>}
          </div >
          <div>
            <Input label='31.4' value={data.p314} name='p314' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p314 && <span className="text-red-600">{errors.p314.message}</span>}
          </div >
          <div>
            <Input label='32' value={data.p32} name='p32' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p32 && <span className="text-red-600">{errors.p32.message}</span>}
          </div >
          <div>
            <Input label='32.1' value={data.p321} name='p321' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p321 && <span className="text-red-600">{errors.p321.message}</span>}
          </div >
          <div>
            <Input label='33' value={data.p33} name='p33' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p33 && <span className="text-red-600">{errors.p33.message}</span>}
          </div >
          <div>
            <Input label='34 Luz' value={data.p341} name='p341' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p341 && <span className="text-red-600">{errors.p341.message}</span>}
          </div >
          <div>
            <Input label='34 Gas' value={data.p342} name='p342' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p342 && <span className="text-red-600">{errors.p342.message}</span>}
          </div >
          <div>
            <Input label='35' value={data.p35} name='p35' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p35 && <span className="text-red-600">{errors.p35.message}</span>}
          </div >
          <div>
            <Input label='36' value={data.p36} name='p36' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p36 && <span className="text-red-600">{errors.p36.message}</span>}
          </div >
          <div>
            <Input label='36.1' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Hábitat y ambiente del barrio</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='37' value={data.p37} name='p37' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p37 && <span className="text-red-600">{errors.p37.message}</span>}
          </div>
          <div>
            <Input label='38' value={data.p38} name='p38' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p38 && <span className="text-red-600">{errors.p38.message}</span>}
          </div >
          <div>
            <Input label='39' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='40' value={data.p40} name='p40' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p40 && <span className="text-red-600">{errors.p40.message}</span>}
          </div >
          <div>
            <Input label='41' value={data.p41} name='p41' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p41 && <span className="text-red-600">{errors.p41.message}</span>}
          </div >
          <div>
            <Input label='42' value={data.p42} name='p42' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p42 && <span className="text-red-600">{errors.p42.message}</span>}
          </div >
          <div>
            <Input label='43' value={data.p43} name='p43' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p43 && <span className="text-red-600">{errors.p43.message}</span>}
          </div >
          <div>
            <Input label='44' value={data.p44} name='p44' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p44 && <span className="text-red-600">{errors.p44.message}</span>}
          </div >
          <div>
            <Input label='45' value={data.p45} name='p45' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p45 && <span className="text-red-600">{errors.p45.message}</span>}
          </div >
          <div>
            <Input label='46' value={data.p46} name='p46' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p46 && <span className="text-red-600">{errors.p46.message}</span>}
          </div >
          <div>
            <Input label='47' value={data.p47} name='p47' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p47 && <span className="text-red-600">{errors.p47.message}</span>}
          </div >
          <div>
            <Input label='48' value={data.p48} name='p48' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p48 && <span className="text-red-600">{errors.p48.message}</span>}
          </div >
          <div>
            <Input label='49' value={data.p49} name='p49' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p49 && <span className="text-red-600">{errors.p49.message}</span>}
          </div >
          <div>
            <Input label='50' value={data.p50} name='p50' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p50 && <span className="text-red-600">{errors.p50.message}</span>}
          </div >
          <div>
            <Input label='51' value={data.p51} name='p51' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p51 && <span className="text-red-600">{errors.p51.message}</span>}
          </div >
          <div>
            <Input label='52' value={data.p52} name='p52' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p52 && <span className="text-red-600">{errors.p52.message}</span>}
          </div >
          <div>
            <Input label='53' value={data.p53} name='p53' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p53 && <span className="text-red-600">{errors.p53.message}</span>}
          </div >
          <div>
            <Input label='54' value={data.p54} name='p54' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p54 && <span className="text-red-600">{errors.p54.message}</span>}
          </div >
          <div>
            <Input label='55' value={data.p55} name='p55' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p55 && <span className="text-red-600">{errors.p55.message}</span>}
          </div >
          <div>
            <Input label='56' value={data.p56} name='p56' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p56 && <span className="text-red-600">{errors.p56.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Equipamiento comunitario</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='57' value={data.p57} name='p57' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p57 && <span className="text-red-600">{errors.p57.message}</span>}
          </div>
          <div>
            <Input label='58' value={data.p58} name='p58' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p58 && <span className="text-red-600">{errors.p58.message}</span>}
          </div >
          <div>
            <Input label='59' value={data.p59} name='p59' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p59 && <span className="text-red-600">{errors.p59.message}</span>}
          </div >
          <div>
            <Input label='60' value={data.p60} name='p60' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p60 && <span className="text-red-600">{errors.p60.message}</span>}
          </div >
          <div>
            <Input label='61' value={data.p61} name='p61' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p61 && <span className="text-red-600">{errors.p61.message}</span>}
          </div >
          <div>
            <Input label='62' value={data.p62} name='p62' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p62 && <span className="text-red-600">{errors.p62.message}</span>}
          </div >
          <div>
            <Input label='63' value={data.p63} name='p63' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p63 && <span className="text-red-600">{errors.p63.message}</span>}
          </div >
          <div>
            <Input label='63.1' value={data.p631} name='p631' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p631 && <span className="text-red-600">{errors.p631.message}</span>}
          </div >
          <div>
            <Input label='64' value={data.p64} name='p64' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p64 && <span className="text-red-600">{errors.p64.message}</span>}
          </div >
          <div>
            <Input label='64.1' value={data.p641} name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p641 && <span className="text-red-600">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='65' value={data.p65} name='p65' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p65 && <span className="text-red-600">{errors.p65.message}</span>}
          </div >
          <div>
            <Input label='66' value={data.p66} name='p66' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p66 && <span className="text-red-600">{errors.p66.message}</span>}
          </div >
          <div>
            <Input label='66.1' value={data.p661} name='p661' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p661 && <span className="text-red-600">{errors.p661.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Sitio, conectividad y traslado</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='67' value={data.p67} name='p67' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p67 && <span className="text-red-600">{errors.p67.message}</span>}
          </div>
          <div>
            <Input label='68' value={data.p68} name='p68' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p68 && <span className="text-red-600">{errors.p68.message}</span>}
          </div >
          <div>
            <Input label='69' value={data.p69} name='p69' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p69 && <span className="text-red-600">{errors.p69.message}</span>}
          </div >
          <div>
            <Input label='70' value={data.p70} name='p71' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p70 && <span className="text-red-600">{errors.p70.message}</span>}
          </div >
          <div>
            <Input label='70.1' value={data.p701} name='p701' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p701 && <span className="text-red-600">{errors.p701.message}</span>}
          </div >
          <div>
            <Input label='71' value={data.p71} name='p71' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p71 && <span className="text-red-600">{errors.p71.message}</span>}
          </div >
          <div>
            <Input label='71.1' value={data.p711} name='p711' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p711 && <span className="text-red-600">{errors.p711.message}</span>}
          </div >
          <div>
            <Input label='72' value={data.p72} name='p72' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p72 && <span className="text-red-600">{errors.p72.message}</span>}
          </div >
          <div>
            <Input label='73' value={data.p73} name='p73' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p73 && <span className="text-red-600">{errors.p73.message}</span>}
          </div >
          <div>
            <Input label='74' value={data.p74} name='p74' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p74 && <span className="text-red-600">{errors.p74.message}</span>}
          </div >
          <div>
            <Input label='75' value={data.p75} name='p75' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: {value: /^[0-9]*$/, message: "Solo se permiten números"}}} type='text'></Input>
            {errors.p75 && <span className="text-red-600">{errors.p75.message}</span>}
          </div >
        </div >

        <div className="flex justify-center mb-5">
          <Button type='submit'><EyeOpenIcon></EyeOpenIcon>Vista previa</Button>
        </div>
      </form >
    </>
  )
}

export default New