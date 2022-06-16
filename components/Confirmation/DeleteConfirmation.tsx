import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete';

type IDeleteProps = {
  handleConfirm: () => void
  handleClose: () => void
  title: string
  description: string
}

export default function DeleteConfirmation({
  handleConfirm,
  handleClose,
  title,
  description,
}: IDeleteProps) {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" size="small">
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          autoFocus
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
