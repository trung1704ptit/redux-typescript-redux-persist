import { ChangeEventHandler, useEffect, useState } from 'react'
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons'

// Style
import { InputWrapper, Label, StyledInput, VisibilityButton } from './style'

interface Props {
  label: string
  value?: string
  onChange?: ChangeEventHandler<any> | undefined
  type: string
}

const Input = ({ label, value, onChange, type }: Props) => {
  const [focused, setFocus] = useState(false),
    [has_value, setHasValue] = useState(false),
    [valid, setValidity] = useState(true),
    [local_type, setLocalType] = useState(type)

  // Even though this is a redux example application, we are still making use of local state.
  // Why? Because if we were controlling the local state variables at the top level, then every
  // input component would have the same values for focused, hasValue, and valid. Thus, the
  // first_name, and last_name inputs would both have their labels animate even if only
  // one of them was focused or had a value.

  const blurHandler = () => {
    if (type === 'email') {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      setValidity(re.test(String(value).toLowerCase()))
    }

    value === '' && setFocus(false)
  }

  const toggleType = () => {
    local_type === 'password' ? setLocalType('text') : setLocalType('password')
  }

  useEffect(() => {
    setHasValue(value !== '' || focused)
  }, [value, focused])

  return (
    <InputWrapper>
      <Label has_value={has_value}>{label}</Label>
      <StyledInput
        type={local_type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={blurHandler}
        is_valid={valid}
      />

      {type === 'password' ? (
        <VisibilityButton onClick={toggleType}>
          {local_type === 'text' ? <EyeSlashFill /> : <EyeFill />}
        </VisibilityButton>
      ) : null}
    </InputWrapper>
  )
}

export default Input
