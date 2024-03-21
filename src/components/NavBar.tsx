"use client";
import { Container, Flex, Heading, Link } from '@radix-ui/themes'
import NavLink from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react';
import Dropdown from "@/components/Dropdown";

function NavBar() {
    const { data: session } = useSession()
    return (
        <nav className=' py-5'>
            <Container>
                <Flex className='' justify="between" align="center">
                    <NavLink href="/">
                        <Heading>Despacho</Heading>
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
                                            <NavLink className='text-xl' href="/dashboard">Dashboard</NavLink>
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
        </nav>
    )
}

export default NavBar;