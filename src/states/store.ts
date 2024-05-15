import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
    // sector: string,
    // manzana: string,
    // casa: string,
    // vivienda: string,
    // hogar: string,
    // supervisor: string,
    // encuestador: string,
    // responde: string,
    // visita: string,
    nro_integrante: string,
    rel_paren: string,
    genero: string,
    edad: string,
    discapacidad: string,
    dificultad: string,
    certificado: string,
    pension: string,
    nivel_estudio: string,
    estudio_completo: string,
    motivo: string,
    tipo_establec: string,
    lugar_establec: string,
    actividad: string,
    categoria: string,
    motivo_categ: string,
    lugar_trabajo: string,
    aportes_jub: string,
    ingreso_ind: string,
    cobra_jub: string,
    setDatos: (data: Partial<State>) => void
}

export const useStore = create(persist<State>(
    (set) => ({
        // sector: "",
        // manzana: "",
        // casa: "",
        // vivienda: "",
        // hogar: "",
        // supervisor: "",
        // encuestador: "",
        // responde: '',
        // visita: "",
        nro_integrante: "",
        rel_paren: "",
        genero: "",
        edad: "",
        discapacidad: "",
        dificultad: "",
        certificado: "",
        pension: "",
        nivel_estudio: "",
        estudio_completo: "",
        motivo: "",
        tipo_establec: "",
        lugar_establec: "",
        actividad: "",
        categoria: "",
        motivo_categ: "",
        lugar_trabajo: "",
        aportes_jub: "",
        ingreso_ind: "",
        cobra_jub: "",
        setDatos: (data) => set(state => ({...state, ...data}))
    }), {
    name: 'datosFamilia'
    }
))