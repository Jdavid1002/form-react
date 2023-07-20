import React, {useContext} from 'react'
import { Context } from '../config/Context'
import { steps } from '../App'
import './Summary.css'

const Summary = () => {

  const {Steps} = useContext(Context)

  const getAllInputs = () => {
    let inputs = []

    const newSteps = Steps || steps

    newSteps.forEach(step => {
      inputs = inputs.concat(step.inputs)
    })

    return inputs?.map(input => {
      return{
        value : input.value,
        label : input.label
      }
    })
  }

  return (
    <div>
      {getAllInputs()?.map((input, idx) => 
        <div className="summary-input" key={idx} >
          <p>{input.label} --- {input.value} </p>
        </div>
      )}
    </div>

  );
}
 
export default Summary;