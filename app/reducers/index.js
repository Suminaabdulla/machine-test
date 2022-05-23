import {combineReducers} from 'redux';
import inputsReducer from '@reducers/inputs';
import formDataReducer from '@reducers/form-data';

const reducer = combineReducers({
  inputsReducer,
  formDataReducer,
});

export default reducer;
