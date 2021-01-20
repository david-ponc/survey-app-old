import { useRef, useState, useEffect } from 'react'

export default function useDropdown ({ onSelect, options }) {
  const detailsRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(null)

  useEffect(() => {
    const { current } = detailsRef
    current.addEventListener('toggle', () => setOpen(current.open))
    const [firstOption] = options
    setSelect(firstOption)
    onSelect(firstOption.value)
  }, [])

  const handleChangeValue = (option) => {
    const { current } = detailsRef
    setSelect(option)
    onSelect(option.value)
    current.open = false
  }

  return {
    detailsRef,
    open,
    select,
    handleChangeValue
  }
}
