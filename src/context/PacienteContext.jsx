import { createContext, useState, useEffect } from 'react'

// 1. Crear el contexto
const PacienteContext = createContext()

// 2. Crear el Proveedor del contexto (privider)
function PacienteProvider ({ children }) {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  const values = {
    pacientes, 
    setPacientes,
    paciente, 
    setPaciente,
    eliminarPaciente
  }

  return (
    <PacienteContext.Provider value={values}>
      {children}
    </PacienteContext.Provider>
  )
}

export { PacienteContext, PacienteProvider }