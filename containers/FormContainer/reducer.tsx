import * as constants from './constants'

export interface IState {
  loading: boolean
  formValues: {
    first_name: string
    last_name: string
    email_address: string
    password: string
  }
}

export const initial_state: IState = {
  loading: false,
  formValues: {
    first_name: '',
    last_name: '',
    email_address: '',
    password: '',
  },
}

export default function startReducer(state = initial_state, action: any) {
  switch (action.type) {
    // Setters
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    // Updates
    case constants.UPDATE_FIELD:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.object.id]: action.object.value,
        },
      }

    // Reset
    case constants.RESET_FORM_VALUES:
      return {
        ...state,
        formValues: initial_state.formValues,
      }

    default:
      return state
  }
}
