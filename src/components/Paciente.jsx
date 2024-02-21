import '../styles/Animations.css'

function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className='mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl animation animation--fade-in'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre {' '}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario {' '}
        <span className='font-normal normal-case'>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email {' '}
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta {' '}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas {' '}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className='mt-6 flex justify-around'>
        <button
          type='button'
          className='bg-teal-600 border-teal-600 py-2 px-10 border-2 text-white  text-sm uppercase font-bold rounded-md shadow-md hover:bg-neutral-100 hover:border-2 hover:border-teal-600 hover:text-teal-700 duration-[250ms] cursor-pointer'
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type='button'
          className=' bg-orange-600 border-orange-600 py-2 px-10 border-2 text-white  text-sm uppercase font-bold rounded-md shadow-md hover:bg-neutral-100 hover:border-2 hover:border-orange-700 hover:text-orange-700 duration-[250ms] cursor-pointer'
          onClick={handleEliminar}
        >
          Eliminar
        </button>
        
      </div>
    </div>
  )
}

export default Paciente
