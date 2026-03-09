const titulo = "Mini-Sitio ADSO"
const saludo = "Hola " + titulo.trim().toUpperCase()
console.log(saludo)

function mostrarMensaje(nombre) {
  if (!nombre?.trim()) return

  const mensaje = "Bienvenido " + nombre

  console.log(mensaje)
}