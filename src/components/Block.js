import { useState } from 'react'
import Dropdown from 'components/Dropdown'
import { BiListUl, BiParagraph } from 'react-icons/bi'
import {
  BlocksStyled,
  FormStyled,
  HeaderStyled,
  SectionStyled,
  RadioStyled,
  AddOptionStyled,
  AddBlockStyled
} from 'styles/components/block'
import { MdAdd, MdRadioButtonUnchecked } from 'react-icons/md'
import { FiPlusCircle, FiTrash2 } from 'react-icons/fi'

export default function Block ({ blocks, setBlocks }) {
  // const [fields, setFields] = useState(initialFields)
  const addNewBlock = () => {
    const newBlocks = [...blocks]
    newBlocks.push({ title: '', type: 'Text', value: '' })
    setBlocks(newBlocks)
  }

  const changeTypeBlock = (i, type, firstOption) => {
    const newBlocks = [...blocks]
    newBlocks[i].type = type === firstOption ? firstOption : type
    if (newBlocks[i].type === 'Multiple') {
      newBlocks[i].options = [{ value: '' }]
    } else {
      delete newBlocks[i].options
    }
    setBlocks(newBlocks)
    // console.table(blocks[i])
  }

  const handleChangeOptions = (news, i) => {
    const newBlocks = [...blocks]
    if (newBlocks[i]?.options) {
      newBlocks[i].options = [...news]
    } else { console.log('Problemas al actualizar las opciones del bloque') }
    setBlocks(newBlocks)
  }

  const handleChangeTitle = (evt, i) => {
    const newBlocks = [...blocks]
    newBlocks[i].title = evt.target.value
    setBlocks(newBlocks)
  }

  return (
    <BlocksStyled>
      {
        blocks.map((block, i) => (
          <FormStyled key={i}>
            <HeaderStyled>
              <input type="text" placeholder="Name block" value={block.title} onChange={evt => handleChangeTitle(evt, i)} />
              <Dropdown options={options} onSelect={(type) => changeTypeBlock(i, type, block.type)} />
            </HeaderStyled>
            <SectionStyled>
              {block.type === 'Text' && <textarea placeholder="Write your answer here" readOnly={true} />}
              {block.type === 'Multiple' && <RadioComponent options={block.options} setOptions={(news) => handleChangeOptions(news, i)} />}
            </SectionStyled>
          </FormStyled>
        ))
      }
      <AddBlockStyled onClick={addNewBlock}>
        <FiPlusCircle size={24} />
        <p>Add Block</p>
      </AddBlockStyled>
    </BlocksStyled>
  )
}

function RadioComponent ({ options, setOptions }) {
  const addNewOption = () => {
    const newOptions = [...options]
    newOptions.push({ value: '' })
    setOptions(newOptions)
  }

  const removeOption = (id) => {
    if (options.length > 1) {
      const newOptions = [...options]
      newOptions.splice(id, 1)
      setOptions(newOptions)
    } else {
      console.log('Should be at least one option')
    }
  }

  const handleChange = (evt, i) => {
    const newOptions = [...options]
    newOptions[i].value = evt.target.value
    setOptions(newOptions)
  }

  return (
    <>
      {
        options.map((option, i) => {
          return (
            <RadioStyled key={i}>
              <MdRadioButtonUnchecked size={24} />
              <input
                name="option"
                type="text"
                placeholder="Write name option here"
                value={option.value}
                onChange={evt => handleChange(evt, i)}
              />
              <FiTrash2 size={20} onClick={() => removeOption(i)}/>
            </RadioStyled>
          )
        })
      }
      <AddOptionStyled onClick={addNewOption}>
        <MdAdd size={24} />
        <p>Add option</p>
      </AddOptionStyled>
    </>
  )
}

const options = [
  {
    value: 'Text',
    content: [
      <BiParagraph key={'Text'} />,
      'Text'
    ]
  },
  {
    value: 'Multiple',
    content: [
      <BiListUl key={'Multiple'} />,
      'Multiple'
    ]
  }
]

const initialFields = [
  {
    title: '',
    type: 'Text',
    value: '',
    options: []
  }
]
