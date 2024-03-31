"use client"
import { PlusIcon } from '@radix-ui/react-icons'
import { Container, Heading, Button } from '@radix-ui/themes'
import React from 'react'
import { useRouter } from 'next/navigation'

function Dashboard() {
  const router = useRouter()
  return (
    <Container className='mt-10'>
      <div className='flex justify-between'>
        <Heading>Carga de cuestionarios</Heading>
        <Button onClick={() => router.push("/dashboard/sheet/new")}><PlusIcon height="16" width="16"></PlusIcon>Encuesta</Button>

      </div>
    </Container>
  )
}

export default Dashboard