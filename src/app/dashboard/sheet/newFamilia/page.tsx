"use client"
import { AlertDialog, Button, Flex, Heading } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input';
import InputRadix from '@/components/InputRadix';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon, DoubleArrowUpIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

function NewSheet() {

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
      nro_integrante: "",
      nombre: "",
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
      cobra_jub: ""
    }
  });

  const router = useRouter();

  const SiguienteSeccion = () => {
    router.push('/dashboard/sheet/new')
  }

  const submit = () => {
    onSubmit()
  }


  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const res = await axios.post('/api/cargar/familia', data)
    console.log(res)

    if (res.status) {
      toast.success('¡Datos cargados correctamente!', {
        description: 'Redirigiendo...',
        position: 'top-center',
      })
      setTimeout(() => {
        router.refresh();
      }, 3000);
    }
    toast.error('¡Error al cargar los datos!', {
      description: 'Por favor intente nuevamente',
      position: 'top-center',
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <Toaster richColors />
      <div className="flex justify-center">
        <Heading>Carga Estructura Familiar</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-40 my-5">
        <div>
          <InputRadix name='sector' label='Sector: ' control={control} />
        </div>
        <div>
          <Input label='Manzana' name='manzana' control={control} placeholder='Nro de Manzana' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.manzana && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Casa' name='casa' control={control} placeholder='Nro de casa' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.casa && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Vivienda' name='vivienda' control={control} placeholder='Nro de vivienda' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.vivienda && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Hogar' name='hogar' control={control} placeholder='Nro de Hogar' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.hogar && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Supervisor' name='supervisor' control={control} placeholder='Supervisor' rules={{ required: { message: "¡Se requiere este dato!", value: true }}} type='text'></Input>
          {errors.supervisor && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Encuestador' name='encuestador' control={control} placeholder='Encuestador' rules={{ required: { message: "¡Se requiere este dato!", value: true }}} type='text'></Input>
          {errors.encuestador && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Respondente de la vivienda' name='responde' control={control} placeholder='Respondente' rules={{ required: { message: "¡Se requiere este dato!", value: true }}} type='text'></Input>
          {errors.responde && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
      </div>

      <div className="flex justify-center">
        <Heading>Estructura Familiar</Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-40 my-5">
        <div>
          <Input label='Numero' name='nro_integrante' control={control} placeholder='Número' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.nro_integrante && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Nombre' name='nombre' control={control} placeholder='Nombre' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.nombre && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Rel. Parentesco' name='rel_paren' control={control} placeholder='Rel. Parentesco' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.rel_paren && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Genero' name='genero' control={control} placeholder='Género' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.genero && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Edad' name='edad' control={control} placeholder='Edad' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.edad && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Tiene discapacidad' name='discapacidad' control={control} placeholder='Discapacidad' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.discapacidad && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Tiene dificultades' name='dificultad' control={control} placeholder='Dificultad' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.dificultad && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Certificado discapacidad' name='certificado' control={control} placeholder='Certificado Disc.' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.certificado && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Cobra pension' name='pension' control={control} placeholder='Pensión por disc.' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.pension && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Nivel de estudios' name='nivel_estudio' control={control} placeholder='Nivel de estudio' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.nivel_estudio && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Completo nivel de estudios' name='estudio_completo' control={control} placeholder='¿Completo nivel?' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.estudio_completo && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Motivo si no finalizo' name='motivo' control={control} placeholder='Motivo si no finalizó' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.motivo && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Tipo de establec. educativo' name='tipo_establec.' control={control} placeholder='Tipo de establec. educ.' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.tipo_establec && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Lugar del establecimiento educativo' name='lugar_establec' control={control} placeholder='Lugar del establecimiento' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.lugar_establec && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Condiciones de actividad' name='actividad' control={control} placeholder='Condic. de activ.' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.actividad && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Categoria en el trabajo' name='categoria' control={control} placeholder='Categoría de trabajo' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.categoria && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Motivos de su categoria' name='motivo_categ' control={control} placeholder='Motivo' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.motivo_categ && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Lugar de trabajo' name='lugar_trabajo' control={control} placeholder='Lugar de Trabajo' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.lugar_trabajo && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Realiza aportes jub.' name='aportes_jub' control={control} placeholder='Aportes jubil.' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.aportes_jub && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Ingreso individual' name='ingreso_ind' control={control} placeholder='Ingreso individual' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.ingreso_ind && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
        <div>
          <Input label='Cobra jubilacion o pension' name='cobra_jub' control={control} placeholder='Cobra jub. o pens.' rules={{ required: { message: "¡Se requiere este dato!", value: true }, pattern: { message: "Solo numeros!", value: /^[0-9]*$/ } }} type='number'></Input>
          {errors.cobra_jub && <p className="text-red-500">¡Se requiere este dato!</p>}
        </div>
      </div>
      <div className="flex justify-center mb-5 mt-4 space-x-4">
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

        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button size={"3"} color="blue"><ArrowRightIcon color='black'/>Siguiente seccion</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title color='red'>¡Atencion!</AlertDialog.Title>
            <AlertDialog.Description size="4">
              Esta por pasar a la siguiente seccion para cargar el resto de bloque ¿Desea continuar?
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="blue">
                  Aun no he terminado
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button onClick={SiguienteSeccion} type='submit' variant="solid" color="red">
                  Ir a la siguiente seccion
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </form>
  )
}

export default NewSheet