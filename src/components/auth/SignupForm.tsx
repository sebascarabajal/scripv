"use client"
import { EnvelopeClosedIcon, LightningBoltIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Button, Flex, TextFieldInput, TextFieldRoot, TextFieldSlot, Text } from '@radix-ui/themes'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import React, { useTransition } from 'react'

function SignupForm() {

    const { control, handleSubmit, formState: { errors } } = useForm({ values: { email: "", password: "", username: "" } });

    const router = useRouter()

    const [isPending, startTransition] = useTransition()

    const onSubmit = handleSubmit(async (data) => {
        startTransition(async () => {
            const res = await axios.post('/api/auth/register', data)
            console.log(res)

            if (res.status === 201) {
                const result = await signIn('credentials', {
                    email: res.data.email,
                    password: data.password,
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
                <label htmlFor='name'>Nombre</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <PersonIcon height="16" width="16"></PersonIcon>
                    </TextFieldSlot>
                    <Controller
                        control={control}
                        name="username"
                        rules={{ required: { message: "¡Se requiere un Nombre!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='text' placeholder='Jhon Doe' autoFocus {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.username && <Text className='text-red-400'>{errors.username.message}</Text>}

                <label htmlFor='email'>Email</label>
                <TextFieldRoot>
                    <TextFieldSlot>
                        <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>
                    </TextFieldSlot>
                    <Controller
                        name='email'
                        control={control}
                        rules={{ required: { message: "¡Se requiere un Email!", value: true } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='email' placeholder='miCorreo@gmail.com' {...field}></TextFieldInput>
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
                        rules={{ required: { message: "¡Se requiere una Contraseña!", value: true }, minLength: { message: "¡La contraseña debe ser de 6 carácteres o más!", value: 6 }, maxLength: { message: "¡La contraseña debe ser de 20 carácteres o menos!", value: 16}, pattern: { message: "¡La contraseña debe contener al menos un número!", value: /.*[0-9].*/ } }}
                        render={({ field }) => {
                            return (
                                <TextFieldInput type='password' placeholder='*********' {...field}></TextFieldInput>
                            );
                        }}
                    />
                </TextFieldRoot>

                {errors.password && <Text className='text-red-400'>{errors.password.message}</Text>}

                <Button type='submit'>
                    <LightningBoltIcon height="16" width="16"></LightningBoltIcon>
                    {isPending ? "Creando tu cuenta..." : "¡Crear!"}
                </Button>
            </Flex>
        </form>
    )
}

export default SignupForm