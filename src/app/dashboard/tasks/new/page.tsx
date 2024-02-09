"use client"
import { Button, Container, Flex, TextArea, TextFieldInput, Card, Heading } from '@radix-ui/themes'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

function TaskNew() {
    const { control, handleSubmit } = useForm({
        values: {
            title: "", 
            description: "",
        }
    });

    const onSubmit = handleSubmit(async (data) =>{
        const res = await axios.post("/api/tasks", data)
    })

    return (
        <div>
            <Container size="1" height="100%" className='p-3 md:p-0'>
                <Flex className='h-screen w-full items-center'>
                    <Card className='w-full p-7'>
                        <form onSubmit={onSubmit} className='flex flex-col gap-y-2'>
                            <Heading>Crear tarea</Heading>
                            <label className='text-lg font-semibold'>Titulo de la tarea</label>
                            <Controller
                                name='title'
                                control={control}
                                render={({field}) => {
                                    return (
                                        <TextFieldInput size="3" placeholder="Tarea super importante" {...field} />
                                    )
                                }}
                            />
                            <label className='text-lg font-semibold'>Descripción</label>
                            <Controller
                                name='description'
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <TextArea size="3" placeholder="¡Descripción cool de mi tarea!" {...field} />
                                    )
                                }}
                            />
                            <Button type='submit'>¡Guardar!</Button>
                        </form>
                    </Card>
                </Flex>
            </Container>
        </div>
    )
}

export default TaskNew