import { CaretDownIcon } from '@radix-ui/react-icons'
import { Button, DropdownMenu } from '@radix-ui/themes'
import React from 'react'
import { useSession, signOut } from 'next-auth/react';


function Dropdown() {
    const { data: session } = useSession()
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant="soft">
                    {session?.user?.name}
                    <CaretDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item>Mi perfil</DropdownMenu.Item>
                <DropdownMenu.Item>Opciones</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red" onClick={() => signOut()}>Salir</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default Dropdown