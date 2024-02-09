import { Card, Container, Flex, Heading, Link, Text } from '@radix-ui/themes'
import React from 'react'
import SigninForm from '@/components/auth/SigninForm'
import NavLink from 'next/link'

function LoginPage() {
  return (
    <>
        <Container size="1" height="100%" className='p-3 md:p-0' >
            <Flex className='h-screen w-full items-center'>
                <Card className='w-full p-7' >
                    <Heading>Inicio de Sesión | AppTasks</Heading>
                    <SigninForm />
                    <Flex justify="between" my="4">
                        <Text>¿No posees una cuenta? </Text>
                        <Link asChild>
                            <NavLink href="/auth/register" passHref>Crea una.</NavLink>
                        </Link>
                    </Flex>
                </Card>
            </Flex>
        </Container>
    </>
  )
}

export default LoginPage