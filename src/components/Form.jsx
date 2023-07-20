import React, {useState} from 'react'
import './Form.css'

const Form = ({ title, HandleNextFunction, inputs, HandlePreviuosFunction }) => {

  const [InputsState, setInputsState] = useState(inputs)

  const handleChange = (e) => {
    const { name, value } = e.target

    const newInputsState = InputsState.map(input => {
      if (input.name === name) {
        return { 
          ...input, 
          value : value
        }
      }
      return input
    })
    setInputsState(newInputsState)
  }

  return (
    <div className='' >
      <h2> {title} </h2>

      {InputsState.map((input, index) =>
        <div key={index}>
          <label>{input.label}</label>
          <br />
          <input
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(e) => handleChange(e)}
          />
        </div>
      )}

      <button onClick={() => HandlePreviuosFunction() } > Anterior </button>
      <button onClick={() => HandleNextFunction() } > Siguiente </button>

    </div>
  );
}

export default Form;