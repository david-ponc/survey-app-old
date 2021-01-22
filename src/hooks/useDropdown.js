import { useRef, useState, useEffect } from 'react'

export default function useDropdown ({ onSelect, options, value }) {
  const detailsRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(null)

  useEffect(() => {
    const { current } = detailsRef
    current.addEventListener('toggle', () => setOpen(current.open))
    if (onSelect && options && value) {
      onSelect && setSelect(options.get(value))
      onSelect && onSelect(options.get(value).value)
    }
  }, [])

  const handleChangeValue = (option) => {
    console.log('click change value')
    setSelect(option)
    onSelect(option.value)
    hiddenOptions()
  }

  const hiddenOptions = () => {
    const { current } = detailsRef
    current.open = false
  }

  return {
    detailsRef,
    open,
    select,
    handleChangeValue,
    hiddenOptions
  }
}
