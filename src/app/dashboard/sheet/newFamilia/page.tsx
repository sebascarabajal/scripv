"use client";
import React from 'react'
import { Button, Flex, TextFieldInput, TextFieldRoot, TextFieldSlot, Card, Heading } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input';


function NewSheet() {

  const { control, formState: { errors } } = useForm({ values: { email: "", password: "" } });

  return (
    <form>
      <div className="flex justify-center">
        <Heading>Datos Genrales</Heading>
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
          <Input label='1' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='2' name='nrocasa' control={control} placeholder='Nro de Barrio' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='3' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='4' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='5' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='6' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='7' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='8' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='9' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='10' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='11' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='12' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='13' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='14' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='15' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='16' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='17' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='18' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='19' name='nrocasa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>

      </div>
      <div className="flex justify-center">
        <Button>Guardar</Button>
      </div>
    </form>
  )
}

export default NewSheet