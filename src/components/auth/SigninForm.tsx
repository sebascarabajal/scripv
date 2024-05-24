"use client"
import { EnterIcon, EnvelopeClosedIcon, LightningBoltIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text, TextFieldInput, TextFieldRoot, TextFieldSlot } from '@radix-ui/themes'
import React, { useTransition } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function SigninForm() {

    const { control, setError, handleSubmit, formState: { errors } } = useForm({ values: { Email: "", Password: "" } });

    const router = useRouter()

    const [isPending, startTransition] = useTransition()

    const onSubmit = handleSubmit(async (data) => {
        startTransition(async () => {
            const res = await signIn("credentials", {
                redirect: false,
                Email: data.Email,
                Password: data.Password
            });
            if (res?.error) {
                setError("Password", { message: "¡Credenciales inválidas!", type: "manual" })
                return;
            }
            if (!res?.ok) {
                console.log(res)
            }
            else {
                const { error } = res
            }
            router.push("/dashboard");
        })
    });

    return (
        <>
            <form onSubmit={onSubmit}>
                <Flex direction="column" gap="3">
                    <label htmlFor='email'>Email</label>
                    <TextFieldRoot>
                        <TextFieldSlot>
                            <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>
                        </TextFieldSlot>
                        <Controller
                            name='Email'
                            control={control}
                            rules={{ required: { message: "¡Se requiere email!", value: true } }}
                            render={({ field }) => {
                                return (
                                    <TextFieldInput type='email' placeholder='miCorreo@gmail.com' autoFocus {...field}></TextFieldInput>
                                );
                            }}
                        />
                    </TextFieldRoot>

                    {errors.Email && <Text className='text-red-400'>{errors.Email.message}</Text>}

                    <label htmlFor='password'>Contraseña</label>
                    <TextFieldRoot>
                        <TextFieldSlot>
                            <LockClosedIcon height="16" width="16"></LockClosedIcon>
                        </TextFieldSlot>
                        <Controller
                            name='Password'
                            control={control}
                            rules={{ required: { message: "¡Se requiere contraseña!", value: true } }}
                            render={({ field }) => {
                                return (
                                    <TextFieldInput type='password' placeholder='*********' {...field}></TextFieldInput>
                                );
                            }}
                        />
                    </TextFieldRoot>
                    {errors.Password && <Text className='text-red-400'>{errors.Password.message}</Text>}

                    <Button type='submit' mt="4">
                        <EnterIcon height="16" width="16"></EnterIcon>
                        {isPending ? "Cargando..." : "¡Entrar!"}
                    </Button>
                </Flex>
            </form>
        </>
    )
}

export default SigninForm