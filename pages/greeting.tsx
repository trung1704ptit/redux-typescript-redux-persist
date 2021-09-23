// Packages
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

// Components
import Layout from '../components/Layout'
import Button from '../components/Button'

// Style
import { Container, SlimWrapper, VerticalBox } from '../styles/global'
import { Background, FormWrapper } from '../styles/index'
import { Title } from '../styles/typography'

// Redux Actions
import { resetFormValues } from '../containers/FormContainer/actions'

export default function Home() {
  const { first_name } = useSelector((state) => state.form.form_values),
    dispatch = useDispatch(),
    router = useRouter()

  const clearState = () => {
    dispatch(resetFormValues())

    router.push('/')
  }

  return (
    <Layout title="Redux Sample Form - Welcome">
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
                Howdy, {first_name} 👋
              </Title>
              <Button
                title={`Not ${first_name}? Go back`}
                onClick={clearState}
              />
            </FormWrapper>
          </VerticalBox>
        </SlimWrapper>
      </Container>
    </Layout>
  )
}
