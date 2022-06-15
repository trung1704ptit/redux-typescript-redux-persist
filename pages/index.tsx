// Packages
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'styled-bootstrap-grid'
import { ArrowRightShort } from 'react-bootstrap-icons'
import _ from 'lodash'

// Components
// import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'

// Style
import { Container, SlimWrapper, VerticalBox } from '../styles/global'
import { Background, FormWrapper, FormRow } from '../styles/index'
import { Title } from '../styles/typography'

// Redux Actions
import { setLoading, updateField } from '../containers/FormContainer/actions'

export default function Home() {
  const { form_values, loading } = useSelector((state) => state.form),
    dispatch = useDispatch(),
    router = useRouter(),
    fields = [
      {
        col: 12,
        lg: 6,
        type: 'text',
        label: 'First Name',
        id: 'first_name',
      },
      {
        col: 12,
        lg: 6,
        type: 'text',
        label: 'Last Name',
        id: 'last_name',
      },
      {
        col: 12,
        lg: 12,
        type: 'email',
        label: 'Email Address',
        id: 'email_address',
      },
      {
        col: 12,
        lg: 12,
        type: 'password',
        label: 'Password',
        id: 'password',
      },
    ]

  useEffect(() => {
    dispatch(setLoading(false))
  }, [])

  const onSubmit = () => {
    const hasEmptyValues = _.some(form_values, _.isEmpty)

    if (hasEmptyValues) {
      // Alert user.
      alert('Please enter all fields!')
    } else {
      dispatch(setLoading(true))

      setTimeout(() => {
        router.push('/greeting')
      }, 3500)
    }
  }

  return (
    <div>
      <Container>
        <Background
          gradients={[
            ['royalblue', 'coral'],
            ['magenta', 'gold'],
            ['violet', 'royalblue'],
          ]}
          property="background"
          duration={12000}
          angle="45deg"
          className="background2"
        />

        <SlimWrapper>
          <VerticalBox>
            <FormWrapper>
              <Title style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Create an account
              </Title>
              <FormRow alignItems="center" loading={loading ? 1 : 0}>
                {fields.map(({ lg, col, type, label, id }) => (
                  <Col col={col} lg={lg} key={label}>
                    <Input
                      type={type}
                      label={label}
                      value={form_values[id]}
                      onChange={(event) => {
                        dispatch(
                          updateField({
                            id,
                            value: event.target.value,
                          })
                        )
                      }}
                    />
                  </Col>
                ))}
              </FormRow>
              <Button
                title={loading ? 'Submitting' : 'Sign up'}
                onClick={onSubmit}
                icon={<ArrowRightShort />}
                loading={loading ? 1 : 0}
                disabled={loading}
              />
            </FormWrapper>
          </VerticalBox>
        </SlimWrapper>
      </Container>
    </div>
  )
}
