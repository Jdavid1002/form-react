import React from 'react'
import Form from './components/Form'

import './App.css'

function App() {

  const inputs = [
    {
      label : 'Nombres',
      placeholder : 'Inserte sus nombres',
      value : '',
      type : 'text',
      name : 'first_name'
    },
    {
      label : 'Apellidos',
      placeholder : 'Inserte su Apellido',
      value : '',
      type : 'text',
      name : 'last_name'
    }
  ]
  
  return (
    <div className='page'>
      <div className='form'>
      <Form
        title='Registrarse'
        HandleNextFunction={() => console.log('Hola')}
        HandlePreviuosFunction={() => console.log('Chao')}
        inputs={inputs}
      />
    </div>
    </div>
  )
}

export default App
