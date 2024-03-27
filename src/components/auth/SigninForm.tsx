"use client"
import { EnterIcon, EnvelopeClosedIcon, LightningBoltIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text, TextFieldInput, TextFieldRoot, TextFieldSlot } from '@radix-ui/themes'
import React, { useTransition } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

function SigninForm() {

    const { control, setError, handleSubmit, formState: { errors } } = useForm({ values: { email: "", password: "" } });

    const router = useRouter()

    const [isPending, startTransition] = useTransition()

    const onSubmit = handleSubmit(async (data) => {
        startTransition(async () => {
            const res = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password
            });
            if (res?.error) {
                setError("password", { message: "¡Credenciales inválidas!", type: "manual" })
                return;
            }
            if (!res?.ok) {
                console.log(res)
            }
            else {
                const { error } = res
            }

            const notify = () => toast.success("Hello coders it was easy!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            notify();
            router.push("/dashboard");
            router.refresh();
        })
    });

    return (
        <>
            <ToastContainer />
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
                            rules={{ required: { message: "¡Se requiere email!", value: true } }}
                            render={({ field }) => {
                                return (
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
                            rules={{ required: { message: "¡Se requiere contraseña!", value: true } }}
                            render={({ field }) => {
                                return (
                                    <TextFieldInput type='password' placeholder='*********' {...field}></TextFieldInput>
                                );
                            }}
                        />
                    </TextFieldRoot>
                    {errors.password && <Text className='text-red-400'>{errors.password.message}</Text>}

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