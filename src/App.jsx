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
          placeholder : 'Inserte su nombre',
          value : '',
          type : 'text',
          name : 'first_name'
        },
        {
          label : 'Apellidos',
          placeholder : 'Inserte su apellido',
          value : '',
          type : 'text',
          name : 'last_name'
        }
      ],
      title : 'Mejora tu estilo con nuestros consejos personalizados',
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
      title : 'Danos tu opinión y crea tendencias únicas',
      hidePreviuos : false
    },
    {
      step : 3,
      inputs : [
        {
          label : 'Número de identificación',
          placeholder : 'Inserte su número de identificación',
          value : '',
          type : 'number',
          name : 'first_name'
        },
        {
          label : 'Email',
          placeholder : 'Inserte su dirección de correo',
          value : '',
          type : 'email',
          name : 'last_name'
        }
      ],
      title : 'Diseños únicos para ti, siempre acertados',
      hidePreviuos : false
    },
    {
      step : 4,
      inputs : [
        {
          label : 'Animal Favorito',
          placeholder : 'Inserte su animal favorito',
          value : '',
          type : 'text',
          name : 'first_name'
        },
        {
          label : 'Color favorito',
          placeholder : 'Inserte su Apellido',
          value : '',
          type : 'color',
          name : 'last_name'
        }
      ],
      title : 'Comparte tus ideas y marca la diferencia',
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
      title : 'Tus comentarios nos inspiran a innovar',
      hidePreviuos : false
    }
  ]

  const getStep = () => {
    return steps?.find(item => item?.step === StepSelected)
  }

  return (
    <div className='container-app' >
      <h1 className='title-app' > FashionApp </h1>
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
