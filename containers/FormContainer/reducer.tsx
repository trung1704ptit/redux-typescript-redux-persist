import * as Constants from './constants'

export interface IState {
  loading: boolean
  form_values: {
    first_name: string
    last_name: string
    email_address: string
    password: string
  }
  _persist: any
}

export const initial_state: IState = {
  loading: false,
  form_values: {
    first_name: '',
    last_name: '',
    email_address: '',
    password: '',
  },
  _persist: '',
}

export default function startReducer(state = initial_state, action: any) {
  switch (action.type) {
    // Setters
    case Constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    // Updates
    case Constants.UPDATE_FIELD:
      return {
        ...state,
        form_values: {
          ...state.form_values,
          [action.object.id]: action.object.value,
        },
      }

    // Reset
    case Constants.RESET_FORM_VALUES:
      return {
        ...state,
        form_values: initial_state.form_values,
      }

    default:
      return state
  }
}
