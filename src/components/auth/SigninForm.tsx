"use client"
import { EnterIcon, EnvelopeClosedIcon, LightningBoltIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text, TextFieldInput, TextFieldRoot, TextFieldSlot } from '@radix-ui/themes'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'

function SigninForm() {

    const {control, handleSubmit, formState:{errors}} = useForm({values:{email:"", password:""}});

    const router = useRouter()

    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password
        });

        if(!res?.ok){
            console.log(res)
        }

        router.push("/dashboard");
        router.refresh()
    });

  return (
    <form onSubmit={onSubmit}>
        <Flex direction="column" gap="3">
            <label htmlFor='email'>Email</label>
            <TextFieldRoot>
                <TextFieldSlot>
                    <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>
                </TextFieldSlot>
                <Controller 
                    name='email' 
                    control={control} 
                    rules={{required:{message:"¡Se requiere email!", value: true}}} 
                    render={({field}) =>{
                        return(
                            <TextFieldInput type='email' placeholder='miCorreo@gmail.com' autoFocus {...field}></TextFieldInput>
                        );
                    }} 
                />
            </TextFieldRoot>

            {errors.email && <Text className='text-red-400'>{errors.email.message}</Text>}

            <label htmlFor='password'>Contraseña</label>
            <TextFieldRoot>
                <TextFieldSlot>
                    <LockClosedIcon height="16" width="16"></LockClosedIcon>
                </TextFieldSlot>
                <Controller 
                    name='password' 
                    control={control} 
                    rules={{required:{message:"¡Se requiere contraseña!", value: true}, minLength:{message:"¡La contraseña debe ser de 6 carácteres o más!", value:6}}} 
                    render={({field}) =>{
                        return(
                            <TextFieldInput type='password' placeholder='*********' {...field}></TextFieldInput>
                        );
                    }} 
                />
            </TextFieldRoot>
            {errors.password && <Text className='text-red-400'>{errors.password.message}</Text>}

            <Button type='submit' mt="4">
                <EnterIcon height="16" width="16"></EnterIcon>
                ¡Entrar!
            </Button>
        </Flex>
    </form>
    )
}

export default SigninForm