"use client"
import { Card, Container, Flex, Heading, Link, Text } from '@radix-ui/themes'
import React from 'react'
import SigninForm from '@/components/auth/SigninForm'
import NavLink from 'next/link'
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

function LoginPage() {
    const { data: session } = useSession()
    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: 50 }
    };
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            <Container size="1" height="100%" className='p-3 md:p-0' >
                <Flex className='w-full items-center'>
                    <Card className='w-full p-7' >
                        {!session && (
                            <div>
                                <Heading>Inicio de Sesión | Censo</Heading>
                                <SigninForm />
                                <Flex justify="between" my="4">
                                    <Text>¿No posees una cuenta?</Text>
                                    <Link asChild>
                                        <NavLink href="/auth/register" passHref>Crea una.</NavLink>
                                    </Link>
                                </Flex>
                            </div>
                        )}
                        {session && (
                            <div>
                                <Text>¡Has iniciado sesión!</Text>
                            </div>
                        )}
                    </Card>
                </Flex>
            </Container>
        </motion.div>
    )
}

export default LoginPage