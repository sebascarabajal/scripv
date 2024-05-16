import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
    sector: string,
    manzana: string,
    casa: string,
    vivienda: string,
    hogar: string,
    supervisor: string,
    encuestador: string,
    responde: string,
    p20: string,
    p21: string,
    p22: string,
    p23: string,
    p24: string,
    p25: string,
    p251: string,
    p26: string,
    p261: string,
    p262: string,
    p27: string,
    p28: string,
    p281: string,
    p29: string,
    p291: string,
    p30: string,
    p31: string,
    p311: string,
    p312: string,
    p313: string,
    p314: string,
    p32: string,
    p321: string,
    p33: string,
    p341: string,
    p342: string,
    p35: string,
    p36: string,
    p361: string,
    p37: string,
    p38: string,
    p39: string,
    p40: string,
    p41: string,
    p42: string,
    p43: string,
    p44: string,
    p45: string,
    p46: string,
    p47: string,
    p48: string,
    p49: string,
    p50: string,
    p51: string,
    p52: string,
    p53: string,
    p54: string,
    p55: string,
    p56: string,
    p57: string,
    p58: string,
    p59: string,
    p60: string,
    p61: string,
    p62: string,
    p63: string,
    p631: string,
    p64: string,
    p641: string,
    p65: string,
    p66: string,
    p661: string,
    p67: string,
    p68: string,
    p69: string,
    p70: string,
    p701: string,
    p71: string,
    p711: string,
    p72: string,
    p73: string,
    p74: string,
    p75: string,
    setBloque: (data: Partial<State>) => void
}

export const useStoreBloque = create(persist<State>(
    (set) => ({
        sector:"",
        manzana:"",
        casa:"",
        vivienda:"",
        hogar:"",
        supervisor: "",
        encuestador: "",
        responde: '',
        p20:"",
        p21:"",
        p22:"",
        p23:"",
        p24:"",
        p25:"",
        p251:"",
        p26:"",
        p261:"",
        p262:"",
        p27:"",
        p28:"",
        p281:"",
        p29:"",
        p291:"",
        p30:"",
        p31:"",
        p311:"",
        p312:"",
        p313:"",
        p314:"",
        p32:"",
        p321:"",
        p33:"",
        p341:"",
        p342:"",
        p35:"",
        p36:"",
        p361:"",
        p37:"",
        p38:"",
        p39:"",
        p40:"",
        p41:"",
        p42:"",
        p43:"",
        p44:"",
        p45:"",
        p46:"",
        p47:"",
        p48:"",
        p49:"",
        p50:"",
        p51:"",
        p52:"",
        p53:"",
        p54:"",
        p55:"",
        p56:"",
        p57:"",
        p58:"",
        p59:"",
        p60:"",
        p61:"",
        p62:"",
        p63:"",
        p631:"",
        p64:"",
        p641:"",
        p65:"",
        p66:"",
        p661:"",
        p67:"",
        p68:"",
        p69:"",
        p70:"",
        p701:"",
        p71:"",
        p711:"",
        p72:"",
        p73:"",
        p74:"",
        p75:"",
        setBloque: (data) => set(state => ({...state, ...data}))
    }), {
    name: 'storeBloque',
    }
))