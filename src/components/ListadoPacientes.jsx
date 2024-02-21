import Paciente from './Paciente'
import { usePacienteContext } from '../hooks/usePacienteContext'

function ListadoPacientes() {
  const { pacientes, setPaciente, eliminarPaciente } = usePacienteContext()

  return (
    <div className=':mx-5 md:w-1/2 lg:w-3/5'>
      {pacientes && pacientes.length ? (
        <>
        <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
        <p className='text-xl mt-5 text-center mb-10'>
          Administra tus {' '}
          <span className='text-teal-600 font-bold'>Pacientes y Citas</span>
        </p>
        <div className='md:h-screen overflow-y-scroll m-0 p-0 border-0 box-border'>
          {pacientes.map(
            (paciente) => (
              <Paciente 
                key={paciente.id}
                paciente={paciente} 
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          )}
        </div>
      </>
      ): (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 text-center mb-10'>
            Comienza agregando pacientes {' '}
            <span className='text-teal-600 font-bold'> y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
