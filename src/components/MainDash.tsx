"use client"
import { PlusIcon } from '@radix-ui/react-icons'
import { Container, Heading, Button, AlertDialog, Flex } from '@radix-ui/themes'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function MainDash() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/dashboard/sheet/newFamilia')
    }

    return (
        <Container className='mt-10'>
            <div className='flex justify-between py-4'>
                <Heading>Carga de encuestas.</Heading>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <AlertDialog.Root>
                    <AlertDialog.Trigger>
                        <Button size={"4"} className='bg-green-400 text-black'>Cargar una nueva encuesta</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                        <AlertDialog.Title color='red'>¡Lee con atenci&oacute;n!</AlertDialog.Title>
                        <AlertDialog.Description size="5">
                            Est&aacute;s por cargar una nueva encuesta. Primero deber&aacute;s cargar cada integrante del grupo familiar individutalmente de la secci&oacute;n &quot;Estructura Familiar&quot;. Luego presiona el bot&oacute;n &quot;Siguiente secci&oacute;n&quot; para continuar con la carga de los demas bloques. Tiene mas informaci&oacute;n al respecto en la secci&oacute;n de &quot;Informaci&oacute;n&quot; en el men&uacute; principal.
                        </AlertDialog.Description>

                        <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                                <Button size={"3"} variant='surface' color="red">
                                    Cancelar
                                </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                                <Button size={"3"} onClick={handleClick} variant="solid" className='bg-green-400 text-black'>
                                    ¡Entendido!
                                </Button>
                            </AlertDialog.Action>
                        </Flex>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </div>
        </Container>
    )
}
