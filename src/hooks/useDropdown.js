import { useRef, useState, useEffect } from 'react'

export default function useDropdown ({ onSelect, options }) {
  const detailsRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(null)

  useEffect(() => {
    const { current } = detailsRef
    current.addEventListener('toggle', () => setOpen(current.open))
    if (onSelect && options) {
      const [firstOption] = options
      onSelect && setSelect(firstOption)
      onSelect && onSelect(firstOption.value)
    }
  }, [])

  const handleChangeValue = (option) => {
    const { current } = detailsRef
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
