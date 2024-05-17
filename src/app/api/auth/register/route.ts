import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from 'bcrypt'

export async function POST(request: Request){
    const data = await request.json()

    //Encriptando la contraseña
    const salt = await bcrypt.genSalt(10)
    data.Password = await bcrypt.hash(data.Password, salt)

    const newUser = await prisma.usuarios.create({
        data: {
            id_Usuario: parseInt(data.id_Usuario),
            Nombre: data.Nombre,
            Apellido: data.Apellido,
            Email: data.Email,
            Password: data.Password,
            Tipo_usuario: data.Tipo_usuario
        }
    });

    const {Password, ...user} = newUser

    return NextResponse.json(user, {status:201})
}