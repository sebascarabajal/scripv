import { AvatarIcon, CaretDownIcon, InfoCircledIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { Button, DropdownMenu } from '@radix-ui/themes'
import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation'


function Dropdown() {
    const { data: session } = useSession()
    const router = useRouter()
    const CerrarSesion = () => {
        toast.success('¡Nos vemos pronto!', {
            description: 'Saliendo del sistema...',
            position: 'top-center',
            
        });
        setTimeout(() => {
            signOut({
                callbackUrl: "/auth/login"
            })
        }, 2000);
    }

    const redirect = () => {
        router.push('/docs')
    }


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant="soft">
                    <AvatarIcon></AvatarIcon>
                    {session?.user?.name}
                    <CaretDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => redirect()}>Información</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item className='text-xl' color="red" onClick={() => CerrarSesion()}>Salir</DropdownMenu.Item>
            </DropdownMenu.Content>
            <Toaster richColors />
        </DropdownMenu.Root>
    )
}

export default Dropdown