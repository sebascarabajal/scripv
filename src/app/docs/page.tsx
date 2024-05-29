"use client"
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Callout } from '@radix-ui/themes'
import React from 'react'

export default function Information() {


    return (
        <div className='w-2/4 m-auto'>
            <Callout.Root>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    Para poder cargar los datos de la encuesta debes dirigirte a la opcion "Carga" en la esquina superior derecha del menu principal. Alli te encontraras con dos secciones, una seccion llamada "Carga Bloque de Estructura Familiar" y "Carga resto de bloques". Primero debes cargar la seccion de "Carga Bloque de Estructura Familiar" y luego la seccion de "Carga resto de bloques". Una vez que hayas cargado ambos bloques, podras cargar una nueva encuesta. 
                </Callout.Text>
            </Callout.Root>
            <div style={{ margin: '1rem' }}></div>
            <Callout.Root>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    Es importante que revises los datos antes de cargar la encuesta, ya que una vez que la encuesta es cargada no podra ser modificada.
                </Callout.Text>
            </Callout.Root>
            <div style={{ margin: '1rem' }}></div>
            <Callout.Root>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    Cada dato de Sector | Manzana | Casa deber ser UNICO para cada encuesta. Si el dato ya existe en la base de datos, la encuesta no sera cargada y producira insconsistencias en la base de datos. POR FAVOR revisa que esos datos sean unicos antes de cargar la encuesta.
                </Callout.Text>
            </Callout.Root>
            <div style={{ margin: '1rem' }}></div>
            <Callout.Root>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    Si deseas hacer una consulta por favor comunicate con el administrador del sistema. 
                    Telefono de computos: 154{}
                </Callout.Text>
            </Callout.Root>
        </div>
    );
}
