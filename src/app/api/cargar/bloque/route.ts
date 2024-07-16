import prisma from "@/supabase/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export async function POST(request: Request) {
    const data = await request.json()

    const p20 = data.p20
    const arrayp20 = p20.split('')
    const listop20 = arrayp20.join(',')

    const p251 = data.p251
    const arrayp251 = p251.split('')
    const listop251 = arrayp251.join(',')

    const p37 = data.p37
    const arrayp37 = p37.split('')
    const listop37 = arrayp37.join(',')

    const p41 = data.p41;
    const arrayp41 = p41.split('');
    const listop41 = arrayp41.join(',');

    const p42 = data.p42;
    const arrayp42 = p42.split('');
    const listop42 = arrayp42.join(',');

    const p45 = data.p45;
    const arrayp45 = p45.split('');
    const listop45 = arrayp45.join(',');

    const p47 = data.p47;
    const arrayp47 = p47.split('');
    const listop47 = arrayp47.join(',');

    const p54 = data.p54;
    const arrayp54 = p54.split('');
    const listop54 = arrayp54.join(',');

    const p57 = data.p57;
    const arrayp57 = p57.split('');
    const listop57 = arrayp57.join(',');

    const p59 = data.p59;
    const arrayp59 = p59.split('');
    const listop59 = arrayp59.join(',');

    const p62 = data.p62;
    const arrayp62 = p62.split('');
    const listop62 = arrayp62.join(',');

    const p68 = data.p68;
    const arrayp68 = p68.split('');
    const listop68 = arrayp68.join(',');

    const p69 = data.p69
    const arrayp69 = p69.split('')
    const listop69 = arrayp69.join(',')

    const p701 = data.p701;
    const arrayp701 = p701.split('');
    const listop701 = arrayp701.join(',');

    const p73 = data.p73;
    const arrayp73 = p73.split('');
    const listop73 = arrayp73.join(',');

    const p74 = data.p74;
    const arrayp74 = p74.split('');
    const listop74 = arrayp74.join(',');


    const { sector, manzana, casa, vivienda } = data
    const codCasa = sector + manzana + casa + vivienda

    const { p281o1, p281o2, p281o3, p281o4, p281o5, p281o6, p281o7, p281o8, p281o9, p281o10, p281o11, p281o12, p281o13 } = data
    const ampliaciones = p281o1 + "," + p281o2 + "," + p281o3 + "," + p281o4 + "," + p281o5 + "," + p281o6 + "," + p281o7 + "," + p281o8 + "," + p281o9 + "," + p281o10 + "," + p281o11 + "," + p281o12 + "," + p281o13

    const { cubierta_a, cubierta_b, cubierta_c, cubierta_d, cubierta_e } = data
    const { cielorraso_a, cielorraso_b, cielorraso_c, cielorraso_d, cielorraso_e } = data
    const { muroex_a, muroex_b, muroex_c, muroex_d, muroex_e } = data
    const { muromed_a, muromed_b, muromed_c, muromed_d, muromed_e } = data
    const { pisoyres_a, pisoyres_b, pisoyres_c, pisoyres_d, pisoyres_e } = data
    const { carp_a, carp_b, carp_c, carp_d, carp_e } = data
    const { artefac_a, artefac_b, artefac_c, artefac_d, artefac_e } = data
    const { grife_a, grife_b, grife_c, grife_d, grife_e } = data
    const { canieria_a, canieria_b, canieria_c, canieria_d, canieria_e } = data
    const { instelec_a, instelec_b, instelec_c, instelec_d, instelec_e } = data
    const { instgas_a, instgas_b, instgas_c, instgas_d, instgas_e } = data
    const { tanque_a, tanque_b, tanque_c, tanque_d, tanque_e } = data


    const cubierta = cubierta_a + "," + cubierta_b + "," + cubierta_c + "," + cubierta_d + "," + cubierta_e
    const cielorraso = cielorraso_a + "," + cielorraso_b + "," + cielorraso_c + "," + cielorraso_d + "," + cielorraso_e
    const muro_exterior = muroex_a + "," + muroex_b + "," + muroex_c + "," + muroex_d + "," + muroex_e
    const muro_medio = muromed_a + "," + muromed_b + "," + muromed_c + "," + muromed_d + "," + muromed_e
    const pisoyrevestimiento = pisoyres_a + "," + pisoyres_b + "," + pisoyres_c + "," + pisoyres_d + "," + pisoyres_e
    const carpinteria = carp_a + "," + carp_b + "," + carp_c + "," + carp_d + "," + carp_e
    const artefactos = artefac_a + "," + artefac_b + "," + artefac_c + "," + artefac_d + "," + artefac_e
    const griferia = grife_a + "," + grife_b + "," + grife_c + "," + grife_d + "," + grife_e
    const canieria = canieria_a + "," + canieria_b + "," + canieria_c + "," + canieria_d + "," + canieria_e
    const instalacion_elec = instelec_a + "," + instelec_b + "," + instelec_c + "," + instelec_d + "," + instelec_e
    const instalacion_gas = instgas_a + "," + instgas_b + "," + instgas_c + "," + instgas_d + "," + instgas_e
    const tanque = tanque_a + "," + tanque_b + "," + tanque_c + "," + tanque_d + "," + tanque_e


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
        const encuesta = await prisma.encuestas.findUnique({
            where: {
                CodCasa: codCasa
            },
            select: {
                CodCasa: true
            }
        })

        if (encuesta) {
            const idCasa = await prisma.encuestas.findUnique({
                where: {
                    CodCasa: codCasa
                },
                select: {
                    id_CodCasa: true
                }
            })

            const idcodcasa = idCasa?.id_CodCasa


            const newBloque = await prisma.$queryRaw`
                INSERT INTO respuestas_gral("id_CodCasa", "id_pregunta_gral", "respuesta_gral_valor")
                VALUES 
                (${idcodcasa}, 1, ${data.sector}),
                (${idcodcasa}, 2, ${data.manzana}),
                (${idcodcasa}, 3, ${data.casa}),
                (${idcodcasa}, 4, ${data.vivienda}),
                (${idcodcasa}, 5, ${data.hogar}),
                (${idcodcasa}, 6, ${data.supervisor}),
                (${idcodcasa}, 7, ${data.encuestador}),
                (${idcodcasa}, 8, ${data.responde}),
                (${idcodcasa}, 9, ${listop20}),
                (${idcodcasa}, 10, ${data.p21}),
                (${idcodcasa}, 11, ${data.p22}),
                (${idcodcasa}, 12, ${data.p23}),
                (${idcodcasa}, 13, ${data.p24}),
                (${idcodcasa}, 14, ${data.p25}),
                (${idcodcasa}, 15, ${listop251}),
                (${idcodcasa}, 16, ${data.p26}),
                (${idcodcasa}, 17, ${data.p261}),
                (${idcodcasa}, 18, ${data.p262}),
                (${idcodcasa}, 19, ${data.p27}),
                (${idcodcasa}, 20, ${data.p28}),
                (${idcodcasa}, 21, ${ampliaciones}),
                (${idcodcasa}, 22, ${data.p29}),
                (${idcodcasa}, 23, ${data.p291}),
                (${idcodcasa}, 24, ${data.p301}),
                (${idcodcasa}, 25, ${data.p302}),
                (${idcodcasa}, 26, ${data.p311}),
                (${idcodcasa}, 27, ${data.p312}),
                (${idcodcasa}, 28, ${data.p313}),
                (${idcodcasa}, 29, ${data.p314}),
                (${idcodcasa}, 30, ${data.p32}),
                (${idcodcasa}, 31, ${data.p321}),
                (${idcodcasa}, 32, ${data.p322}),
                (${idcodcasa}, 33, ${data.p323}),
                (${idcodcasa}, 34, ${data.p324}),
                (${idcodcasa}, 35, ${data.p325}),
                (${idcodcasa}, 36, ${data.p331}),
                (${idcodcasa}, 37, ${data.p332}),
                (${idcodcasa}, 38, ${data.p333}),
                (${idcodcasa}, 39, ${data.p334}),
                (${idcodcasa}, 40, ${data.p341}),
                (${idcodcasa}, 41, ${data.p342}),
                (${idcodcasa}, 42, ${data.p35}),
                (${idcodcasa}, 43, ${data.p36}),
                (${idcodcasa}, 44, ${cubierta}),
                (${idcodcasa}, 45, ${cielorraso}),
                (${idcodcasa}, 46, ${muro_exterior}),
                (${idcodcasa}, 47, ${muro_medio}),
                (${idcodcasa}, 48, ${pisoyrevestimiento}),
                (${idcodcasa}, 49, ${carpinteria}),
                (${idcodcasa}, 50, ${artefactos}),
                (${idcodcasa}, 51, ${griferia}),
                (${idcodcasa}, 52, ${canieria}),
                (${idcodcasa}, 53, ${instalacion_elec}),
                (${idcodcasa}, 54, ${instalacion_gas}),
                (${idcodcasa}, 55, ${tanque}),
                (${idcodcasa}, 56, ${listop37}),
                (${idcodcasa}, 57, ${data.p38}),
                (${idcodcasa}, 58, ${data.p391}),
                (${idcodcasa}, 59, ${data.p392}),
                (${idcodcasa}, 60, ${data.p393}),
                (${idcodcasa}, 61, ${data.p394}),
                (${idcodcasa}, 62, ${data.p395}),
                (${idcodcasa}, 63, ${data.p396}),
                (${idcodcasa}, 64, ${data.p40}),
                (${idcodcasa}, 65, ${listop41}),
                (${idcodcasa}, 66, ${listop42}),
                (${idcodcasa}, 67, ${data.p43}),
                (${idcodcasa}, 68, ${data.p44}),
                (${idcodcasa}, 69, ${listop45}),
                (${idcodcasa}, 70, ${data.p46}),
                (${idcodcasa}, 71, ${listop47}),
                (${idcodcasa}, 72, ${data.p481}),
                (${idcodcasa}, 73, ${data.p482}),
                (${idcodcasa}, 74, ${data.p491}),
                (${idcodcasa}, 75, ${data.p492}),
                (${idcodcasa}, 76, ${data.p501}),
                (${idcodcasa}, 77, ${data.p502}),
                (${idcodcasa}, 78, ${data.p503}),
                (${idcodcasa}, 79, ${data.p504}),
                (${idcodcasa}, 80, ${data.p51}),
                (${idcodcasa}, 81, ${data.p521}),
                (${idcodcasa}, 82, ${data.p522}),
                (${idcodcasa}, 83, ${data.p53}),
                (${idcodcasa}, 84, ${listop54}),
                (${idcodcasa}, 85, ${data.p55}),
                (${idcodcasa}, 86, ${data.p561}),
                (${idcodcasa}, 87, ${data.p562}),
                (${idcodcasa}, 88, ${listop57}),
                (${idcodcasa}, 89, ${data.p58}),
                (${idcodcasa}, 90, ${listop59}),
                (${idcodcasa}, 91, ${data.p60}),
                (${idcodcasa}, 92, ${data.p61}),
                (${idcodcasa}, 93, ${listop62}),
                (${idcodcasa}, 94, ${data.p63}),
                (${idcodcasa}, 95, ${data.p631}),
                (${idcodcasa}, 96, ${data.p641}),
                (${idcodcasa}, 97, ${data.p642}),
                (${idcodcasa}, 98, ${data.p643}),
                (${idcodcasa}, 99, ${data.p644}),
                (${idcodcasa}, 100, ${data.p645}),
                (${idcodcasa}, 101, ${data.p65}),
                (${idcodcasa}, 102, ${data.p66}),
                (${idcodcasa}, 103, ${data.p661}),
                (${idcodcasa}, 104, ${data.p67}),
                (${idcodcasa}, 105, ${listop68}),
                (${idcodcasa}, 106, ${listop69}),
                (${idcodcasa}, 107, ${data.p70}),
                (${idcodcasa}, 108, ${listop701}),
                (${idcodcasa}, 109, ${data.p71}),
                (${idcodcasa}, 110, ${data.p711}),
                (${idcodcasa}, 111, ${data.p72}),
                (${idcodcasa}, 112, ${listop73}),
                (${idcodcasa}, 113, ${listop74}),
                (${idcodcasa}, 114, ${data.p75}),
                (${idcodcasa}, 115, ${data.observaciones}),
                (${idcodcasa}, 116, ${data.lote})
            `
        }
        else {
            return NextResponse.json({ message: "Not Acceptable" }, { status: 203 });
        }
    }
    catch (error) {
        return NextResponse.json({ message: "Not Acceptable" }, { status: 400 });
    }

    return NextResponse.json({ message: "Created" }, { status: 201 });
}