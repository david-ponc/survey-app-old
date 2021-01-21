import { useState } from 'react'
import Dropdown from 'components/Dropdown'
import { BiListUl, BiParagraph } from 'react-icons/bi'
import { BlocksStyled, FormStyled, HeaderStyled, SectionStyled, RadioStyled, AddOptionStyled, AddBlockStyled } from 'styles/components/block'
import { MdAdd, MdRadioButtonUnchecked } from 'react-icons/md'
import { FiPlusCircle, FiTrash2 } from 'react-icons/fi'

export default function Block () {
  const [blocks, setBlocks] = useState([...initialBlocks])

  const addNewBlock = () => {
    const newBlocks = [...blocks]
    newBlocks.push({ name: '', type: 'Text' })
    setBlocks(newBlocks)
  }

  const changeTypeBlock = (id, type, firstOption) => {
    const newBlocks = [...blocks]
    newBlocks[id].type = type === firstOption ? firstOption : type
    setBlocks(newBlocks)
  }

  return (
    <BlocksStyled>
      {
        blocks.map((block, i) => {
          return (
            <FormStyled key={i}>
              <HeaderStyled>
                <input type="text" placeholder="Name block"/>
                <Dropdown options={options} onSelect={(type) => changeTypeBlock(i, type, block.type)} />
              </HeaderStyled>
              <SectionStyled>
                {block.type === 'Text' && <textarea placeholder="Write your answer here" readOnly={true} />}
                {block.type === 'Multiple' && <RadioComponent />}
              </SectionStyled>
            </FormStyled>
          )
        })
      }
      <AddBlockStyled onClick={addNewBlock}>
        <FiPlusCircle size={24} />
        <p>Add Block</p>
      </AddBlockStyled>
    </BlocksStyled>
  )
}

function RadioComponent () {
  const [options, setOptions] = useState([...initialOptions])

  const addNewOption = () => {
    const newOptions = [...options]
    newOptions.push({ name: `Write name option ${options.length + 1}` })
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
  return (
    <>
      {
        options.map((option, i) => {
          return (
            <RadioStyled key={i}>
              <MdRadioButtonUnchecked size={24} />
              <input type="text" placeholder={option.name}/>
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

const initialBlocks = [
  {
    name: '',
    type: 'Text'
  }
]

const initialOptions = [
  {
    name: 'Write name option 1'
  }
]

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
