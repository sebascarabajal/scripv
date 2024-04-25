"use client"
import React from 'react'
import { Button, Heading } from '@radix-ui/themes'
import Input from '@/components/Input';
import { useForm } from 'react-hook-form'
import { EyeOpenIcon } from '@radix-ui/react-icons';

function NewSheet() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  return (
    <form action="">

      <div className="flex justify-center">
        <Heading>Carga Estructura Familiar</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='Sector' name='sector' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Manzana' name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Casa' name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Vivienda' name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Hogar' name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Supervisor' name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
        </div>
        <div>
          <Input label='Encuestador' name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
        </div>
        <div>
          <Input label='Respondente de la vivienda' name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
        </div>
        <div>
          <Input label='Visita' name='visita' control={control} placeholder='Nro de visita' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40">
        <div>
          <Input label='20' name='20' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='21' name='21' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='22' name='22' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Heading>Carga servicios, instalaciones e infraestructura </Heading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='23' name='23' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='24' name='24' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='25' name='25' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='25.1' name='25.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='26' name='26' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='26.1' name='26.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='26.2' name='26.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='27' name='27' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Heading>Vivienda </Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='28' name='28' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='28.1' name='28.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='29' name='29' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='29.1' name='29.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='30' name='30' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='31' name='31' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='31.1' name='31.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='31.2' name='31.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='31.3' name='31.3' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='31.4' name='31.4' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='32' name='32' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='32.1' name='32.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='33' name='33' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='34 Luz' name='34.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='34 Gas' name='34.2' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='35' name='35' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='36' name='36' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='36.1' name='36.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Heading>Hábitat y ambiente del barrio</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='37' name='37' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='38' name='38' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='39' name='39' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='40' name='40' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='41' name='41' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='42' name='42' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='43' name='43' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='44' name='44' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='45' name='45' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='46' name='46' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='47' name='47' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='48' name='48' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='49' name='49' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='50' name='50' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='51' name='51' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='52' name='52' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='53' name='53' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='54' name='54' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='55' name='55' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='56' name='56' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Heading>Equipamiento comunitario</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='57' name='57' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='58' name='58' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='59' name='59' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='60' name='60' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='61' name='61' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='62' name='62' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='63' name='63' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='63.1' name='63.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='64' name='64' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='64.1' name='64.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='65' name='65' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='66' name='66' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='66.1' name='66.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Heading>Sitio, conectividad y traslado</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='67' name='67' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='68' name='68' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='69' name='69' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='70' name='71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='70.1' name='70.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='71' name='71' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='71.1' name='71.1' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='72' name='72' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='73' name='73' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='74' name='74' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='75' name='75' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center mb-5">
        <Button type='submit'><EyeOpenIcon></EyeOpenIcon>Vista previa</Button>
      </div>
    </form>
  )
}

export default NewSheet