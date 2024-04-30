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
            <Input label='Sector' value={data.sector} name='sector' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Manzana' value={data.manzana} name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Casa' value={data.casa} name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Vivienda' value={data.vivienda} name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Hogar' value={data.hogar} name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='Supervisor' value={data.supervisor} name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
          </div>
          <div>
            <Input label='Encuestador' value={data.encuestador} name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
          </div>
          <div>
            <Input label='pondente de la vivienda' value={data.responde} name='responde' control={control} placeholder='respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
          </div>
          <div>
            <Input label='Visita' value={data.visita} name='visita' control={control} placeholder='Nro de visita' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40">
          <div>
            <Input label='20' value={data.key} name='key' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='21' value={data.p21} name='p21' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='22' value={data.p22} name='p22' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Carga servicios, instalaciones e infraestructura </Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='23' value={data.p23} name='p23' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='24' value={data.p24} name='p24' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='25' value={data.p25} name='p25' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='25.1' value={data.p251} name='p251' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='26' value={data.p26} name='p26' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='26.1' value={data.p261} name='p261' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='26.2' value={data.p262} name='p262' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='27' value={data.p27} name='p27' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Vivienda </Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='28' value={data.p28} name='p28' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='28.1' value={data.p281} name='p281' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='29' value={data.p29} name='p29' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='29.1' value={data.p291} name='p291' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='30' value={data.p30} name='p30' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31' value={data.p31} name='p31' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.1' value={data.p311} name='p311' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.2' value={data.p312} name='p312' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.3' value={data.p313} name='p313' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='31.4' value={data.p314} name='p314' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='32' value={data.p32} name='p32' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='32.1' value={data.p321} name='p321' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='33' value={data.p33} name='p33' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='34 Luz' value={data.p341} name='p341' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='34 Gas' value={data.p342} name='p342' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='35' value={data.p35} name='p35' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='36' value={data.p36} name='p36' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='36.1' value={data.p361} name='p361' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Hábitat y ambiente del barrio</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='37' value={data.p37} name='p37' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='38' value={data.p38} name='p38' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='39' value={data.p39} name='p39' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='40' value={data.p40} name='p40' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='41' value={data.p41} name='p41' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='42' value={data.p42} name='p42' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='43' value={data.p43} name='p43' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='44' value={data.p44} name='p44' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='45' value={data.p45} name='p45' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='46' value={data.p46} name='p46' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='47' value={data.p47} name='p47' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='48' value={data.p48} name='p48' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='49' value={data.p49} name='p49' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='50' value={data.p50} name='p50' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='51' value={data.p51} name='p51' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='52' value={data.p52} name='p52' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='53' value={data.p53} name='p53' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='54' value={data.p54} name='p54' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='55' value={data.p55} name='p55' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='56' value={data.p56} name='p56' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Equipamiento comunitario</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='57' value={data.p57} name='p57' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='58' value={data.p58} name='p58' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='59' value={data.p59} name='p59' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='60' value={data.p60} name='p60' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='61' value={data.p61} name='p61' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='62' value={data.p62} name='p62' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='63' value={data.p63} name='p63' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='63.1' value={data.p631} name='p631' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='64' value={data.p64} name='p64' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='64.1' value={data.p641} name='p641' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='65' value={data.p65} name='p65' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='66' value={data.p66} name='p66' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='66.1' value={data.p661} name='p661' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Sitio, conectividad y traslado</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='67' value={data.p67} name='p67' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
          <div>
            <Input label='68' value={data.p68} name='p68' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='69' value={data.p69} name='p69' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='70' value={data.p70} name='p71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='70.1' value={data.p701} name='p701' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='71' value={data.p71} name='p71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='71.1' value={data.p711} name='p711' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='72' value={data.p72} name='p72' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='73' value={data.p73} name='p73' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='74' value={data.p74} name='p74' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div >
          <div>
            <Input label='75' value={data.p75} name='p75' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
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