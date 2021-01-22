import { useState } from 'react'

export default function useForm ({ initialFields }) {
  const [fields, setFields] = useState(initialFields)
  console.log(fields)
  // const [errors, setErrors] = useState([])

  const onChange = evt => {
    const { value, name, type, checked } = evt.target
    const field = { ...fields[name] }
    field.value = type === 'checkbox' ? checked : value
    setFields({ ...fields, [name]: field })
  }

  return {
    getInput: (name) => ({ name, value: fields[name]?.value, onChange }),
    getCheckbox: (name) => ({ name, checked: fields[name].value, onChange })
  }
}
