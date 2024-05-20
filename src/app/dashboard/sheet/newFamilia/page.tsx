"use client";
import { Button, Heading } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input';
import InputRadix from '@/components/InputRadix';
import { useStore } from '@/states/store';
import { useRouter } from 'next/navigation';
import { EyeOpenIcon } from '@radix-ui/react-icons';

function NewSheet() {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const datos = useStore(state => state);
  const setDatos = useStore(state => state.setDatos);
  const router = useRouter();
  
  const onSubmit = handleSubmit(async (data) => {
    setDatos(data);
    console.log(data);
    router.push('/dashboard/sheet/verificarFamilia');
  });
  
  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-center">
        <Heading>Carga Estructura Familiar</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
            <InputRadix value={datos.sector} name='sector' label='das' control={control} />
        </div>
        <div>
          <Input label='Manzana' value={datos.manzana} name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Casa' value={datos.casa} name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Vivienda' value={datos.vivienda} name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Hogar' value={datos.hogar} name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Supervisor' value={datos.supervisor} name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Encuestador' value={datos.encuestador} name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='Respondente de la vivienda' value={datos.responde} name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
      </div>

      <div className="flex justify-center">
        <Heading>Estructura Familiar</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-40 my-5">
        <div>
          <Input label='1' value={datos.nro_integrante} name='nro_integrante' control={control} placeholder='Número' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='2' value={datos.nombre} name='nombre' control={control} placeholder='Nombre' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='3' value={datos.rel_paren} name='rel_paren' control={control} placeholder='Rel. Parentesco' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='4' value={datos.genero} name='genero' control={control} placeholder='Género' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='5' value={datos.edad} name='edad' control={control} placeholder='Edad' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='6' value={datos.discapacidad} name='discapacidad' control={control} placeholder='Discapacidad' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='7' value={datos.dificultad} name='dificultad' control={control} placeholder='Dificultad' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='8' value={datos.certificado} name='certificado' control={control} placeholder='Certificado Disc.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='9' value={datos.pension} name='pension' control={control} placeholder='Pensión por disc.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='10' value={datos.nivel_estudio} name='nivel_estudio' control={control} placeholder='Nivel de estudio' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='11' value={datos.estudio_completo} name='estudio_completo' control={control} placeholder='¿Completo nivel?' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='12' value={datos.motivo} name='motivo' control={control} placeholder='Motivo si no finalizó' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='13' value={datos.tipo_establec} name='tipo_establec.' control={control} placeholder='Tipo de establec. educ.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='14' value={datos.lugar_establec} name='lugar_establec' control={control} placeholder='Lugar del establecimiento' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='15' value={datos.actividad} name='actividad' control={control} placeholder='Condic. de activ.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='16' value={datos.categoria} name='categoria' control={control} placeholder='Categoría de trabajo' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='17' value={datos.motivo_categ} name='motivo_categ' control={control} placeholder='Motivo' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='18' value={datos.lugar_trabajo} name='lugar_trabajo' control={control} placeholder='Lugar de Trabajo' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='19' value={datos.aportes_jub} name='aportes_jub' control={control} placeholder='Aportes jubil.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='20' value={datos.ingreso_ind} name='ingreso_ind' control={control} placeholder='Ingreso individual' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
        <div>
          <Input label='21' value={datos.cobra_jub} name='cobra_jub' control={control} placeholder='Cobra jub. o pens.' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='number'></Input>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Button type='submit'><EyeOpenIcon></EyeOpenIcon>Vista previa</Button>
      </div>

    </form>
  )
}

export default NewSheet