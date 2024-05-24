import prisma from "@/supabase/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: Request) {
    const data = await request.json()
    const datos = data.datos
    const codCasa = datos.sector + datos.manzana + datos.casa + datos.vivienda
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
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 1), ${datos.sector}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 2), ${datos.manzana}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 3), ${datos.casa}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 4), ${datos.vivienda}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 5), ${datos.hogar}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 6), ${datos.supervisor}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 7), ${datos.encuestador}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 8), ${datos.responde}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 9), ${datos.nro_integrante}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 10), ${datos.nombre}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 11), ${datos.rel_paren}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 12), ${datos.genero}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 13), ${datos.edad}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 14), ${datos.discapacidad}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 15), ${datos.dificultad}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 16), ${datos.certificado}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 17), ${datos.pension}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 18), ${datos.nivel_estudio}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 19), ${datos.estudio_completo}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 20), ${datos.motivo}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 21), ${datos.tipo_establec}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 22), ${datos.lugar_establec}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 23), ${datos.actividad}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 24), ${datos.categoria}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 25), ${datos.motivo_categ}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 26), ${datos.lugar_trabajo}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 27), ${datos.aportes_jub}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 28), ${datos.ingreso_ind}),
                (${codCasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 29), ${datos.cobra_jub})`

        })
    }
    catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: 201 })
}