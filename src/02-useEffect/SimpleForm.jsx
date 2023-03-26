import React, { useState } from 'react'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({

  })

  const { name, email, password } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })

  }

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




    </>
  )
}
