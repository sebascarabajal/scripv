"use client";
import React from 'react'
import { Button, Heading } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input';
import { UploadIcon } from '@radix-ui/react-icons';
import Dialog from '@/components/Dialog';


function NewSheet() {

  const { control, formState: { errors } } = useForm({ values: { email: "", password: "" } });

  return (
    <form>
      <div className="flex justify-center">
        <Heading>Datos Generales</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <Input label='Sector' name='sector' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Manzana' name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
        </div>
        <div>
          <Input label='Casa' name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Vivienda' name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Hogar' name='hogar' control={control} placeholder='Nro de Vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Supervisor' name='supervidor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
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

      <div className="flex justify-center">
        <Heading>Estructura Familiar</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-40 my-5">
        <div>
          <Input label='1' name='nro_integrante' control={control} placeholder='Número' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='2' name='nombre' control={control} placeholder='Nombre' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='3' name='rel_paren' control={control} placeholder='Rel. Parentesco' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='4' name='genero' control={control} placeholder='Género' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='5' name='edad' control={control} placeholder='Edad' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='6' name='discapacidad' control={control} placeholder='Discapacidad' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='7' name='dificultad' control={control} placeholder='Dificultad' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='8' name='certificado' control={control} placeholder='Certificado Disc.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='9' name='pension' control={control} placeholder='Pensión por disc.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='10' name='nivel_estudio' control={control} placeholder='Nivel de estudio' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='11' name='estudio_completo' control={control} placeholder='¿Completo nivel?' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='12' name='motivo' control={control} placeholder='Motivo si no finalizó' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='13' name='tipo_establec.' control={control} placeholder='Tipo de establec. educ.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='14' name='lugar_establec' control={control} placeholder='Lugar del establecimiento' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='15' name='actividad' control={control} placeholder='Condic. de activ.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='16' name='categoria' control={control} placeholder='Categoría de trabajo' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='17' name='motivo_categ' control={control} placeholder='Motivo' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='18' name='lugar_trabajo' control={control} placeholder='Lugar de Trabajo' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='19' name='aportes_jub' control={control} placeholder='Aportes jubil.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='20' name='ingreso_ind' control={control} placeholder='Ingreso individual' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='21' name='cobra_jub' control={control} placeholder='Cobra jub. o pens.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Heading size={'2'} color='red'>VERIFICAR LOS DATOS CARGADOS ANTES DE ENVIAR</Heading>
      </div>
      <div className="flex justify-center mb-5">
        <Heading size={'2'} color='red'>NO PODRAN SER MODIFICADOS</Heading>
      </div>
      <div className="flex justify-center mb-5">
        <Dialog></Dialog>
      </div>

    </form>
  )
}

export default NewSheet