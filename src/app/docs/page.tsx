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
                    Para poder cargar los datos de la encuesta debes dirigirte a la opci&oacute;n &quot;Carga&quot; en la esquina superior derecha del men&uacute; principal. All&iacute; te encontraras con un bot&oacute;n &quot;Cargar una nueva encuesta&quot;. Te preguntara si deseas cargar y los pasos a seguir. Debes cargar todos los integrantes del grupo familiar en la primera secci&oacute;n para luego seleccionar &quot;siguiente secci&oacute;n&quot; y cargar el resto de preguntas.
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
                    Cada dato de Sector | Manzana | Casa deber ser &Uacute;NICO para cada encuesta. Si el dato ya existe en la base de datos, la encuesta no sera cargada y producira insconsistencias en la base de datos. POR FAVOR revisa que esos datos sean &Uacute;nicos antes de cargar la encuesta.
                </Callout.Text>
            </Callout.Root>
            <div style={{ margin: '1rem' }}></div>
            <Callout.Root>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                    Si des&eacute;as hacer una cons&uacute;lta por favor comun&iacute;cate con el administrador del sistema. 
                    Telefono de computos: 154
                </Callout.Text>
            </Callout.Root>
        </div>
    );
}