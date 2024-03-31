import React from 'react'
import { Button, Container, Flex, Text, TextFieldInput, TextFieldRoot, TextFieldSlot, Card, Heading} from '@radix-ui/themes'
import { HomeIcon } from '@radix-ui/react-icons'

function NewSheet() {
  return (
    <>
        <Container size="1" height="100%" className='p-3 md:p-0'>
            <Flex className='h-screen w-full items-center'>
                <Card className='w-full p-3'>
                    <Heading>Nuevo Cuestionario</Heading>
                </Card>
            </Flex>
        </Container>
    </>
  )
}

export default NewSheet