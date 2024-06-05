import prisma from "@/supabase/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import { Console } from "console";

export async function POST(request: Request) {
    const data = await request.json()
    const { sector, manzana, casa, vivienda } = data
    const codCasa = sector + manzana + casa + vivienda

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
    const instalacio_elec = instelec_a + "," + instelec_b + "," + instelec_c + "," + instelec_d + "," + instelec_e
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
        prisma.$transaction(async (prisma) => {
            const newBloque = await prisma.$queryRaw`
                INSERT INTO respuestas_gral("CodCasa", "id_pregunta_gral", "respuesta_gral_valor")
                VALUES 
                (${codCasa}, 1, ${data.sector}),
                (${codCasa}, 2, ${data.manzana}),
                (${codCasa}, 3, ${data.casa}),
                (${codCasa}, 4, ${data.vivienda}),
                (${codCasa}, 5, ${data.hogar}),
                (${codCasa}, 6, ${data.supervisor}),
                (${codCasa}, 7, ${data.encuestador}),
                (${codCasa}, 8, ${data.responde}),
                (${codCasa}, 9, ${data.p20}),
                (${codCasa}, 10, ${data.p21}),
                (${codCasa}, 11, ${data.p22}),
                (${codCasa}, 12, ${data.p23}),
                (${codCasa}, 13, ${data.p24}),
                (${codCasa}, 14, ${data.p25}),
                (${codCasa}, 15, ${data.p251}),
                (${codCasa}, 16, ${data.p26}),
                (${codCasa}, 17, ${data.p261}),
                (${codCasa}, 18, ${data.p262}),
                (${codCasa}, 19, ${data.p27}),
                (${codCasa}, 20, ${data.p28}),
                (${codCasa}, 21, ${data.p281}),
                (${codCasa}, 22, ${data.p29}),
                (${codCasa}, 23, ${data.p291}),
                (${codCasa}, 24, ${data.p301}),
                (${codCasa}, 25, ${data.p302}),
                (${codCasa}, 26, ${data.p311}),
                (${codCasa}, 27, ${data.p312}),
                (${codCasa}, 28, ${data.p313}),
                (${codCasa}, 29, ${data.p314}),
                (${codCasa}, 30, ${data.p32}),
                (${codCasa}, 31, ${data.p321}),
                (${codCasa}, 32, ${data.p322}),
                (${codCasa}, 33, ${data.p323}),
                (${codCasa}, 34, ${data.p324}),
                (${codCasa}, 35, ${data.p325}),
                (${codCasa}, 36, ${data.p331}),
                (${codCasa}, 37, ${data.p332}),
                (${codCasa}, 38, ${data.p333}),
                (${codCasa}, 39, ${data.p334}),
                (${codCasa}, 40, ${data.p341}),
                (${codCasa}, 41, ${data.p342}),
                (${codCasa}, 42, ${data.p35}),
                (${codCasa}, 43, ${data.p36}),
                (${codCasa}, 44, ${cubierta}),
                (${codCasa}, 45, ${cielorraso}),
                (${codCasa}, 46, ${muro_exterior}),
                (${codCasa}, 47, ${muro_medio}),
                (${codCasa}, 48, ${pisoyrevestimiento}),
                (${codCasa}, 49, ${carpinteria}),
                (${codCasa}, 50, ${artefactos}),
                (${codCasa}, 51, ${griferia}),
                (${codCasa}, 52, ${canieria}),
                (${codCasa}, 53, ${instalacio_elec}),
                (${codCasa}, 54, ${instalacion_gas}),
                (${codCasa}, 55, ${tanque}),
                (${codCasa}, 56, ${data.p37}),
                (${codCasa}, 57, ${data.p38}),
                (${codCasa}, 58, ${data.p391}),
                (${codCasa}, 59, ${data.p392}),
                (${codCasa}, 60, ${data.p393}),
                (${codCasa}, 61, ${data.p394}),
                (${codCasa}, 62, ${data.p395}),
                (${codCasa}, 63, ${data.p396}),
                (${codCasa}, 64, ${data.p40}),
                (${codCasa}, 65, ${data.p41}),
                (${codCasa}, 66, ${data.p42}),
                (${codCasa}, 67, ${data.p43}),
                (${codCasa}, 68, ${data.p44}),
                (${codCasa}, 69, ${data.p45}),
                (${codCasa}, 70, ${data.p46}),
                (${codCasa}, 71, ${data.p47}),
                (${codCasa}, 72, ${data.p481}),
                (${codCasa}, 73, ${data.p482}),
                (${codCasa}, 74, ${data.p491}),
                (${codCasa}, 75, ${data.p492}),
                (${codCasa}, 76, ${data.p501}),
                (${codCasa}, 77, ${data.p502}),
                (${codCasa}, 78, ${data.p503}),
                (${codCasa}, 79, ${data.p504}),
                (${codCasa}, 80, ${data.p51}),
                (${codCasa}, 81, ${data.p521}),
                (${codCasa}, 82, ${data.p522}),
                (${codCasa}, 83, ${data.p53}),
                (${codCasa}, 84, ${data.p54}),
                (${codCasa}, 85, ${data.p55}),
                (${codCasa}, 86, ${data.p561}),
                (${codCasa}, 87, ${data.p562}),
                (${codCasa}, 88, ${data.p57}),
                (${codCasa}, 89, ${data.p58}),
                (${codCasa}, 90, ${data.p59}),
                (${codCasa}, 91, ${data.p60}),
                (${codCasa}, 92, ${data.p61}),
                (${codCasa}, 93, ${data.p62}),
                (${codCasa}, 94, ${data.p63}),
                (${codCasa}, 95, ${data.p631}),
                (${codCasa}, 96, ${data.p641}),
                (${codCasa}, 97, ${data.p642}),
                (${codCasa}, 98, ${data.p643}),
                (${codCasa}, 99, ${data.p644}),
                (${codCasa}, 100, ${data.p645}),
                (${codCasa}, 101, ${data.p65}),
                (${codCasa}, 102, ${data.p66}),
                (${codCasa}, 103, ${data.p661}),
                (${codCasa}, 104, ${data.p67}),
                (${codCasa}, 105, ${data.p68}),
                (${codCasa}, 106, ${data.p69}),
                (${codCasa}, 107, ${data.p70}),
                (${codCasa}, 108, ${data.p701}),
                (${codCasa}, 109, ${data.p71}),
                (${codCasa}, 110, ${data.p711}),
                (${codCasa}, 111, ${data.p72}),
                (${codCasa}, 112, ${data.p73}),
                (${codCasa}, 113, ${data.p74}),
                (${codCasa}, 114, ${data.p75})
            `
        })
    }

    catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 })
    }

    return NextResponse.json({ status: 201 })
}