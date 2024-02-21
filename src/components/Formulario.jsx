import { useEffect, useState } from 'react'
import { usePacienteContext } from '../hooks/usePacienteContext'
import Error from './Error'
import generarID from '../helpers/generarID'

function Formulario() {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const { pacientes, setPacientes, paciente, setPaciente } = usePacienteContext()

  useEffect(() => {
    if( Object.keys(paciente). length > 0 ) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del formulario
    if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
      setError(true)
      return
    }
    setError(false)

    // Objeto paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas 
    }

    if(paciente.id) {
      // Editando un registro
      objetoPaciente.id = paciente.id
      // Retorna un arreglo nuevo con .map(), donde si no hay coincidencia con el apciente modificado regresa el objeto viejo, pero si hay coincidencia regresa el actualizado
      const pacientesActualizados = pacientes.map(pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )

      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //Agregar un registro

      objetoPaciente.id = generarID()
      // Para no reescribirlo, usamos una copia de lo que ya existe y agregamos lo nuevo con spreadOperator
      setPacientes([ ...pacientes, objetoPaciente ])
    }


    // Reiniciar los inputs
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='mx-5 md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de pacientes</h2>
      <p className='text-xl mt-5 text-center mb-10'>
        Añade Pacientes y {' '}
        <span className='text-teal-600 font-bold'>Administralos</span>
      </p>

      <form 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}
      >

        { 
          error && 
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
        }

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>Nombre Mascota</label>
          <input 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text' 
            id='mascota'
            placeholder='Nombre de la mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>Nombre Propietario</label>
          <input 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text' 
            id='propietario'
            placeholder='Nombre del propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>Email</label>
          <input 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='email' 
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='alta'>Alta</label>
          <input 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='date' 
            id='alta'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>Sintomas</label>
          <textarea 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='Sintomas'
            placeholder='Descripción de los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
        </div>

        <input 
          type='submit'
          className='bg-teal-600 w-full p-3 border-2 border-teal-600 text-white uppercase font-bold rounded-md shadow-md hover:bg-neutral-100 hover:border-2 hover:border-teal-600 hover:text-teal-700 duration-[250ms] cursor-pointer'
          value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario
