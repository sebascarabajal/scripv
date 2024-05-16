import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json()
    const datos = data.datos

    try {
        await prisma.$transaction(async (prisma) => {
            const newfamilia = await prisma.$queryRaw`
            INSERT INTO respuestas_estruc(id_estruct_preg, respuesta_estruc)
            VALUES 
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 1), ${datos.sector}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 2), ${datos.manzana}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 3), ${datos.casa}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 4), ${datos.vivienda}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 5), ${datos.hogar}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 6), ${datos.supervisor}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 7), ${datos.encuestador}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 8), ${datos.responde}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 9), ${datos.nro_integrante}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 10), ${datos.nombre}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 11), ${datos.rel_paren}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 12), ${datos.genero}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 13), ${datos.edad}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 14), ${datos.discapacidad}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 15), ${datos.dificultad}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 16), ${datos.certificado}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 17), ${datos.pension}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 18), ${datos.nivel_estudio}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 19), ${datos.estudio_completo}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 20), ${datos.motivo}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 21), ${datos.tipo_establec}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 22), ${datos.lugar_establec}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 23), ${datos.actividad}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 24), ${datos.categoria}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 25), ${datos.motivo_categ}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 26), ${datos.lugar_trabajo}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 27), ${datos.aportes_jub}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 28), ${datos.ingreso_ind}),
                ((select id_estruct_preg FROM estruc_fam_preg WHERE id_estruct_preg = 29), ${datos.cobra_jub})`

                const encuesta = await prisma.encuestas.create({
                    data: {
                        id_respuestas_gral: 1,
                        id_respuestas_estruc: 117,
                        id_Usuario: 1,
                        sector: datos.sector,
                        manzana: datos.manzana,
                        casa: datos.casa,
                    }
                })
                console.log(datos.sector + datos.manzana + datos.casa)
        })
    }
    catch (error) {
        console.log(error)
    }

    return NextResponse.json({status: 201})
}