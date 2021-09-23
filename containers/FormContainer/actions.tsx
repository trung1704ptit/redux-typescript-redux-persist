import * as Constants from './constants'

interface update_object {
  id: string
  value: string
}

// Set Actions
export const setLoading = (payload: boolean) => {
  return {
    type: Constants.SET_LOADING,
    payload,
  }
}

// Update Actions
export const updateField = (object: update_object) => {
  return {
    type: Constants.UPDATE_FIELD,
    object,
  }
}

// Reset Actions
export const resetFormValues = () => {
  return {
    type: Constants.RESET_FORM_VALUES,
  }
}
