"use client"
import React from 'react'
import { useSession } from 'next-auth/react';

export default function Hero() {
    const { data: session } = useSession()
    return (
        <div className=" flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Censo Descubriendo Mi Barrio | IPV 2024</h2>
                    <p className="mt-2 text-center text-xl text-white">¡Bienvenido!</p>
                    <p className="mt-2 text-center text-xl text-red-500">¡Página estrictamente confidencial!</p>
                    <p className="mt-2 text-center text-sm text-gray-300">Desarrolado por DEPTO. CÓMPUTOS</p>
                </div>
                <div>
                    {!session && (
                        <div className="rounded-md bg-red-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">
                                        ¡Para acceder al sistema debes iniciar sesión!
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )}
                    {session && (
                        <div className="rounded-md bg-green-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-green-800">
                                        ¡Has iniciado sesión!
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
