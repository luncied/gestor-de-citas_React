import { useContext } from 'react'
import { PacienteContext } from '../context/PacienteContext'

// 3. Crear un Hook para usar el context

export function usePacienteContext () {
  const context = useContext(PacienteContext)

  if (context === undefined) {
    throw new Error('SecretContext debe ser usado dentro de PacienteProvider')
  }
  return context
}
