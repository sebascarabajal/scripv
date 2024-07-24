import prisma from "@/supabase/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";


export async function POST(request: Request) {

    const data = await request.json()
    const { sector, manzana, casa, vivienda } = data
    const codCasa = sector + manzana + casa + vivienda

    const session = await getServerSession(authOptions)

    const currentDate = new Date();
    const fechayhora = currentDate.toLocaleString();

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
        const encuesta = await prisma.encuestas.findUnique({
            where: {
                CodCasa: codCasa
            },
            select: {
                CodCasa: true
            }
        })

        if (encuesta) {

            const status = await prisma.encuestas.findMany({
                where: {
                    CodCasa: codCasa
                },
                select: {
                    status: true
                }
            });


            if (status && status.length > 0) {

                const valorStatus = status[0].status;

                if (valorStatus) {
                    return NextResponse.json({ message: "Not Acceptable" }, { status: 203 });
                }
                else {
                    console.log(status)
                    console.log("estoy aqui")
                    const idCasa = await prisma.encuestas.findUnique({
                        where: {
                            CodCasa: codCasa
                        },
                        select: {
                            id_CodCasa: true
                        }
                    })

                    const idcodcasa = idCasa?.id_CodCasa

                    const respuestasEstruc = await prisma.encuestas.findMany({
                        where: {
                            CodCasa: codCasa,
                            respuestas_estruc: {
                                some: {
                                    id_estruct_preg: 9,
                                    pregunta_estruc: {
                                        id_estruct_preg: 9,
                                    },
                                },
                            },
                        },
                        select: {
                            respuestas_estruc: {
                                where: {
                                    id_estruct_preg: 9,
                                },
                                select: {
                                    respuesta_estruc: true,
                                },
                            },
                        },
                    });

                    const { nro_integrante } = data

                    const respuestas = respuestasEstruc.flatMap(encuesta => encuesta.respuestas_estruc.map(resp => resp.respuesta_estruc));
                    console.log("estoy aqui")
                    if (respuestas.includes(nro_integrante.toString())) {
                        return NextResponse.json({ message: "Not Acceptable" }, { status: 203 });
                    } else {
                        console.log(`El valor ${nro_integrante} no se encuentra en el array respuestasEstruc.`);
                    }



                    const newfamilia = await prisma.$queryRaw`
                    INSERT INTO respuestas_estruc("id_CodCasa", "id_estruct_preg", "respuesta_estruc")
                     VALUES 
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 1), ${data.sector}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 2), ${data.manzana}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 3), ${data.casa}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 4), ${data.vivienda}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 5), ${data.hogar}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 6), ${data.supervisor}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 7), ${data.encuestador}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 8), ${data.responde}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 9), ${data.nro_integrante}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 10), ${data.nombre}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 11), ${data.rel_paren}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 12), ${data.genero}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 13), ${data.edad}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 14), ${data.discapacidad}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 15), ${data.dificultad}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 16), ${data.certificado}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 17), ${data.pension}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 18), ${data.nivel_estudio}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 19), ${data.estudio_completo}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 20), ${data.motivo}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 21), ${data.tipo_establec}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 22), ${data.lugar_establec}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 23), ${data.actividad}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 24), ${data.categoria}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 25), ${data.motivo_categ}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 26), ${data.lugar_trabajo}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 27), ${data.aportes_jub}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 28), ${data.ingreso_ind}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 29), ${data.cobra_jub}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 30), ${data.lote}),
                         (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 31), ${data.asiste})`
                }

            }
            else{
                return NextResponse.json({ message: "Not Acceptable" }, { status: 203 });
            }
        }
        //aqui
        else {
            const newEncuesta = await prisma.encuestas.create({
                data: {
                    CodCasa: codCasa,
                    id_Usuario: parseInt(session.user.id),
                    fecha: fechayhora
                }
            })

            const idCasa = await prisma.encuestas.findUnique({
                where: {
                    CodCasa: codCasa
                },
                select: {
                    id_CodCasa: true
                }
            })

            const idcodcasa = idCasa?.id_CodCasa



            const newfamilia = await prisma.$queryRaw`
                INSERT INTO respuestas_estruc("id_CodCasa", "id_estruct_preg", "respuesta_estruc")
                 VALUES 
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 1), ${data.sector}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 2), ${data.manzana}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 3), ${data.casa}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 4), ${data.vivienda}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 5), ${data.hogar}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 6), ${data.supervisor}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 7), ${data.encuestador}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 8), ${data.responde}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 9), ${data.nro_integrante}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 10), ${data.nombre}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 11), ${data.rel_paren}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 12), ${data.genero}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 13), ${data.edad}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 14), ${data.discapacidad}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 15), ${data.dificultad}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 16), ${data.certificado}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 17), ${data.pension}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 18), ${data.nivel_estudio}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 19), ${data.estudio_completo}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 20), ${data.motivo}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 21), ${data.tipo_establec}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 22), ${data.lugar_establec}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 23), ${data.actividad}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 24), ${data.categoria}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 25), ${data.motivo_categ}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 26), ${data.lugar_trabajo}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 27), ${data.aportes_jub}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 28), ${data.ingreso_ind}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 29), ${data.cobra_jub}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 30), ${data.lote}),
                     (${idcodcasa}, (select id_estruct_preg FROM preguntas_estruc WHERE id_estruct_preg = 31), ${data.asiste})`
        }

    }
    catch (error) {
        return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    return NextResponse.json({ message: "Created" }, { status: 201 });
}