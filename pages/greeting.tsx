// Packages
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

// Components
import Layout from '../components/Layout'

// Style
import { Container, SlimWrapper, VerticalBox } from '../styles/global'
import { Background, FormWrapper } from '../styles/index'
import { Title } from '../styles/typography'
import { Button } from '@mui/material'

// Redux Actions
import { resetFormValues } from '../containers/FormContainer/actions'

export default function Home() {
  const first_name = 'Trung',
    dispatch = useDispatch(),
    router = useRouter()

  const clearState = () => {
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
                onClick={clearState}
              >{`Not ${first_name}? Go back`}</Button>
            </FormWrapper>
          </VerticalBox>
        </SlimWrapper>
      </Container>
    </Layout>
  )
}
