import { useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import { usePacienteContext } from './hooks/usePacienteContext'

function App() {
  const { pacientes, setPacientes } = usePacienteContext()

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [] // convierte el string del LS a un objeto
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
