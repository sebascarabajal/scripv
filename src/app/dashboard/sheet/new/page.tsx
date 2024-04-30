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
            <Input label='20' value={resdata.p20} name='20' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
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
            <Input label='23' value={resdata.p23} name='23' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='24' value={resdata.p24} name='24' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='25' value={resdata.p25} name='25' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='25.1' value={resdata.p251} name='25.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='26' value={resdata.p26} name='26' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='26.1' value={resdata.p261} name='26.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='26.2' value={resdata.p262} name='26.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='27' value={resdata.p27} name='27' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Vivienda </Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='28' value={resdata.p28} name='28' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='28.1' value={resdata.p281} name='28.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='29' value={resdata.p29} name='29' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='29.1' value={resdata.p291} name='29.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='30' value={resdata.p30} name='30' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31' value={resdata.p31} name='31' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.1' value={resdata.p311} name='31.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.2' value={resdata.p312} name='31.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.3' value={resdata.p313} name='31.3' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.4' value={resdata.p314} name='31.4' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='32' value={resdata.p32} name='32' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='32.1' value={resdata.p321} name='32.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='33' value={resdata.p33} name='33' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='34 Luz' value={resdata.p341} name='34.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='34 Gas' value={resdata.p342} name='34.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='35' value={resdata.p35} name='35' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='36' value={resdata.p36} name='36' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='36.1' value={resdata.p361} name='36.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Hábitat y ambiente del barrio</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='37' value={resdata.p37} name='37' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='38' value={resdata.p38} name='38' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='39' value={resdata.p39} name='39' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='40' value={resdata.p40} name='40' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='41' value={resdata.p41} name='41' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='42' value={resdata.p42} name='42' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='43' value={resdata.p43} name='43' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='44' value={resdata.p44} name='44' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='45' value={resdata.p45} name='45' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='46' value={resdata.p46} name='46' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='47' value={resdata.p47} name='47' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='48' value={resdata.p48} name='48' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='49' value={resdata.p49} name='49' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='50' value={resdata.p50} name='50' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='51' value={resdata.p51} name='51' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='52' value={resdata.p52} name='52' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='53' value={resdata.p53} name='53' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='54' value={resdata.p54} name='54' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='55' value={resdata.p55} name='55' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='56' value={resdata.p56} name='56' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Equipamiento comunitario</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='57' value={resdata.p57} name='57' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='58' value={resdata.p58} name='58' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='59' value={resdata.p59} name='59' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='60' value={resdata.p60} name='60' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='61' value={resdata.p61} name='61' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='62' value={resdata.p62} name='62' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='63' value={resdata.p63} name='63' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='63.1' value={resdata.p631} name='63.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='64' value={resdata.p64} name='64' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='64.1' value={resdata.p641} name='64.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='65' value={resdata.p65} name='65' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='66' value={resdata.p66} name='66' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='66.1' value={resdata.p661} name='66.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Sitio, conectividad y traslado</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='67' value={resdata.p67} name='67' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='68' value={resdata.p68} name='68' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='69' value={resdata.p69} name='69' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='70' value={resdata.p70} name='71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='70.1' value={resdata.p701} name='70.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='71' value={resdata.p71} name='71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='71.1' value={resdata.p711} name='71.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='72' value={resdata.p72} name='72' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='73' value={resdata.p73} name='73' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='74' value={resdata.p74} name='74' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='75' value={resdata.p75} name='75' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
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