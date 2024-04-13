import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
    sector: number,
    manzana: number,
    casa: number,
    vivienda: number,
    hogar: number,
    supervisor: string,
    encuestador: string,
    responde: string,
    visita: number,
    nro_integrante: number,
    nombre: string,
    rel_paren: number,
    genero: string,
    edad: number,
    discapacidad: number,
    dificultad: number,
    certificado: number,
    pension: number,
    nivel_estudio: number,
    estudio_completo: number,
    motivo: number,
    tipo_establec: number,
    lugar_establec: number,
    actividad: number,
    categoria: number,
    motivo_categ: number,
    lugar_trabajo: number,
    aportes_jub: number,
    ingreso_ind: number,
    cobra_jub: number,
    setDatos: (data: Partial<State>) => void
}

export const useStore = create(persist<State>(
    (set) => ({
        sector: 0,
        manzana: 0,
        casa: 0,
        vivienda: 0,
        hogar: 0,
        supervisor: "",
        encuestador: "",
        responde: '',
        visita: 0,
        nro_integrante: 0,
        nombre: '',
        rel_paren: 0,
        genero: '',
        edad: 0,
        discapacidad: 0,
        dificultad: 0,
        certificado: 0,
        pension: 0,
        nivel_estudio: 0,
        estudio_completo: 0,
        motivo: 0,
        tipo_establec: 0,
        lugar_establec: 0,
        actividad: 0,
        categoria: 0,
        motivo_categ: 0,
        lugar_trabajo: 0,
        aportes_jub: 0,
        ingreso_ind: 0,
        cobra_jub: 0,
        setDatos: (data) => set(state => ({...state, ...data}))
    }), {
    name: 'datos'
    }
))