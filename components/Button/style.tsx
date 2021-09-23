import styled from 'styled-components'

interface Props {
  loading?: number
}

export const Button = styled.button<Props>`
  appearance: none;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => (props.loading ? '#00b74a' : '#4896ff')};
  width: 100%;
  position: relative;
  margin: 0.5rem 0;
  padding: 12px;
  transition: box-shadow 0.2s ease-in-out, background-color 0.35s ease-in-out,
    opacity 0.35s ease-in-out;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 2px rgba(72, 150, 255, 0.15),
      0 2px 4px rgba(72, 150, 255, 0.15), 0 4px 8px rgba(72, 150, 255, 0.15),
      0 8px 16px rgba(72, 150, 255, 0.15), 0 16px 32px rgba(72, 150, 255, 0.15),
      0 32px 64px rgba(72, 150, 255, 0.15);
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const ButtonLabel = styled.label`
  color: white;
  font-size: 1rem;
  text-align: center;
  pointer-events: none;
`

export const IconContainer = styled.div<Props>`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: white;
  font-size: 2rem;
  opacity: ${(props) => props.loading && 0};
  transition: opacity 0.35s ease-in-out;
`
