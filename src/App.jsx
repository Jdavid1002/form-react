import React,{useState} from 'react'
import Form from './components/Form'

import './App.css'
import { Context } from './config/Context'

function App() {

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
          name : 'document_number'
        },
        {
          label : 'Email',
          placeholder : 'Inserte su dirección de correo',
          value : '',
          type : 'email',
          name : 'email'
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
          name : 'animal'
        },
        {
          label : 'Color favorito',
          placeholder : '',
          value : '',
          type : 'color',
          name : 'color'
        }
      ],
      title : 'Comparte tus ideas y marca la diferencia',
      hidePreviuos : false
    },
    {
      step : 5,
      inputs : [
        {
          label : 'Estatura',
          placeholder : 'Inserta tu estatura',
          value : '',
          type : 'number',
          name : 'height'
        },
        {
          label : 'Peso',
          placeholder : 'Inserta tu peso',
          value : '',
          type : 'number',
          name : 'weight'
        }
      ],
      title : 'Tus comentarios nos inspiran a innovar',
      hidePreviuos : false
    }
  ]

  const [StepSelected, setStepSelected] = useState(1)
  const [Steps, setSteps] = useState(steps)

  const getStep = () => {
    return Steps?.find(item => item?.step === StepSelected)
  }

  return (
    <Context.Provider value={{ Steps, setSteps }} >
      <div className='container-app' >
        <h1 className='title-app' > FashionApp </h1>
        {getStep() &&
          <Form
            title={getStep()?.title}
            HandleNextFunction={() => setStepSelected(StepSelected + 1)}
            HandlePreviuosFunction={() => setStepSelected(StepSelected - 1)}
            inputs={getStep()?.inputs}
            hidePreviuos={getStep()?.hidePreviuos}
            StepSelected={StepSelected}
          />
        }

      </div>
    </Context.Provider>
  )
}

export default App
