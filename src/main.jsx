import React from 'react'
import ReactDOM from 'react-dom/client'


import { CounterWithHooks } from './01-Counter/CounterWithHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCoustomhook } from './02-useEffect/FormWithCoustomhook'
import { FetchWithAxios } from './Pruebas/FetchWithAxios'
import { MultipleCustomHooks } from './03-multipleCustomHooks/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <CounterWithHooks />
    <br />
    <FormWithCoustomhook />
    <br /> */}
    {/* <FetchWithAxios /> */}
    <MultipleCustomHooks />
  </>

)
