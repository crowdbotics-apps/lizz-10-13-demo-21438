import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn23140940Reducer from '../features/SignIn23140940/redux/reducers'
import SignUp24140939Reducer from '../features/SignUp24140939/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn23140940: SignIn23140940Reducer,
SignUp24140939: SignUp24140939Reducer,

});