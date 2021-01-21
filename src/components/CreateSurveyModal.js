import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import Button from 'components/Button'

export default function CreateSurveyModal ({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Send name to server')
    closeModal()
  }

  return ReactDOM.createPortal(
    <>
      <OverlayStyled>
        <ModalStyled onSubmit={handleSubmit}>
          <HeaderStyled>
            <h2>New survey</h2>
            <IoClose size={20} cursor="pointer" onClick={closeModal}/>
          </HeaderStyled>
          <ContentStyled>
            <label>
              Survey name
              <input type="text" placeholder="My survey name"/>
            </label>
            <Button>Create Survey</Button>
          </ContentStyled>
        </ModalStyled>
      </OverlayStyled>
    </>,
    document.getElementById('modal-container')
  )
}

const OverlayStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,0.24);
  top: 0;
  left: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalStyled = styled.form`
  position: relative;
  z-index: 31;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: var(--gray-600);
`

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentStyled = styled.section`
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
  
  label {
    display: grid;
    grid-auto-flow: row;
    gap: 0.5rem;
    font-weight: 500;
    font-size: 0.875rem;
  }

  input {
    outline: 0;
    border: 0;
    border-radius: 0.375rem;
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: 0 0 0 1px var(--gray-300);
  }
  
  button {
    justify-self: end;
  }
`
