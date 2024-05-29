"use client";
import { Container, Flex, Heading, Link } from '@radix-ui/themes'
import NavLink from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react';
import Dropdown from "@/components/Dropdown";
import { motion } from 'framer-motion';

function NavBar() {
    const { data: session } = useSession()
    const navVariants = {
        hidden: { y: -50 },
        visible: { y: 0, transition: { duration: 0.5 } },
    };
    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className='py-5 mb-10'
        >
            <Container>
                <Flex className='' justify="between" align="center">
                    <NavLink href="/">
                        <Heading className='text-white'>Censo IPV</Heading>
                    </NavLink>
                    <ul className='flex gap-x-4 items-center'>
                        {
                            !session && (
                                <>
                                    <li>
                                        <Link asChild>
                                            <NavLink className='text-xl' href="/auth/login">Entrar</NavLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link asChild>
                                            <NavLink className='text-xl' href="/auth/register">Crear usuario</NavLink>
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            session && (
                                <>
                                    <li>
                                        <Link asChild>
                                            <NavLink className='text-xl'  href="/dashboard">Carga</NavLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Dropdown></Dropdown>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </Flex>
            </Container>
        </motion.nav>
    )
}

export default NavBar;