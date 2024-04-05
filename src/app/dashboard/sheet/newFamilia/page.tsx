"use client";
import React from 'react'
import { Button, Flex, TextFieldInput, TextFieldRoot, TextFieldSlot, Card, Heading } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input';


function NewSheet() {

  const { control, formState: { errors } } = useForm({ values: { email: "", password: "" } });

  return (
    <form>
      <div className="flex flex-col space-y-4 max-w-screen-xl flex-wrap items-center justify-between">
        {/* <Input label='Nro Casa' name='nrocasa' control={control} placeholder='Nro de casa' rules={{required:{message: "¡Se requiere una Contraseña!", value: true}}} type='number'></Input> */}
        <div className="flex space-x-4">
        <Input label='Nro Casa' name='nrocasa' control={control} placeholder='Nro de casa' rules={{required:{message: "¡Se requiere una Contraseña!", value: true}}} type='number'></Input>
        <Input label='Nro Casa' name='nrocasa' control={control} placeholder='Nro de casa' rules={{required:{message: "¡Se requiere una Contraseña!", value: true}}} type='number'></Input>
        </div>

        <Button>Guardar</Button>
      </div>
    </form>
  )
}

export default NewSheet