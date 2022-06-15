// import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistPartial } from 'redux-persist/lib/persistReducer'

// // Import our reducers here.
// import form_reducer, {
//   IState as IFormState,
// } from '../containers/FormContainer/reducer'

// interface IAppState {
//   form: IFormState & PersistPartial
// }

// const form_persist_config = {
//   key: 'form',
//   storage,
//   blacklist: ['loading'],
// }

// const rootReducer = combineReducers<IAppState>({
//   form: persistReducer(form_persist_config, form_reducer),
// })

// export type RootState = ReturnType<typeof rootReducer>

// export default rootReducer



// no persisting
import { combineReducers } from 'redux'

// Import our reducers here.
import form_reducer, {
  IState as IFormState,
} from '../containers/FormContainer/reducer'

interface IAppState {
  form: IFormState
}



const rootReducer = combineReducers<IAppState>({
  form: form_reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
