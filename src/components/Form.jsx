import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import './Form.css'

const Form = ({ title, HandleNextFunction, inputs, HandlePreviuosFunction, hidePreviuos }) => {

  const getInitialValues = () => {
    const ConvertInputsInObject = inputs.reduce((acc, item) => {
      acc[item.name] = item?.value
      return acc
    }, {})

    return ConvertInputsInObject
  }

  const formik = useFormik({
    initialValues: getInitialValues(),
    onSubmit: (values) => {
      HandleNextFunction()
      formik.resetForm()
    },
    validate : values => {

      let errors = {}

      const valueList = Object.keys(values)

      for (const _value of valueList) {
        if(!values[_value]) errors[_value] = true
      }

      const errors_keys = Object.keys(errors)
      const inputs_keys = inputs?.map(item => item.name)

      for (const _keys of errors_keys) {
        if(!inputs_keys.includes(_keys)) delete errors[_keys]
      }

      return errors
    }
  });

  useEffect(() => {
    return () => formik.resetForm()
  }, [])


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
            value={formik.values[input.name] || ''}
            style={formik.errors[input.name] ? {border : '1px solid red'} : undefined}
          />

          <br />

        </div>
      )}

      <button type="submit"> Siguiente </button>
      {hidePreviuos ? null :
        <button type="button" onClick={() => HandlePreviuosFunction()} >Anterior</button>
      }
    </form>
  );
}

export default Form;