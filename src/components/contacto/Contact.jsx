import React from 'react'


const mandar = () => {
  console.log("super!")
}

function Contact() {
  return (
    <div>
    <h2>Escribime, o no</h2>
      <form onSubmit={mandar}>
      <label htmlFor='nombre'>
        <input type='text' id='nombre' placeholder='nombre'></input>
      </label>
       <label htmlFor='email'>
        <input type='email' id='email' placeholder='juancarlos@email.com'></input>
      </label>
      <button type='button'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
