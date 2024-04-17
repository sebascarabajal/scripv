"use client"
import { PlusIcon } from '@radix-ui/react-icons'
import { Container, Heading, Button } from '@radix-ui/themes'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

function Dashboard() {
  const router = useRouter()
  return (
    <Container className='mt-10'>
      <div className='flex justify-between py-4'>
        <Heading>Carga de cuestionarios</Heading>
      </div>
      <div className='flex justify-between py-4'>
        <Heading>1° Carga Bloque de Estructura Familiar.</Heading>
        <Button onClick={() => router.push("/dashboard/sheet/newFamilia")}><PlusIcon height="16" width="16"></PlusIcon>Bloque</Button>
      </div>
      <div className='flex justify-between py-4'>
        <Heading>2° Carga resto de bloques</Heading>
        <Button onClick={() => router.push("/dashboard/sheet/new")}><PlusIcon height="16" width="16"></PlusIcon>Bloque</Button>
      </div>
      <Toaster />
    </Container>
  )
}

export default Dashboard