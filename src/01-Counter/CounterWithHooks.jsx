
import React from 'react'
import useCounter from '../Hooks/useCounter'

export const CounterWithHooks = () => {


  const { counter, increment, decrement, reset } = useCounter()


  return (

    <>
      <h1>CounterWithHooks</h1>

      <hr />

      <h3> {counter} </h3>

      <button className='btn btn-primary m-2' onClick={() => increment()}> +1 </button>

      <button className='btn btn-danger' onClick={() => reset()} > Reset </button>

      <button className='btn btn-primary m-2' onClick={() => decrement()}> -1 </button>

    </>
  )
}
