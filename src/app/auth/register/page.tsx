"use client"
import { Card, Container, Flex, Heading, Link, Text } from '@radix-ui/themes'
import React from 'react'
import NavLink from 'next/link'
import SignupForm from '@/components/auth/SignupForm'
import { motion } from 'framer-motion';

function RegisterPage() {
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
                <Flex className='w-full items-center' >
                    <Card className='w-full p-7' >
                        <Heading>Registro | Censo</Heading>
                        <SignupForm />
                        <Flex justify="between" my="4">
                            <Text>Si ya tienes cuenta</Text>
                            <Link asChild>
                                <NavLink href="/auth/login" passHref>Inicia sesión</NavLink>
                            </Link>
                        </Flex>
                    </Card>
                </Flex>
            </Container>
        </motion.div>
    );
}

export default RegisterPage