import { useState } from 'react'
import Layout from 'components/Layout'
import Dropdown from 'components/Dropdown'
import { BiListUl, BiParagraph } from 'react-icons/bi'

export default function Home () {
  const [value, setValue] = useState(null)

  return (
    <Layout title="dashboard">
      <Dropdown options={options} onSelect={setValue}>
        {options[0].content}
      </Dropdown>
    </Layout>
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
