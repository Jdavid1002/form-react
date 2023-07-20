import React,{useState} from 'react'
import Form from './components/Form'

import './App.css'

function App() {

  const [StepSelected, setStepSelected] = useState(1)

  const steps = [
    {
      step : 1,
      inputs : [
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
      ],
      title : 'REGISTRATE',
      hidePreviuos : true
    },
    {
      step : 2,
      inputs : [
        {
          label : 'Fecha de Nacimiento',
          placeholder : 'Fecha de nacimiento',
          value : '',
          type : 'date',
          name : 'birthdate'
        },
        {
          label : 'Edad',
          placeholder : 'Inserte su edad',
          value : '',
          type : 'number',
          name : 'age'
        }
      ],
      title : 'REGISTRATE',
      hidePreviuos : false
    },
    {
      step : 3,
      inputs : [
        {
          label : 'Titulo Universitario',
          placeholder : 'pregrado, postgrado, etc',
          value : '',
          type : 'text',
          name : 'title_student'
        },
        {
          label : 'Apellidos',
          placeholder : 'Inserte su Apellido',
          value : '',
          type : 'text',
          name : 'last_name'
        }
      ],
      title : 'REGISTRATE',
      hidePreviuos : false
    },
    {
      step : 4,
      inputs : [
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
      ],
      title : 'REGISTRATE',
      hidePreviuos : false
    },
    {
      step : 5,
      inputs : [
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
      ],
      title : 'REGISTRATE',
      hidePreviuos : false
    }
  ]

  const getStep = () => {
    return steps?.find(item => item?.step === StepSelected)
  }

  return (
    <div>
      {getStep() &&
        <Form
          title={getStep()?.title}
          HandleNextFunction={() => setStepSelected(StepSelected + 1)}
          HandlePreviuosFunction={() => setStepSelected(StepSelected - 1)}
          inputs={getStep()?.inputs}
          hidePreviuos={getStep()?.hidePreviuos}
        />
      }

    </div>
  )
}

export default App
