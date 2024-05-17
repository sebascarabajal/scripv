"use client"
import { BackpackIcon, EnvelopeClosedIcon, LightningBoltIcon, Link2Icon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Button, Flex, TextFieldInput, TextFieldRoot, TextFieldSlot, Text } from '@radix-ui/themes'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import React, { useTransition } from 'react'

function SignupForm() {

    const { control, handleSubmit, formState: { errors } } = useForm({ values: {id_Usuario: "" , Email: "", Password: "", Nombre: "", Apellido: "", Tipo_usuario: "" } });

    const router = useRouter()

    const [isPending, startTransition] = useTransition()

    const onSubmit = handleSubmit(async (data) => {
        startTransition(async () => {
            const res = await axios.post('/api/auth/register', data)
            console.log(res)

            if (res.status === 201) {
                console.log('Usuario creado con éxito')
                const result = await signIn('credentials', {
                    id_Usuario: res.data.id_Usuario,
                    Email: res.data.Email,
                    Password: data.Password,
                    redirect: false
                })

                if (!result?.ok) {
                    console.log(result?.error)
                    return;
                }

                router.push('/dashboard')
                router.refresh()
            }
        })

    });

    return (
        <form onSubmit={onSubmit}>
            <Flex direction="column" gap="2">
                <label htmlFor='id_Usuario'>ID del Usuario</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <Link2Icon height="16" width="16" />
                    </TextFieldSlot>
                    <Controller
                        control={control}
                        name="id_Usuario"
                        rules={{ required: { message: "¡Se requiere un ID!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='number' placeholder='1234' autoFocus {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.id_Usuario && <Text className='text-red-400'>{errors.id_Usuario.message}</Text>}

                <label htmlFor='name'>Nombre</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <PersonIcon height="16" width="16"></PersonIcon>
                    </TextFieldSlot>
                    <Controller
                        control={control}
                        name="Nombre"
                        rules={{ required: { message: "¡Se requiere un Nombre!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='text' placeholder='Juan' {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.Nombre && <Text className='text-red-400'>{errors.Nombre.message}</Text>}

                <label htmlFor='Apellido'>Apellido</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <PersonIcon height="16" width="16"></PersonIcon>
                    </TextFieldSlot>
                    <Controller
                        control={control}
                        name="Apellido"
                        rules={{ required: { message: "¡Se requiere un Apellido!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='text' placeholder='Perez' {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.Apellido && <Text className='text-red-400'>{errors.Apellido.message}</Text>}

                <label htmlFor='email'>Email</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>
                    </TextFieldSlot>
                    <Controller
                        name='Email'
                        control={control}
                        rules={{ required: { message: "¡Se requiere un Email!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='email' placeholder='miCorreo@gmail.com' {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.Email && <Text className='text-red-400'>{errors.Email.message}</Text>}

                <label htmlFor='cargo'>Cargo</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <BackpackIcon height="16" width="16"></BackpackIcon>
                    </TextFieldSlot>
                    <Controller
                        name='Tipo_usuario'
                        control={control}
                        rules={{ required: { message: "¡Se requiere un cargo!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='text' placeholder='Censista' {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.Tipo_usuario && <Text className='text-red-400'>{errors.Tipo_usuario.message}</Text>}

                <label htmlFor='password'>Contraseña</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <LockClosedIcon height="16" width="16"></LockClosedIcon>
                    </TextFieldSlot>
                    <Controller
                        name='Password'
                        control={control}
                        rules={{ required: { message: "¡Se requiere una Contraseña!", value: true }, minLength: { message: "¡La contraseña debe ser de 6 carácteres o más!", value: 6 }, maxLength: { message: "¡La contraseña debe ser de 20 carácteres o menos!", value: 16 }, pattern: { message: "¡La contraseña debe contener al menos un número!", value: /.*[0-9].*/ } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='password' placeholder='*********' {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.Password && <Text className='text-red-400'>{errors.Password.message}</Text>}

                <Button type='submit'>
                    <LightningBoltIcon height="16" width="16"></LightningBoltIcon>
                    {isPending ? "Creando tu cuenta..." : "¡Crear!"}
                </Button>
            </Flex>
        </form>
    )
}

export default SignupForm