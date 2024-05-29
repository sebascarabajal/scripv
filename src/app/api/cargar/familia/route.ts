import prisma from "@/supabase/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: Request) {
    
    const data = await request.json()
    const { sector, manzana, casa, vivienda } = data
    const codCasa = sector + manzana + casa + vivienda
    console.log(codCasa)
    console.log(data.sector)
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

    try {
        prisma.$transaction(async (prisma) => {
            const newEncuesta = await prisma.encuestas.create({
                data: {
                    CodCasa: codCasa,
                    id_Usuario: parseInt(session.user.id),
                }
            })

            const newfamilia = await prisma.$queryRaw`
            INSERT INTO respuestas_estruc("CodCasa", "id_estruct_preg", "respuesta_estruc")
             VALUES 
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 1), ${data.sector}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 2), ${data.manzana}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 3), ${data.casa}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 4), ${data.vivienda}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 5), ${data.hogar}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 6), ${data.supervisor}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 7), ${data.encuestador}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 8), ${data.responde}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 9), ${data.nro_integrante}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 10), ${data.nombre}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 11), ${data.rel_paren}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 12), ${data.genero}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 13), ${data.edad}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 14), ${data.discapacidad}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 15), ${data.dificultad}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 16), ${data.certificado}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 17), ${data.pension}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 18), ${data.nivel_estudio}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 19), ${data.estudio_completo}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 20), ${data.motivo}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 21), ${data.tipo_establec}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 22), ${data.lugar_establec}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 23), ${data.actividad}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 24), ${data.categoria}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 25), ${data.motivo_categ}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 26), ${data.lugar_trabajo}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 27), ${data.aportes_jub}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 28), ${data.ingreso_ind}),
                 (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 29), ${data.cobra_jub})`
        })
    }
    catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: 201 })
}