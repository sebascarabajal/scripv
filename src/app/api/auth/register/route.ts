import { NextResponse } from "next/server";
import prisma from "@/supabase/prisma";
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data.Nombre)
    const salt = await bcrypt.genSalt(10)
    data.Password = await bcrypt.hash(data.Password, salt)
    const currentDate = new Date();
    const fechayhora = currentDate.toLocaleString();

    const newUser = await prisma.usuarios.create({
        data: {
            id_censista: parseInt(data.id_censista),
            Email: data.Email,
            Password: data.Password,
            Nombre: data.Nombre,
            Apellido: data.Apellido,
            Tipo_usuario: data.Tipo_usuario,
            Creado: fechayhora
        }
    });

    const { Password, ...user } = newUser

    return NextResponse.json(user, { status: 201 })
}