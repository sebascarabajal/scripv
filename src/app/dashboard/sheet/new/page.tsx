"use client"
import React from 'react'
import { Heading } from '@radix-ui/themes'
import Input from '@/components/Input';
import { useForm } from 'react-hook-form'

function NewSheet() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  return (
      <form action="">
        <div className="flex justify-center">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='Sector' name='sector' control={control} placeholder='Nro de sector' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='number'></Input>
          </div>
        </div>
      </form>
  )
}

export default NewSheet