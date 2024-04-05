"use client";
import React from 'react'
import { Button, Flex, TextFieldInput, TextFieldRoot, TextFieldSlot, Card, Heading } from '@radix-ui/themes'
import { HomeIcon } from '@radix-ui/react-icons'
import { useForm, Controller } from 'react-hook-form'
import Email from 'next-auth/providers/email'

function NewSheet() {

  const { control, formState: { errors } } = useForm({ values: { email: "", password: "" } });

  return (
    <form>
      <div className="flex flex-col space-y-4 max-w-screen-xl flex-wrap items-center justify-between">
        <label htmlFor='email'>N°1 ADSD</label>
        <TextFieldRoot>
          <TextFieldSlot></TextFieldSlot>
          <Controller
            name='email'
            control={control}
            rules={{ required: { message: "¡Se requiere email!", value: true } }}
            render={({ field }) => {
              return (
                <TextFieldInput type='number' placeholder='N°1' autoFocus {...field}></TextFieldInput>
              );
            }}
          />
        </TextFieldRoot>
        <div className="flex space-x-4">
          <TextFieldRoot>
            <TextFieldSlot />
          </TextFieldRoot>
          <TextFieldRoot>
            <TextFieldSlot />
          </TextFieldRoot>
        </div>
        <TextFieldRoot>
          <TextFieldSlot />
        </TextFieldRoot>
        <Button>Guardar</Button>
      </div>
    </form>
  )
}

export default NewSheet