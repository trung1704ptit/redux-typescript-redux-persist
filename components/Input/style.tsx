import styled from 'styled-components'

interface Props {
  has_value?: boolean
  is_valid?: boolean
  type?: string
}

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0.75rem 0;
`

export const Label = styled.label<Props>`
  position: absolute;
  top: ${({ has_value }) => (has_value ? '-16px' : '6px')};
  left: 6px;
  font-size: ${({ has_value }) => (has_value ? '.8rem' : '1rem')};
  color: ${({ has_value }) => (has_value ? '#8c8c8c' : '#1f1f1f')};
  background-color: ${({ has_value }) => (has_value ? 'white' : 'transparent')};
  transition: top 0.25s ease-in-out, font-size 0.25s ease-in-out,
    color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  z-index: 10;
  pointer-events: none;
  padding: 6px;
  border-radius: 4px;
  backface-visibility: hidden;
`

export const StyledInput = styled.input<Props>`
  width: 100%;
  position: relative;
  appearance: none;
  border: unset;
  z-index: 5;
  font-size: 1rem;
  border-radius: 6px;
  padding: 12px;
  padding-right: ${(props) => props.type === 'password' && '44px'};
  border: ${(props) =>
    props.is_valid ? 'solid 2px #f8f8f8' : 'solid 2px #f93154'};
  background-color: #f8f8f8;
  box-shadow: unset;
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  &:focus,
  &:active {
    outline: unset;
    background-color: white;
    box-shadow: 0 0 10px #f8f8f8;
  }
`

export const VisibilityButton = styled.button`
  appearance: none;
  border: unset;
  outline: unset;
  z-index: 10;
  position: absolute;
  right: 12px;
  top: 8.5px;
  height: 24px;
  width: 24px;
  background-color: lightgray;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`
