import 'react-redux'

// Our Root State
import { RootState } from '../store/combineReducers'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
