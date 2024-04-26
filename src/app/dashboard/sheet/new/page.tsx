"use client"
import React from 'react'
import { Button, Heading } from '@radix-ui/themes'
import Input from '@/components/Input';
import { useForm } from 'react-hook-form'
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { useStoreBloque } from '@/states/storeBloque'
import { useRouter } from 'next/navigation';

function New() {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const resdata = useStoreBloque(state => state);
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
            <Input label='Sector' value={resdata.sector} name='sector' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Manzana' value={resdata.manzana} name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Casa' value={resdata.casa} name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Vivienda' value={resdata.vivienda} name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Hogar' value={resdata.hogar} name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Supervisor' value={resdata.supervisor} name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
          </div>
          <div>
            <Input label='Encuestador' value={resdata.encuestador} name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
          </div>
          <div>
            <Input label='Respondente de la vivienda' value={resdata.responde} name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
          </div>
          <div>
            <Input label='Visita' value={resdata.visita} name='visita' control={control} placeholder='Nro de visita' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40">
          <div>
            <Input label='20'  value={resdata.p20} name='20' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='21' value={resdata.p21} name='21' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
      </div>
      <div>
        <Input label='22' value={resdata.p22} name='22' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
    </div >
      </div >

      <div className="flex justify-center my-10">
        <Heading>Carga servicios, instalaciones e infraestructura </Heading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='23' value={resdata.23} name='23' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='24' value={resdata.24} name='24' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='25' value={resdata.25} name='25' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='25.1' value={resdata.251} name='25.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='26' value={resdata.26} name='26' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='26.1' value={resdata.261} name='26.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='26.2' value={resdata.262} name='26.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='27' value={resdata.27} name='27' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
      </div >

      <div className="flex justify-center my-10">
        <Heading>Vivienda </Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='28' value={resdata.28} name='28' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='28.1' value={resdata.281} name='28.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='29' value={resdata.29} name='29' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='29.1' value={resdata.291} name='29.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='30' value={resdata.30} name='30' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='31' value={resdata.31} name='31' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='31.1' value={resdata.311} name='31.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='31.2' value={resdata.312} name='31.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='31.3' value={resdata.313} name='31.3' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='31.4' value={resdata.314} name='31.4' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='32' value={resdata.32} name='32' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='32.1' value={resdata.321} name='32.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='33' value={resdata.33} name='33' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='34 Luz' value={resdata.341} name='34.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='34 Gas' value={resdata.342} name='34.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='35' value={resdata.35} name='35' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='36' value={resdata.36} name='36' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='36.1' value={resdata.361} name='36.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
      </div >

      <div className="flex justify-center my-10">
        <Heading>Hábitat y ambiente del barrio</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='37' value={resdata.37} name='37' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='38' value={resdata.38} name='38' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='39' value={resdata.39} name='39' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='40' value={resdata.40} name='40' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='41' value={resdata.41} name='41' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='42' value={resdata.42} name='42' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='43' value={resdata.43} name='43' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='44' value={resdata.44} name='44' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='45' value={resdata.45} name='45' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='46' value={resdata.46} name='46' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='47' value={resdata.47} name='47' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='48' value={resdata.48} name='48' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='49' value={resdata.49} name='49' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='50' value={resdata.50} name='50' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='51' value={resdata.51} name='51' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='52' value={resdata.52} name='52' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='53' value={resdata.53} name='53' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='54' value={resdata.54} name='54' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='55' value={resdata.55} name='55' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='56' value={resdata.56} name='56' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
      </div >

      <div className="flex justify-center my-10">
        <Heading>Equipamiento comunitario</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='57' value={resdata.57} name='57' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='58' value={resdata.58} name='58' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='59' value={resdata.59} name='59' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='60' value={resdata.60} name='60' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='61' value={resdata.61} name='61' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='62' value={resdata.62} name='62' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='63' value={resdata.63} name='63' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='63.1' value={resdata.631} name='63.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='64' value={resdata.64} name='64' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='64.1' value={resdata.641} name='64.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='65' value={resdata.65} name='65' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='66' value={resdata.66} name='66' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='66.1' value={resdata.661} name='66.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
        </div >
      </div >

      <div className="flex justify-center my-10">
        <Heading>Sitio, conectividad y traslado</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='67' value={resdata.67} name='67' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='68' value={resdata.68} name='68' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='69' value={resdata.69} name='69' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='70' value={resdata.70} name='71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='70.1' value={resdata.701} name='70.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='71' value={resdata.71} name='71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='71.1' value={resdata.711} name='71.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='72' value={resdata.72} name='72' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='73' value={resdata.73} name='73' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='74' value={resdata.74} name='74' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div >
    <div>
      <Input label='75' value={resdata.75} name='75' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
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