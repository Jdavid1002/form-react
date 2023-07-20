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
      <main className="summary-input" key={idx}>
          <div className='div-1'>
            <p>{input.label}:</p>
          </div>
          <div className='div-2'>
            <p>{input.value}</p>
          </div>
        </main>
      )}
    </div>

  );
}
 
export default Summary;