import React, {useState} from 'react'
import { useFormik } from 'formik';
import './Form.css'

const Form = ({ title, HandleNextFunction, inputs, HandlePreviuosFunction }) => {

  const getInitialValues = () => {

    const ConvertInputsInObject = inputs.reduce((acc, item) => {
      acc[item.name] = item?.value
      return acc
    }, {})

    return ConvertInputsInObject
  }

  const formik = useFormik({
    initialValues: getInitialValues(),
    onSubmit: values => HandleNextFunction(values),
    validate : values => {

      let errors = {}

      const valueList = Object.keys(values)

      for (const _value of valueList) {
        if(!values[_value]) errors[_value] = 'Required'
      }

      return errors
    }
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <h2> {title} </h2>

      {inputs.map((input, index) =>
        <div key={index}>
          <label htmlFor={input.name}> {input.label} </label>
          <br />
          <input
            id={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            onChange={formik.handleChange}
            value={formik.values[input.name]}
          />

          {formik.errors[input.name] ? <div>{formik.errors[input.name]}</div> : null}

          <br />

        </div>
      )}

      <button type="submit">Submit</button>
      <button onClick={() => HandlePreviuosFunction()} >Submit</button>
    </form>
  );
}

export default Form;