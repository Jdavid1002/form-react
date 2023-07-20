import React, {useContext} from 'react'
import { Context } from '../config/Context'

import './Summary.css'

const Summary = () => {

  const {Steps} = useContext(Context)

  const getAllInputs = () => {
    let inputs = []

    Steps.forEach(step => {
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
      {getAllInputs()?.map(input => 
        <div className="summary-input">
          <p>{input.label} --- {input.value} </p>
        </div>
      )}
    </div>

  );
}
 
export default Summary;