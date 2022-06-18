import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import { object, string, TypeOf, number } from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../../components/FormInput'
import { Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Box } from '@mui/system'

const productSchema = object({
  title: string()
    .min(1, 'Title is required')
    .max(500, 'Title must be less than 500 characters'),
  oldPrice: number().optional(),
  currentPrice: number().min(1, 'Current price is required'),
  categories: string().array().optional(),
  quantity: number().min(1, 'Quantity is required'),
  sku: string().min(1, 'SKU is required'),
  rating: number().optional(),
  images: string().array().optional(),
})

type AddNewProductInput = TypeOf<typeof productSchema>

export default function MaxWidthDialog({ handleClose }) {
  const [loading, setLoading] = React.useState(false)

  const methods = useForm<AddNewProductInput>({
    resolver: zodResolver(productSchema),
  })

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const onSubmitHandler: SubmitHandler<AddNewProductInput> = (values) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      reset()
    }, 2500)
  }

  return (
    <FormProvider {...methods}>
      <Dialog fullWidth={true} maxWidth="md" open={true} onClose={handleClose}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <DialogTitle>Create New Product</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 2, mb: 3 }}>
              <Grid item xs={12}>
                <FormInput
                  type="text"
                  label="Title"
                  name="title"
                  required={true}
                  fullWidth={true}
                  size="small"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="outlined"
              startIcon={<CloseIcon />}
              size="small"
            >
              Close
            </Button>
            <LoadingButton
              variant="contained"
              type="submit"
              startIcon={<SaveIcon />}
              disabled={loading}
              size="small"
              loading={loading}
              loadingPosition="start"
            >
              {loading ? 'Submitting' : 'Sign up'}
            </LoadingButton>
          </DialogActions>
        </Box>
      </Dialog>
    </FormProvider>
  )
}
