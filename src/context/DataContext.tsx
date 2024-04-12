// DatosContext.tsx
import { createContext } from 'react';

interface Datos {
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
}

const DatosContext = createContext<{ datos: Datos | null, setDatos: React.Dispatch<React.SetStateAction<Datos | null>> | null }>({ datos: null, setDatos: null });

export default DatosContext;