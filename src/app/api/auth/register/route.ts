import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from 'bcrypt'

export async function POST(request: Request){
    const data = await request.json()

    //Encriptando la contraseña
    const salt = await bcrypt.genSalt(10)
    data.Password = await bcrypt.hash(data.Password, salt)

    const newUser = await prisma.usuarios.create({data});

    const {Password, ...user} = newUser

    return NextResponse.json(user, {status:201})
}