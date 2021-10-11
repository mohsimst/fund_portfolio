import * as actionType from '../constants/portfolioConstant';

export const getDetailsReducer = (state = {shares:[]}, action) => {
   switch(action.type){
       case actionType.GET_DETAILS_SUCCESS:
            return {shares: action.payload};
      case actionType.GET_DETAILS_FAILED:
            return {error: action.payload}
        default : 
            return state;
   }
}
