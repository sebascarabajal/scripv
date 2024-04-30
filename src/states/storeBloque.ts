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
    p20: number,
    p21: number,
    p22: number,
    p23: number,
    p24: number,
    p25: number,
    p251: number,
    p26: number,
    p261: number,
    p262: number,
    p27: number,
    p28: number,
    p281: number,
    p29: number,
    p291: number,
    p30: number,
    p31: number,
    p311: number,
    p312: number,
    p313: number,
    p314: number,
    p32: number,
    p321: number,
    p33: number,
    p341: number,
    p342: number,
    p35: number,
    p36: number,
    p361: number,
    p37: number,
    p38: number,
    p39: number,
    p40: number,
    p41: number,
    p42: number,
    p43: number,
    p44: number,
    p45: number,
    p46: number,
    p47: number,
    p48: number,
    p49: number,
    p50: number,
    p51: number,
    p52: number,
    p53: number,
    p54: number,
    p55: number,
    p56: number,
    p57: number,
    p58: number,
    p59: number,
    p60: number,
    p61: number,
    p62: number,
    p63: number,
    p631: number,
    p64: number,
    p641: number,
    p65: number,
    p66: number,
    p661: number,
    p67: number,
    p68: number,
    p69: number,
    p70: number,
    p701: number,
    p71: number,
    p711: number,
    p72: number,
    p73: number,
    p74: number,
    p75: number,
    setBloque: (data: Partial<State>) => void
}

export const useStoreBloque = create(persist<State>(
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
        p20: 0,
        p21: 0,
        p22: 0,
        p23: 0,
        p24: 0,
        p25: 0,
        p251: 0,
        p26: 0,
        p261: 0,
        p262: 0,
        p27: 0,
        p28: 0,
        p281: 0,
        p29: 0,
        p291: 0,
        p30: 0,
        p31: 0,
        p311: 0,
        p312: 0,
        p313: 0,
        p314: 0,
        p32: 0,
        p321: 0,
        p33: 0,
        p341: 0,
        p342: 0,
        p35: 0,
        p36: 0,
        p361: 0,
        p37: 0,
        p38: 0,
        p39: 0,
        p40: 0,
        p41: 0,
        p42: 0,
        p43: 0,
        p44: 0,
        p45: 0,
        p46: 0,
        p47: 0,
        p48: 0,
        p49: 0,
        p50: 0,
        p51: 0,
        p52: 0,
        p53: 0,
        p54: 0,
        p55: 0,
        p56: 0,
        p57: 0,
        p58: 0,
        p59: 0,
        p60: 0,
        p61: 0,
        p62: 0,
        p63: 0,
        p631: 0,
        p64: 0,
        p641: 0,
        p65: 0,
        p66: 0,
        p661: 0,
        p67: 0,
        p68: 0,
        p69: 0,
        p70: 0,
        p701: 0,
        p71: 0,
        p711: 0,
        p72: 0,
        p73: 0,
        p74: 0,
        p75: 0,
        setBloque: (data) => set(state => ({...state, ...data}))
    }), {
    name: 'storeBloque',
    }
))