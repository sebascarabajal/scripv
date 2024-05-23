import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: Request) {
    const data = await request.json()
    const datos = data.datos
    const codCasa = datos.sector + datos.manzana + datos.casa + datos.vivienda

    console.log(datos)
    console.log(datos.hogar)

    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({
            message: "Unauthorized"
        },
            {
                status: 401
            }
        )
    }

    try{
        prisma.$transaction(async (prisma) => {
            const newBloque = await prisma.$queryRaw`
                INSERT INTO respuestas_gral("CodCasa", "id_pregunta_gral", "respuesta_gral_valor")
                VALUES 
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 75), ${datos.sector}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 76), ${datos.manzana}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 77), ${datos.casa}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 78), ${datos.vivienda}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 79), ${datos.hogar}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 80), ${datos.supervisor}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 81), ${datos.encuestador}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 82), ${datos.responde}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 1), ${datos.p20}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 2), ${datos.p21}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 3), ${datos.p22}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 4), ${datos.p23}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 5), ${datos.p24}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 6), ${datos.p25}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 7), ${datos.p251}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 8), ${datos.p26}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 9), ${datos.p261}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 10), ${datos.p262}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 11), ${datos.p27}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 12), ${datos.p28}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 13), ${datos.p281}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 14), ${datos.p29}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 15), ${datos.p291}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 16), ${datos.p30}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 17), ${datos.p31}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 18), ${datos.p311}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 19), ${datos.p312}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 20), ${datos.p313}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 21), ${datos.p314}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 22), ${datos.p32}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 23), ${datos.p321}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 24), ${datos.p33}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 25), ${datos.p341}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 26), ${datos.p342}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 27), ${datos.p35}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 28), ${datos.p36}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 29), ${datos.p361}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 30), ${datos.p37}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 31), ${datos.p38}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 32), ${datos.p39}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 33), ${datos.p40}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 34), ${datos.p41}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 35), ${datos.p42}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 36), ${datos.p43}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 37), ${datos.p44}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 38), ${datos.p45}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 39), ${datos.p46}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 40), ${datos.p47}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 41), ${datos.p48}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 42), ${datos.p49}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 43), ${datos.p50}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 44), ${datos.p51}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 45), ${datos.p52}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 46), ${datos.p53}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 47), ${datos.p54}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 48), ${datos.p55}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 49), ${datos.p56}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 50), ${datos.p57}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 51), ${datos.p58}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 52), ${datos.p59}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 53), ${datos.p60}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 54), ${datos.p61}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 55), ${datos.p62}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 56), ${datos.p63}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 56), ${datos.p631}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 57), ${datos.p64}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 58), ${datos.p641}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 59), ${datos.p65}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 60), ${datos.p66}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 61), ${datos.p661}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 62), ${datos.p67}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 63), ${datos.p68}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 64), ${datos.p69}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 65), ${datos.p70}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 66), ${datos.p70}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 67), ${datos.p701}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 68), ${datos.p71}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 69), ${datos.p711}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 70), ${datos.p72}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 71), ${datos.p73}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 72), ${datos.p74}),
                (${codCasa}, (select id_pregunta_gral FROM preguntas_gral WHERE id_pregunta_gral = 73), ${datos.p75})
            `
        })
    }

    catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 })
    }

    return NextResponse.json({ status: 201 })
}