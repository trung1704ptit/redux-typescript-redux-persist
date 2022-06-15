// Packages
import { EventHandler, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { some, isEmpty } from 'lodash'
import { toast } from 'react-toastify'
import {
  Box,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
  Button,
  TextField,
  Grid,
  Checkbox,
} from '@mui/material'
import { Container, SlimWrapper, VerticalBox } from '../styles/global'
import { Background, FormWrapper, FormRow } from '../styles/index'
import { setLoading, updateField } from '../containers/FormContainer/actions'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { literal, object, string, TypeOf } from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../components/FormInput'

const registerSchema = object({
  firstName: string()
    .min(1, 'First name is required')
    .max(100, 'First name must be less than 100 characters'),
  lastName: string()
    .min(1, 'Last name is required')
    .max(100, 'Last name must be less than 100 characters'),
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password'),
  terms: literal(true, {
    invalid_type_error: 'Accept Terms is required',
  }),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
})

type RegisterInput = TypeOf<typeof registerSchema>

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const fields = [
    {
      col: 12,
      lg: 6,
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      required: true,
    },
    {
      col: 12,
      lg: 6,
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      required: true,
    },
    {
      col: 12,
      lg: 12,
      type: 'email',
      name: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      col: 12,
      lg: 12,
      type: 'password',
      name: 'password',
      label: 'Password',
      required: true,
    },
    {
      col: 12,
      lg: 12,
      type: 'password',
      name: 'passwordConfirm',
      label: 'Password Confirm',
      required: true,
    },
  ]

  const [loading, setLoading] = useState(false)
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods

  useEffect(() => {
    // reset form after submit successfully
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful])

  useEffect(() => {
    setLoading(false)
  }, [])

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values)

    setTimeout(() => {
      router.push('/greeting')
    }, 3500)
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
              <FormProvider {...methods}>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <Typography
                    component="h4"
                    variant="h4"
                    sx={{ textAlign: 'center', mb: 2 }}
                  >
                    Create an account
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 2, mb: 3 }}>
                    {fields.map(({ lg, col, type, label, required, name }) => (
                      <Grid item xs={col} lg={lg} key={name}>
                        <FormInput
                          type={type}
                          label={label}
                          name={name}
                          required={required}
                          fullWidth={true}
                        />
                      </Grid>
                    ))}
                  </Grid>

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox required />}
                      {...register('terms')}
                      label={
                        <Typography
                          color={errors['terms'] ? 'error' : 'inherit'}
                        >
                          Accept Terms and Conditions
                        </Typography>
                      }
                    />
                    <FormHelperText error={!!errors['terms']}>
                      {errors['terms'] ? errors['terms'].message : ''}
                    </FormHelperText>
                  </FormGroup>

                  <Button
                    variant="contained"
                    type="submit"
                    startIcon={<PersonAddAltIcon />}
                    disabled={loading}
                    fullWidth={true}
                    size="large"
                  >
                    {loading ? 'Submitting' : 'Sign up'}
                  </Button>
                </Box>
              </FormProvider>
            </FormWrapper>
          </VerticalBox>
        </SlimWrapper>
      </Container>
    </div>
  )
}
