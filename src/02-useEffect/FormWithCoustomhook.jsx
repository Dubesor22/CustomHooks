import React from 'react'
import { useForm } from '../Hooks/useForm';

export const FormWithCoustomhook = () => {

  const { formState, handleInputChange, handleReset, handleSubmit } = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formState;



  return (
    <>

      <h2>Formulario de Inputs</h2>

      <hr />

      <input
        className='form-control m-2'
        type="text"
        name="name"
        placeholder="Tu nombre"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />

      <input
        className='form-control m-2'
        type="email"
        name="email"
        placeholder="Tu email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      <input
        className='form-control m-2'
        type="password"
        name="password"
        placeholder="Tu password"
        autoComplete="off"
        value={password}
        onChange={handleInputChange}
      />

      <button className='btn btn-primary m-2' onClick={handleSubmit}>Enviar</button>

      <button className='btn btn-danger m-2' onClick={handleReset}>Limpiar Formulario</button>


    </>
  )
}
