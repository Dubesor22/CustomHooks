import React, { useState } from 'react'

export const Counter = () => {

  const [contador, setContador] = useState({
    contador1: 0,
    contador2: 10,
    contador3: 100,
  })

  const { contador1, contador2, contador3 } = contador




  return (
    <>
      <h2>Contador 1 : {contador1} </h2>
      <br />
      <h2>Contador 2 : {contador2} </h2>
      <br />
      <h2>Contador 3 : {contador3} </h2>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          setContador({
            ...contador,
            contador1: contador1 + 1
          })
        }}
      >
        +1
      </button>
    </>

  )
}
