"use client"
import React from 'react'
import { Button, Heading } from '@radix-ui/themes'
import Input from '@/components/Input';
import InputRadix from '@/components/InputRadix';
import { useForm } from 'react-hook-form'
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { useStoreBloque } from '@/states/storeBloque'
import { useRouter } from 'next/navigation';

function New() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    values: {
      sector: "",
      manzana: "",
      casa: "",
      vivienda: "",
      hogar: "",
      supervisor: "",
      encuestador: "",
      responde: "",
      p20: "",
      p21: "",
      p22: "",
      p23: "",
      p24: "",
      p25: "",
      p251: "",
      p26: "",
      p261: "",
      p262: "",
      p27: "",
      p28: "",
      p281: "",
      p29: "",
      p291: "",
      p301: "",
      p302: "",
      p31: "",
      p311: "",
      p312: "",
      p313: "",
      p314: "",
      p32: "",
      p321: "",
      p322: "",
      p323: "",
      p324: "",
      p325: "",
      p331: "",
      p332: "",
      p333: "",
      p334: "",
      p341: "",
      p342: "",
      p35: "",
      p36: "",
      p361: "",
      p362: "",
      p363: "",
      p364: "",
      p365: "",
      p366: "",
      p367: "",
      p368: "",
      p369: "",
      p3610: "",
      p3611: "",
      p3612: "",
      p37: "",
      p38: "",
      p391: "",
      p392: "",
      p393: "",
      p394: "",
      p395: "",
      p396: "",
      p40: "",
      p41: "",
      p42: "",
      p43: "",
      p44: "",
      p45: "",
      p46: "",
      p47: "",
      p481: "",
      p482: "",
      p491: "",
      p492: "",
      p501: "",
      p502: "",
      p503: "",
      p504: "",
      p51: "",
      p521: "",
      p522: "",
      p53: "",
      p54: "",
      p55: "",
      p561: "",
      p562: "",
      p57: "",
      p58: "",
      p59: "",
      p60: "",
      p61: "",
      p62: "",
      p63: "",
      p631: "",
      p641: "",
      p642: "",
      p643: "",
      p644: "",
      p645: "",
      p65: "",
      p66: "",
      p661: "",
      p67: "",
      p68: "",
      p69: "",
      p70: "",
      p701: "",
      p71: "",
      p711: "",
      p72: "",
      p73: "",
      p74: "",
      p75: "",
    }
  });
  const data = useStoreBloque(state => state);
  const setBloque = useStoreBloque(state => state.setBloque);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setBloque(data);
    router.push('/dashboard/sheet/verificarBloque');
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center">
          <Heading>Carga Estructura Familiar</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <InputRadix value={data.sector} name='sector' label='Sector: ' control={control} />
            {errors.sector && <span className="text-red-600">{errors.sector.message}</span>}
          </div>
          <div>
            <Input label='Manzana' value={data.manzana} name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.manzana && <span className="text-red-600">{errors.manzana.message}</span>}
          </div>
          <div>
            <Input label='Casa' value={data.casa} name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.casa && <span className="text-red-600">{errors.casa.message}</span>}
          </div>
          <div>
            <Input label='Vivienda' value={data.vivienda} name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.vivienda && <span className="text-red-600">{errors.vivienda.message}</span>}
          </div>
          <div>
            <Input label='Hogar' value={data.hogar} name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.hogar && <span className="text-red-600">{errors.hogar.message}</span>}
          </div>
          <div>
            <Input label='Supervisor' value={data.supervisor} name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.supervisor && <span className="text-red-600">{errors.supervisor.message}</span>}
          </div>
          <div>
            <Input label='Encuestador' value={data.encuestador} name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.encuestador && <span className="text-red-600">{errors.encuestador.message}</span>}
          </div>
          <div>
            <Input label='Respondente de la vivienda' value={data.responde} name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.responde && <span className="text-red-600">{errors.responde.message}</span>}
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40">
          <div>
            <Input label='20.Habitabilidad' value={data.p20} name='p20' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p20 && <span className="text-red-600">{errors.p20.message}</span>}
          </div>
          <div>
            <Input label='21.Este hogar es...' value={data.p21} name='p21' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p21 && <span className="text-red-600">{errors.p21.message}</span>}
          </div>
          <div>
            <Input label='22.Documentacion' value={data.p22} name='p22' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p22 && <span className="text-red-600">{errors.p22.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Carga servicios, instalaciones e infraestructura </Heading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='23.Provicion agua' value={data.p23} name='p23' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p23 && <span className="text-red-600">{errors.p23.message}</span>}
          </div>
          <div>
            <Input label='24.Agrego circuito...' value={data.p24} name='p24' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p24 && <span className="text-red-600">{errors.p24.message}</span>}
          </div >
          <div>
            <Input label='25.Servicio electrico' value={data.p25} name='p25' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p25 && <span className="text-red-600">{errors.p25.message}</span>}
          </div >
          <div>
            <Input label='25.1Tipo de alteraciones' value={data.p251} name='p251' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p251 && <span className="text-red-600">{errors.p251.message}</span>}
          </div >
          <div>
            <Input label='26.Equipo de calefaccion' value={data.p26} name='p26' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p26 && <span className="text-red-600">{errors.p26.message}</span>}
          </div >
          <div>
            <Input label='26.1.Cambio de equipo de calefaccion' value={data.p261} name='p261' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p261 && <span className="text-red-600">{errors.p261.message}</span>}
          </div >
          <div>
            <Input label='26.2.Tipo de calefaccion de agua' value={data.p262} name='p262' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p262 && <span className="text-red-600">{errors.p262.message}</span>}
          </div >
          <div>
            <Input label='27. Posee internet' value={data.p27} name='p27' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p27 && <span className="text-red-600">{errors.p27.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Vivienda </Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='28.Realizo ampliaciones' value={data.p28} name='p28' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "¡La contraseña debe contener al menos un número!", value: /.*[0-9].*/ } }} type='text'></Input>
            {errors.p28 && <span className="text-red-600">{errors.p28.message}</span>}
          </div>
          <div>
            <Input label='28.1.Tipo de ampliaciones' value={data.p281} name='p281' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p281 && <span className="text-red-600">{errors.p281.message}</span>}
          </div >
          <div>
            <Input label='29.Tuvo obstaculos' value={data.p29} name='p29' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p29 && <span className="text-red-600">{errors.p29.message}</span>}
          </div>
          <div>
            <Input label='29.1.Tipo obstaculos' value={data.p291} name='p291' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p291 && <span className="text-red-600">{errors.p291.message}</span>}
          </div>
          <div>
            <Input label='30.1.Evalue iluminacion' value={data.p301} name='p301' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p301 && <span className="text-red-600">{errors.p301.message}</span>}
          </div >
          <div>
            <Input label='30.2.Evalue ventilacion' value={data.p302} name='p302' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p302 && <span className="text-red-600">{errors.p302.message}</span>}
          </div >
          <div>
            <Input label='31.1.Temp. interior temporada calida' value={data.p311} name='p311' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p311 && <span className="text-red-600">{errors.p311.message}</span>}
          </div >
          <div>
            <Input label='31.2.Habitable sin refrigeracion' value={data.p312} name='p312' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p312 && <span className="text-red-600">{errors.p312.message}</span>}
          </div >
          <div>
            <Input label='31.3.Temp. interior temporada fria' value={data.p313} name='p313' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p313 && <span className="text-red-600">{errors.p313.message}</span>}
          </div >
          <div>
            <Input label='31.4. Habitable sin calefaccion' value={data.p314} name='p314' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p314 && <span className="text-red-600">{errors.p314.message}</span>}
          </div >
          <div>
            <Input label='32.Posee artefatos climatizadores' value={data.p32} name='p32' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p32 && <span className="text-red-600">{errors.p32.message}</span>}
          </div >
          <div>
            <Input label='32.1Posee A.C split' value={data.p321} name='p321' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p321 && <span className="text-red-600">{errors.p321.message}</span>}
          </div >
          <div>
            <Input label='32.2.Posee A.C de ventana' value={data.p322} name='p322' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p322 && <span className="text-red-600">{errors.p322.message}</span>}
          </div >
          <div>
            <Input label='32.3.Posee ventilador' value={data.p323} name='p323' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p321 && <span className="text-red-600">{errors.p321.message}</span>}
          </div >
          <div>
            <Input label='32.4.Posee calefactor' value={data.p324} name='p324' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p324 && <span className="text-red-600">{errors.p324.message}</span>}
          </div >
          <div>
            <Input label='32.5.Posee estufa' value={data.p325} name='p325' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p321 && <span className="text-red-600">{errors.p321.message}</span>}
          </div>
          <div>
            <Input label='33.1.Posee Heladera' value={data.p331} name='p33' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p331 && <span className="text-red-600">{errors.p331.message}</span>}
          </div>
          <div>
            <Input label='33.2.Posee Freezer' value={data.p332} name='p332' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p332 && <span className="text-red-600">{errors.p332.message}</span>}
          </div >
          <div>
            <Input label='33.3.Posee Horno elec.' value={data.p333} name='p333' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p333 && <span className="text-red-600">{errors.p333.message}</span>}
          </div >
          <div>
            <Input label='33.4.Posee lavarropas' value={data.p334} name='p33' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p334 && <span className="text-red-600">{errors.p334.message}</span>}
          </div >
          <div>
            <Input label='34.Monto Luz' value={data.p341} name='p341' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p341 && <span className="text-red-600">{errors.p341.message}</span>}
          </div >
          <div>
            <Input label='34.Monto Gas' value={data.p342} name='p342' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p342 && <span className="text-red-600">{errors.p342.message}</span>}
          </div >
          <div>
            <Input label='35.Frecuencia mantenimiento del hogar' value={data.p35} name='p35' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p35 && <span className="text-red-600">{errors.p35.message}</span>}
          </div >
          <div>
            <Input label='36.Presento patologias constructivas' value={data.p36} name='p36' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p36 && <span className="text-red-600">{errors.p36.message}</span>}
          </div >
          <div>
            <Input label='36.1.Cubierta' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.2.Cielorraso' value={data.p362} name='p362' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="text-red-600">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='36.3.Muro exterior' value={data.p363} name='p363' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="text-red-600">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='36.4.Muro medianero' value={data.p364} name='p364' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="text-red-600">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='36.5.Piso y revestimiento' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.6.Carpinteria' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.7.Artefactos' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.8.Griferias' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.9.Cañerias' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.10.Inst. electricas' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.11.Inst. Gas' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
          <div>
            <Input label='36.12.Tanque de agua' value={data.p361} name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="text-red-600">{errors.p361.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Hábitat y ambiente del barrio</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='37.Actividades que realiza en EP' value={data.p37} name='p37' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p37 && <span className="text-red-600">{errors.p37.message}</span>}
          </div>
          <div>
            <Input label='38.Cuando utilizan EP' value={data.p38} name='p38' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p38 && <span className="text-red-600">{errors.p38.message}</span>}
          </div >
          <div>
            <Input label='39.1.Califique Iluminacion' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='39.2.Califique Distribucion de cestos' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='39.3.Califique Equipamiento recreativo' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='39.4.Califique Equipamiento deportivo' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='39.5.Califique Espacios para permanecer' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='39.6.Disponibilidad de zombras' value={data.p39} name='p39' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p39 && <span className="text-red-600">{errors.p39.message}</span>}
          </div >
          <div>
            <Input label='40.EP son seguros' value={data.p40} name='p40' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p40 && <span className="text-red-600">{errors.p40.message}</span>}
          </div >
          <div>
            <Input label='41.Motivos de inseguridad' value={data.p41} name='p41' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p41 && <span className="text-red-600">{errors.p41.message}</span>}
          </div >
          <div>
            <Input label='42.Horario seguro para circular' value={data.p42} name='p42' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p42 && <span className="text-red-600">{errors.p42.message}</span>}
          </div >
          <div>
            <Input label='43.Con quien usa EP' value={data.p43} name='p43' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p43 && <span className="text-red-600">{errors.p43.message}</span>}
          </div >
          <div>
            <Input label='44.Que distancia se traslada para usar EP' value={data.p44} name='p44' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p44 && <span className="text-red-600">{errors.p44.message}</span>}
          </div >
          <div>
            <Input label='45.Que hace los dias de calor extremo' value={data.p45} name='p45' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p45 && <span className="text-red-600">{errors.p45.message}</span>}
          </div >
          <div>
            <Input label='46.Refugio al calor en EV de Lomas' value={data.p46} name='p46' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p46 && <span className="text-red-600">{errors.p46.message}</span>}
          </div >
          <div>
            <Input label='47.Incorporar a los EV para el calor' value={data.p47} name='p47' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p47 && <span className="text-red-600">{errors.p47.message}</span>}
          </div >
          <div>
            <Input label='48.1.Sabe que es ola de calor' value={data.p48} name='p48' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p48 && <span className="text-red-600">{errors.p48.message}</span>}
          </div >
          <div>
            <Input label='48.2.Influencia humana en las ola de calor' value={data.p48} name='p48' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p48 && <span className="text-red-600">{errors.p48.message}</span>}
          </div >
          <div>
            <Input label='49.1.Califique arbolado' value={data.p49} name='p49' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p49 && <span className="text-red-600">{errors.p49.message}</span>}
          </div >
          <div>
            <Input label='49.2.Calidique estado de la vereda' value={data.p49} name='p49' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p49 && <span className="text-red-600">{errors.p49.message}</span>}
          </div >
          <div>
            <Input label='50.1.Arbolado se mantuvo igual' value={data.p50} name='p50' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p50 && <span className="text-red-600">{errors.p50.message}</span>}
          </div >
          <div>
            <Input label='50.2.Se plantaron mas arboles' value={data.p50} name='p50' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p50 && <span className="text-red-600">{errors.p50.message}</span>}
          </div >
          <div>
            <Input label='50.3.El arbolado se seco' value={data.p50} name='p50' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p50 && <span className="text-red-600">{errors.p50.message}</span>}
          </div >
          <div>
            <Input label='50.4.Se retiro arbolado' value={data.p50} name='p50' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p50 && <span className="text-red-600">{errors.p50.message}</span>}
          </div >
          <div>
            <Input label='51.Valoriza mas en barrio arbolado' value={data.p51} name='p51' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p51 && <span className="text-red-600">{errors.p51.message}</span>}
          </div >
          <div>
            <Input label='52.1.Califque contaminacion visual' value={data.p52} name='p52' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p52 && <span className="text-red-600">{errors.p52.message}</span>}
          </div>
          <div>
            <Input label='52.2.Califique contaminacion sonora' value={data.p52} name='p52' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p52 && <span className="text-red-600">{errors.p52.message}</span>}
          </div >
          <div>
            <Input label='53.Califique limpieza de lomas' value={data.p53} name='p53' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p53 && <span className="text-red-600">{errors.p53.message}</span>}
          </div >
          <div>
            <Input label='54.Causa de faltas de limpieza' value={data.p54} name='p54' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p54 && <span className="text-red-600">{errors.p54.message}</span>}
          </div >
          <div>
            <Input label='55.Utiliza Punto verde' value={data.p55} name='p55' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p55 && <span className="text-red-600">{errors.p55.message}</span>}
          </div >
          <div>
            <Input label='56.1.Conoce el CIAT' value={data.p56} name='p56' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p56 && <span className="text-red-600">{errors.p56.message}</span>}
          </div >
          <div>
            <Input label='56.2.Produccion de materiales reciclados' value={data.p56} name='p56' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p56 && <span className="text-red-600">{errors.p56.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Equipamiento comunitario</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='57.Donde se dirige en emergencia de salud' value={data.p57} name='p57' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p57 && <span className="text-red-600">{errors.p57.message}</span>}
          </div>
          <div>
            <Input label='58.Suficientes espacios de recreacion' value={data.p58} name='p58' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p58 && <span className="text-red-600">{errors.p58.message}</span>}
          </div >
          <div>
            <Input label='59.Que espacios faltan' value={data.p59} name='p59' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p59 && <span className="text-red-600">{errors.p59.message}</span>}
          </div >
          <div>
            <Input label='60.Se abastace en comercios locales' value={data.p60} name='p60' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p60 && <span className="text-red-600">{errors.p60.message}</span>}
          </div >
          <div>
            <Input label='61.La oferta comercial es suficiente' value={data.p61} name='p61' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p61 && <span className="text-red-600">{errors.p61.message}</span>}
          </div >
          <div>
            <Input label='62.Que locales hacen falta' value={data.p62} name='p62' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p62 && <span className="text-red-600">{errors.p62.message}</span>}
          </div >
          <div>
            <Input label='63.Conoce mercados/ferias municipales' value={data.p63} name='p63' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p63 && <span className="text-red-600">{errors.p63.message}</span>}
          </div >
          <div>
            <Input label='63.1.Utiliza mercados locales' value={data.p631} name='p631' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p631 && <span className="text-red-600">{errors.p631.message}</span>}
          </div >
          <div>
            <Input label='64.1.Conoce centros vecinales' value={data.p64} name='p64' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p64 && <span className="text-red-600">{errors.p64.message}</span>}
          </div >
          <div>
            <Input label='64.2.Conoce clubes deportivos' value={data.p641} name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p641 && <span className="text-red-600">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='64.3.Conoce centros comunitarios' value={data.p641} name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p641 && <span className="text-red-600">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='64.4.Conoce capillas comunitarios' value={data.p641} name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p641 && <span className="text-red-600">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='64.5.Utiliza estos centros' value={data.p641} name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p641 && <span className="text-red-600">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='65.Cree que los espacios son necesarios' value={data.p65} name='p65' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p65 && <span className="text-red-600">{errors.p65.message}</span>}
          </div >
          <div>
            <Input label='66.Existen espacios que identifiquen al barrio' value={data.p66} name='p66' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p66 && <span className="text-red-600">{errors.p66.message}</span>}
          </div >
          <div>
            <Input label='66.1.Cuales' value={data.p661} name='p661' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
            {errors.p661 && <span className="text-red-600">{errors.p661.message}</span>}
          </div >
        </div >

        <div className="flex justify-center my-10">
          <Heading>Sitio, conectividad y traslado</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
          <div>
            <Input label='67.Estado del acceso al barrio' value={data.p67} name='p67' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p67 && <span className="text-red-600">{errors.p67.message}</span>}
          </div>
          <div>
            <Input label='68.Medio de transporte que utiliza' value={data.p68} name='p68' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p68 && <span className="text-red-600">{errors.p68.message}</span>}
          </div >
          <div>
            <Input label='69.Fin del uso del transporte publico' value={data.p69} name='p69' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p69 && <span className="text-red-600">{errors.p69.message}</span>}
          </div >
          <div>
            <Input label='70.Transporte publico es eficiente' value={data.p70} name='p71' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p70 && <span className="text-red-600">{errors.p70.message}</span>}
          </div >
          <div>
            <Input label='70.1.Desventajas del servicio de transporte' value={data.p701} name='p701' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p701 && <span className="text-red-600">{errors.p701.message}</span>}
          </div >
          <div>
            <Input label='71.Conoce/usa Ecobus' value={data.p71} name='p71' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p71 && <span className="text-red-600">{errors.p71.message}</span>}
          </div >
          <div>
            <Input label='71.1.Califique Ecobus' value={data.p711} name='p711' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p711 && <span className="text-red-600">{errors.p711.message}</span>}
          </div >
          <div>
            <Input label='72.Frecuencia del uso del vehiculo particular' value={data.p72} name='p72' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p72 && <span className="text-red-600">{errors.p72.message}</span>}
          </div >
          <div>
            <Input label='73.Fin del uso del vehi. particular' value={data.p73} name='p73' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p73 && <span className="text-red-600">{errors.p73.message}</span>}
          </div >
          <div>
            <Input label='74.Como se traslada en el barrio' value={data.p74} name='p74' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p74 && <span className="text-red-600">{errors.p74.message}</span>}
          </div >
          <div>
            <Input label='75.Conoce a sus vecinos' value={data.p75} name='p75' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[0-9]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p75 && <span className="text-red-600">{errors.p75.message}</span>}
          </div >
        </div >

        <div className="flex justify-center mb-5">
          <Button type='submit'><EyeOpenIcon></EyeOpenIcon>Vista previa</Button>
        </div>
      </form >
    </>
  )
}

export default New