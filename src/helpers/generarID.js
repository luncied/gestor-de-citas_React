const generarID = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(26)
  return random + fecha
}

export default generarID