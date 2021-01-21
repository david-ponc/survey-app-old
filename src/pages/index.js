import { useState } from 'react'
import Layout from 'components/Layout'
import Dropdown from 'components/Dropdown'
import { BiListUl, BiParagraph } from 'react-icons/bi'
import Button from 'components/Button'
import { VscFilePdf } from 'react-icons/vsc'
import { BsFileEarmarkText } from 'react-icons/bs'
import Aside from 'components/Aside'
import Main from 'components/Main'

export default function Home () {
  const [value, setValue] = useState(null)

  return (
    <Layout title="dashboard" design="withAside">
        {/* Temporal section */}
        {/* <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: '2rem', alignItems: 'center', padding: '2rem' }}> */}
        {/*  <Dropdown options={options} onSelect={setValue} /> */}
        {/*  <Button>Publish</Button> */}
        {/*  <Button actions={actions} droppable>Export</Button> */}
        {/* </section> */}
        <Aside />
        <Main />
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

const actions = [
  {
    name: <>PDF <VscFilePdf size={20} /></>,
    onClick: () => {}
  },
  {
    name: <>Plain Text <BsFileEarmarkText size={20} /></>,
    onClick: () => {}
  }
]
