import { styled } from '@mui/system'
import { Gradient } from 'react-gradient'

interface Props {
  loading?: number
}

export const Background = styled(Gradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

export const FormWrapper = styled('div')`
  background-color: white;
  flex: 1;
  min-height: 250px;
  border-radius: 0.75rem;
  width: 100%;
  overflow: hidden;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03),
    0 16px 32px rgba(0, 0, 0, 0.03), 0 32px 64px rgba(0, 0, 0, 0.03);
`

export const FormRow = styled('div')<Props>`
  max-height: ${(props) => (props.loading ? '0' : '600px')};
  overflow: hidden;
  transition: max-height 0.35s ease-in-out, opacity 0.35s ease-in-out;
`
