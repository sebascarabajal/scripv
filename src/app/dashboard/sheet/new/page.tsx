"use client"
import React from 'react'
import { AlertDialog, Button, Flex, Heading } from '@radi_i/themes'
import Input from '@/components/Input';
import InputRadix from '@/components/InputRadix';
import { useForm } from 'reac_oo_orm'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { DoubleArrowUpIcon } from '@radi_i/reac_cons';

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
      cubierta_a: "",
      cubiert_b: "",
      cubierta_c: "",
      cubierta_d: "",
      cubierta_e: "",
      cielorraso_a: "",
      cielorraso_b: "",
      cielorraso_c: "",
      cielorraso_d: "",
      cielorraso_e: "",
      muroex_a: "",
      muroex_b: "",
      muroex_c: "",
      muroex_d: "",
      muroex_e: "",
      muromed_a: "",
      muromed_b: "",
      muromed_c: "",
      muromed_d: "",
      muromed_e: "",
      pisoyres_a: "",
      pisoyres_b: "",
      pisoyres_c: "",
      pisoyres_d: "",
      pisoyres_e: "",
      carp_a: "",
      carp_b: "",
      carp_c: "",
      carp_d: "",
      carp_e: "",
      artefac_a: "",
      artefac_b: "",
      artefac_c: "",
      artefac_d: "",
      artefac_e: "",
      grife_a: "",
      grife_b: "",
      grife_c: "",
      grife_d: "",
      grife_e: "",
      canieria_a: "",
      canieria_b: "",
      canieria_c: "",
      canieria_d: "",
      canieria_e: "",
      instelec_a: "",
      instelec_b: "",
      instelec_c: "",
      instelec_d: "",
      instelec_e: "",
      instgas_a: "",
      instgas_b: "",
      instgas_c: "",
      instgas_d: "",
      instgas_e: "",
      tanque_a: "",
      tanque_b: "",
      tanque_c: "",
      tanque_d: "",
      tanque_e: "",
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

  const router = useRouter();

  const submit = () => {
    onSubmit()
  }

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/cargar/bloque', data)
    console.log(res)

    if (res.status) {
      toast.success('¡Datos cargados correctamente!', {
        description: 'Redirigiendo...',
        position: 'top-right',
      })
      console.log("Datos cargados correctamente")
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 3000);
    }

    console.log("Datos cargados correctamente")
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex justif_enter">
          <Heading>Carga datos ubicacion</Heading>
        </div>
        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            <InputRadix name='sector' label='Sector: ' control={control} />
            {errors.sector && <span className="tex_e_00">{errors.sector.message}</span>}
          </div>
          <div>
            <Input label='Manzana' name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.manzana && <span className="tex_e_00">{errors.manzana.message}</span>}
          </div>
          <div>
            <Input label='Casa' name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.casa && <span className="tex_e_00">{errors.casa.message}</span>}
          </div>
          <div>
            <Input label='Vivienda' name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.vivienda && <span className="tex_e_00">{errors.vivienda.message}</span>}
          </div>
          <div>
            <Input label='Hogar' name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.hogar && <span className="tex_e_00">{errors.hogar.message}</span>}
          </div>
          <div>
            <Input label='Supervisor' name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.supervisor && <span className="tex_e_00">{errors.supervisor.message}</span>}
          </div>
          <div>
            <Input label='Encuestador' name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.encuestador && <span className="tex_e_00">{errors.encuestador.message}</span>}
          </div>
          <div>
            <Input label='Respondente de la vivienda' name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true } }} type='text'></Input>
            {errors.responde && <span className="tex_e_00">{errors.responde.message}</span>}
          </div>
        </div>

        <div className="flex justif_enter m_0">
          <Heading>Carga Caracteristicas Habitacionales del Hogar</Heading>
        </div>

        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0">
          <div>
            <Input label='20.Habitabilidad' name='p20' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p20 && <span className="tex_e_00">{errors.p20.message}</span>}
          </div>
          <div>
            <Input label='21.Este hogar es...' name='p21' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p21 && <span className="tex_e_00">{errors.p21.message}</span>}
          </div>
          <div>
            <Input label='22.Documentacion' name='p22' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p22 && <span className="tex_e_00">{errors.p22.message}</span>}
          </div >
        </div >

        <div className="flex justif_enter m_0">
          <Heading>Carga servicios, instalaciones e infraestructura </Heading>
        </div>

        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            <Input label='23.Provicion agua' name='p23' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p23 && <span className="tex_e_00">{errors.p23.message}</span>}
          </div>
          <div>
            <Input label='24.Agrego circuito...' name='p24' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p24 && <span className="tex_e_00">{errors.p24.message}</span>}
          </div >
          <div>
            <Input label='25.Servicio electrico' name='p25' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p25 && <span className="tex_e_00">{errors.p25.message}</span>}
          </div >
          <div>
            <Input label='25.1Tipo de alteraciones' name='p251' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p251 && <span className="tex_e_00">{errors.p251.message}</span>}
          </div >
          <div>
            <Input label='26.Equipo de calefaccion' name='p26' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p26 && <span className="tex_e_00">{errors.p26.message}</span>}
          </div >
          <div>
            <Input label='26.1.Cambio de equipo de calefaccion' name='p261' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p261 && <span className="tex_e_00">{errors.p261.message}</span>}
          </div >
          <div>
            <Input label='26.2.Tipo de calefaccion de agua' name='p262' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p262 && <span className="tex_e_00">{errors.p262.message}</span>}
          </div >
          <div>
            <Input label='27. Posee internet' name='p27' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p27 && <span className="tex_e_00">{errors.p27.message}</span>}
          </div >
        </div >

        <div className="flex justif_enter m_0">
          <Heading>Vivienda </Heading>
        </div>
        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            <Input label='28.Realizo ampliaciones' name='p28' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { message: "¡La contraseña debe contener al menos un número!", value: /.*[_].*/ } }} type='text'></Input>
            {errors.p28 && <span className="tex_e_00">{errors.p28.message}</span>}
          </div>
          <div>
            <Input label='28.1.Tipo de ampliaciones' name='p281' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p281 && <span className="tex_e_00">{errors.p281.message}</span>}
          </div >
          <div>
            <Input label='29.Tuvo obstaculos' name='p29' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p29 && <span className="tex_e_00">{errors.p29.message}</span>}
          </div>
          <div>
            <Input label='29.1.Tipo obstaculos' name='p291' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p291 && <span className="tex_e_00">{errors.p291.message}</span>}
          </div>
          <div>
            <Input label='30.1.Evalue iluminacion' name='p301' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p301 && <span className="tex_e_00">{errors.p301.message}</span>}
          </div >
          <div>
            <Input label='30.2.Evalue ventilacion' name='p302' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p302 && <span className="tex_e_00">{errors.p302.message}</span>}
          </div >
          <div>
            <Input label='31.1.Temp. interior temporada calida' name='p311' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p311 && <span className="tex_e_00">{errors.p311.message}</span>}
          </div >
          <div>
            <Input label='31.2.Habitable sin refrigeracion' name='p312' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p312 && <span className="tex_e_00">{errors.p312.message}</span>}
          </div >
          <div>
            <Input label='31.3.Temp. interior temporada fria' name='p313' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p313 && <span className="tex_e_00">{errors.p313.message}</span>}
          </div >
          <div>
            <Input label='31.4. Habitable sin calefaccion' name='p314' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p314 && <span className="tex_e_00">{errors.p314.message}</span>}
          </div >
          <div>
            <Input label='32.Posee artefatos climatizadores' name='p32' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p32 && <span className="tex_e_00">{errors.p32.message}</span>}
          </div >
          <div>
            <Input label='32.1Posee A.C split' name='p321' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p321 && <span className="tex_e_00">{errors.p321.message}</span>}
          </div >
          <div>
            <Input label='32.2.Posee A.C de ventana' name='p322' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p322 && <span className="tex_e_00">{errors.p322.message}</span>}
          </div >
          <div>
            <Input label='32.3.Posee ventilador' name='p323' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p323 && <span className="tex_e_00">{errors.p323.message}</span>}
          </div >
          <div>
            <Input label='32.4.Posee calefactor' name='p324' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p324 && <span className="tex_e_00">{errors.p324.message}</span>}
          </div >
          <div>
            <Input label='32.5.Posee estufa' name='p325' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p325 && <span className="tex_e_00">{errors.p325.message}</span>}
          </div>
          <div>
            <Input label='33.1.Posee Heladera' name='p331' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p331 && <span className="tex_e_00">{errors.p331.message}</span>}
          </div>
          <div>
            <Input label='33.2.Posee Freezer' name='p332' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p332 && <span className="tex_e_00">{errors.p332.message}</span>}
          </div >
          <div>
            <Input label='33.3.Posee Horno elec.' name='p333' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p333 && <span className="tex_e_00">{errors.p333.message}</span>}
          </div >
          <div>
            <Input label='33.4.Posee lavarropas' name='p334' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p334 && <span className="tex_e_00">{errors.p334.message}</span>}
          </div >
          <div>
            <Input label='34.Monto Luz' name='p341' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p341 && <span className="tex_e_00">{errors.p341.message}</span>}
          </div >
          <div>
            <Input label='34.Monto Gas' name='p342' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p342 && <span className="tex_e_00">{errors.p342.message}</span>}
          </div >
          <div>
            <Input label='35.Frecuencia mantenimiento del hogar' name='p35' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p35 && <span className="tex_e_00">{errors.p35.message}</span>}
          </div >
          <div>
            <Input label='36.Presento patologias constructivas' name='p36' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p36 && <span className="tex_e_00">{errors.p36.message}</span>}
          </div >
        </div >

        <div className="flex justif_enter m_0">
          <Heading size={'4'}>Patologias constructivas_Marcar 1 donde corresponda</Heading>
        </div>
        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Cubierta</label>
          </div >
          <div>
            <Input label='Rotura' name='cubiert_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='cubiert_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='cubiert_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='cubiert_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='cubiert_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Cierlorraso</label>
          </div >
          <div>
            <Input label='Rotura' name='cielorras_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='cielorras_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='cielorras_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='cielorras_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='cielorras_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Muro exterior</label>
          </div >
          <div>
            <Input label='Rotura' name='muroe_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='muroe_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='muroe_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='muroe_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='muroe_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Muro medianero</label>
          </div >
          <div>
            <Input label='Rotura' name='murome_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='murome_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='murome_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='murome_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='murome_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Piso y revest.</label>
          </div >
          <div>
            <Input label='Rotura' name='pisoyre_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='pisoyre_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='pisoyre_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='pisoyre_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='pisoyre_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Carpinteria</label>
          </div >
          <div>
            <Input label='Rotura' name='car_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='car_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='car_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='car_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='car_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Artefactos</label>
          </div >
          <div>
            <Input label='Rotura' name='artefa_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='artefa_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='artefa_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='artefa_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='artefa_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Griferias</label>
          </div >
          <div>
            <Input label='Rotura' name='grif_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='grif_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='grif_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='grif_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='grif_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Cañerias</label>
          </div >
          <div>
            <Input label='Rotura' name='canieri_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='canieri_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='canieri_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='canieri_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='canieri_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Ins. Electricas</label>
          </div >
          <div>
            <Input label='Rotura' name='instele_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='instele_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='instele_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='instele_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='instele_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Ins. Gas</label>
          </div >
          <div>
            <Input label='Rotura' name='instga_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='instga_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='instga_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='instga_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='instga_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
          <div>
            {/* <Input label='36.1.Cubierta' name='p361' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p361 && <span className="tex_e_00">{errors.p361.message}</span>} */}
            <label htmlFor="">Tanque de agua</label>
          </div >
          <div>
            <Input label='Rotura' name='tanqu_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p362 && <span className="tex_e_00">{errors.p362.message}</span>}
          </div >
          <div>
            <Input label='Grieta' name='tamqu_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p363 && <span className="tex_e_00">{errors.p363.message}</span>}
          </div >
          <div>
            <Input label='Humedad' name='tanqu_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p364 && <span className="tex_e_00">{errors.p364.message}</span>}
          </div >
          <div>
            <Input label='Desprendimiento' name='tanqu_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p365 && <span className="tex_e_00">{errors.p365.message}</span>}
          </div >
          <div>
            <Input label='Desperfecto' name='tanqu_' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p366 && <span className="tex_e_00">{errors.p366.message}</span>}
          </div >
        </div>

        <div className="flex justif_enter m_0">
          <Heading>Hábitat y ambiente del barrio</Heading>
        </div>

        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            <Input label='37.Actividades que realiza en EP' name='p37' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p37 && <span className="tex_e_00">{errors.p37.message}</span>}
          </div>
          <div>
            <Input label='38.Cuando utilizan EP' name='p38' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p38 && <span className="tex_e_00">{errors.p38.message}</span>}
          </div >
          <div>
            <Input label='39.1.Califique Iluminacion' name='p391' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p391 && <span className="tex_e_00">{errors.p391.message}</span>}
          </div >
          <div>
            <Input label='39.2.Califique Distribucion de cestos' name='p392' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p392 && <span className="tex_e_00">{errors.p392.message}</span>}
          </div >
          <div>
            <Input label='39.3.Califique Equipamiento recreativo' name='p393' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p393 && <span className="tex_e_00">{errors.p393.message}</span>}
          </div >
          <div>
            <Input label='39.4.Califique Equipamiento deportivo' name='p394' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p394 && <span className="tex_e_00">{errors.p394.message}</span>}
          </div >
          <div>
            <Input label='39.5.Califique Espacios para permanecer' name='p395' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p395 && <span className="tex_e_00">{errors.p395.message}</span>}
          </div >
          <div>
            <Input label='39.6.Disponibilidad de zombras' name='p396' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p396 && <span className="tex_e_00">{errors.p396.message}</span>}
          </div >
          <div>
            <Input label='40.EP son seguros' name='p40' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p40 && <span className="tex_e_00">{errors.p40.message}</span>}
          </div >
          <div>
            <Input label='41.Motivos de inseguridad' name='p41' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p41 && <span className="tex_e_00">{errors.p41.message}</span>}
          </div >
          <div>
            <Input label='42.Horario seguro para circular' name='p42' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p42 && <span className="tex_e_00">{errors.p42.message}</span>}
          </div >
          <div>
            <Input label='43.Con quien usa EP' name='p43' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p43 && <span className="tex_e_00">{errors.p43.message}</span>}
          </div >
          <div>
            <Input label='44.Que distancia se traslada para usar EP' name='p44' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p44 && <span className="tex_e_00">{errors.p44.message}</span>}
          </div >
          <div>
            <Input label='45.Que hace los dias de calor extremo' name='p45' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p45 && <span className="tex_e_00">{errors.p45.message}</span>}
          </div >
          <div>
            <Input label='46.Refugio al calor en EV de Lomas' name='p46' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p46 && <span className="tex_e_00">{errors.p46.message}</span>}
          </div >
          <div>
            <Input label='47.Incorporar a los EV para el calor' name='p47' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p47 && <span className="tex_e_00">{errors.p47.message}</span>}
          </div >
          <div>
            <Input label='48.1.Sabe que es ola de calor' name='p481' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p481 && <span className="tex_e_00">{errors.p481.message}</span>}
          </div >
          <div>
            <Input label='48.2.Influencia humana en las ola de calor' name='p482' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p482 && <span className="tex_e_00">{errors.p482.message}</span>}
          </div >
          <div>
            <Input label='49.1.Califique arbolado' name='p491' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p491 && <span className="tex_e_00">{errors.p491.message}</span>}
          </div >
          <div>
            <Input label='49.2.Calidique estado de la vereda' name='p492' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p492 && <span className="tex_e_00">{errors.p492.message}</span>}
          </div >
          <div>
            <Input label='50.1.Arbolado se mantuvo igual' name='p501' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p501 && <span className="tex_e_00">{errors.p501.message}</span>}
          </div >
          <div>
            <Input label='50.2.Se plantaron mas arboles' name='p502' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p502 && <span className="tex_e_00">{errors.p502.message}</span>}
          </div >
          <div>
            <Input label='50.3.El arbolado se seco' name='p503' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p503 && <span className="tex_e_00">{errors.p503.message}</span>}
          </div >
          <div>
            <Input label='50.4.Se retiro arbolado' name='p504' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p504 && <span className="tex_e_00">{errors.p504.message}</span>}
          </div >
          <div>
            <Input label='51.Valoriza mas en barrio arbolado' name='p51' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p51 && <span className="tex_e_00">{errors.p51.message}</span>}
          </div >
          <div>
            <Input label='52.1.Califque contaminacion visual' name='p521' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p521 && <span className="tex_e_00">{errors.p521.message}</span>}
          </div>
          <div>
            <Input label='52.2.Califique contaminacion sonora' name='p522' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p522 && <span className="tex_e_00">{errors.p522.message}</span>}
          </div >
          <div>
            <Input label='53.Califique limpieza de lomas' name='p53' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p53 && <span className="tex_e_00">{errors.p53.message}</span>}
          </div >
          <div>
            <Input label='54.Causa de faltas de limpieza' name='p54' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p54 && <span className="tex_e_00">{errors.p54.message}</span>}
          </div >
          <div>
            <Input label='55.Utiliza Punto verde' name='p55' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p55 && <span className="tex_e_00">{errors.p55.message}</span>}
          </div >
          <div>
            <Input label='56.1.Conoce el CIAT' name='p561' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p561 && <span className="tex_e_00">{errors.p561.message}</span>}
          </div >
          <div>
            <Input label='56.2.Produccion de materiales reciclados' name='p562' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p562 && <span className="tex_e_00">{errors.p562.message}</span>}
          </div >
        </div >

        <div className="flex justif_enter m_0">
          <Heading>Equipamiento comunitario</Heading>
        </div>
        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            <Input label='57.Donde se dirige en emergencia de salud' name='p57' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p57 && <span className="tex_e_00">{errors.p57.message}</span>}
          </div>
          <div>
            <Input label='58.Suficientes espacios de recreacion' name='p58' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p58 && <span className="tex_e_00">{errors.p58.message}</span>}
          </div >
          <div>
            <Input label='59.Que espacios faltan' name='p59' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p59 && <span className="tex_e_00">{errors.p59.message}</span>}
          </div >
          <div>
            <Input label='60.Se abastace en comercios locales' name='p60' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p60 && <span className="tex_e_00">{errors.p60.message}</span>}
          </div >
          <div>
            <Input label='61.La oferta comercial es suficiente' name='p61' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p61 && <span className="tex_e_00">{errors.p61.message}</span>}
          </div >
          <div>
            <Input label='62.Que locales hacen falta' name='p62' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p62 && <span className="tex_e_00">{errors.p62.message}</span>}
          </div >
          <div>
            <Input label='63.Conoce mercados/ferias municipales' name='p63' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p63 && <span className="tex_e_00">{errors.p63.message}</span>}
          </div >
          <div>
            <Input label='63.1.Utiliza mercados locales' name='p631' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p631 && <span className="tex_e_00">{errors.p631.message}</span>}
          </div >
          <div>
            <Input label='64.1.Conoce centros vecinales' name='p641' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p641 && <span className="tex_e_00">{errors.p641.message}</span>}
          </div >
          <div>
            <Input label='64.2.Conoce clubes deportivos' name='p642' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p642 && <span className="tex_e_00">{errors.p642.message}</span>}
          </div >
          <div>
            <Input label='64.3.Conoce centros comunitarios' name='p643' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p643 && <span className="tex_e_00">{errors.p643.message}</span>}
          </div >
          <div>
            <Input label='64.4.Conoce capillas comunitarios' name='p644' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p644 && <span className="tex_e_00">{errors.p644.message}</span>}
          </div >
          <div>
            <Input label='64.5.Utiliza estos centros' name='p645' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p645 && <span className="tex_e_00">{errors.p645.message}</span>}
          </div >
          <div>
            <Input label='65.Cree que los espacios son necesarios' name='p65' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p65 && <span className="tex_e_00">{errors.p65.message}</span>}
          </div >
          <div>
            <Input label='66.Existen espacios que identifiquen al barrio' name='p66' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p66 && <span className="tex_e_00">{errors.p66.message}</span>}
          </div >
          <div>
            <Input label='66.1.Cuales' name='p661' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true } }} type='text'></Input>
            {errors.p661 && <span className="tex_e_00">{errors.p661.message}</span>}
          </div >
        </div >

        <div className="flex justif_enter m_0">
          <Heading>Sitio, conectividad y traslado</Heading>
        </div>
        <div className="grid gri_ol_ md:gri_ol_ ga_ m_0 m_">
          <div>
            <Input label='67.Estado del acceso al barrio' name='p67' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p67 && <span className="tex_e_00">{errors.p67.message}</span>}
          </div>
          <div>
            <Input label='68.Medio de transporte que utiliza' name='p68' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p68 && <span className="tex_e_00">{errors.p68.message}</span>}
          </div >
          <div>
            <Input label='69.Fin del uso del transporte publico' name='p69' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p69 && <span className="tex_e_00">{errors.p69.message}</span>}
          </div >
          <div>
            <Input label='70.Transporte publico es eficiente' name='p70' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p70 && <span className="tex_e_00">{errors.p70.message}</span>}
          </div >
          <div>
            <Input label='70.1.Desventajas del servicio de transporte' name='p701' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p701 && <span className="tex_e_00">{errors.p701.message}</span>}
          </div >
          <div>
            <Input label='71.Conoce/usa Ecobus' name='p71' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p71 && <span className="tex_e_00">{errors.p71.message}</span>}
          </div >
          <div>
            <Input label='71.1.Califique Ecobus' name='p711' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p711 && <span className="tex_e_00">{errors.p711.message}</span>}
          </div >
          <div>
            <Input label='72.Frecuencia del uso del vehiculo particular' name='p72' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p72 && <span className="tex_e_00">{errors.p72.message}</span>}
          </div >
          <div>
            <Input label='73.Fin del uso del vehi. particular' name='p73' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p73 && <span className="tex_e_00">{errors.p73.message}</span>}
          </div >
          <div>
            <Input label='74.Como se traslada en el barrio' name='p74' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p74 && <span className="tex_e_00">{errors.p74.message}</span>}
          </div >
          <div>
            <Input label='75.Conoce a sus vecinos' name='p75' control={control} placeholder='' rules={{ required: { message: "¡Se requiere este dato", value: true }, pattern: { value: /^[_]*$/, message: "Solo se permiten números" } }} type='text'></Input>
            {errors.p75 && <span className="tex_e_00">{errors.p75.message}</span>}
          </div >
        </div >

        <div className="flex justif_enter m_">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button radius='full' size={"3"} color="green"><DoubleArrowUpIcon color='black' />Cargar datos</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title color='red'>¡Atencion!</AlertDialog.Title>
              <AlertDialog.Description size="4">
                Esta por cargar los datos ingresados. Por favor verifique que los datos sean correctos antes de continuar.
                No podrá modificar los datos una vez cargados.
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="blue">
                    Voy a verificar los datos
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button onClick={submit} type='submit' variant="solid" color="red">
                    Cargar definitivamente
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </form >
    </>
  )
}

export default New