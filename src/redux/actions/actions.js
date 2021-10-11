
import React from 'react';
import axios from 'axios';
import * as action from '../constants/portfolioConstant'

const URL = 'http://localhost:3003/shares';

export const getDetails = () => async (dispatch) => {
    try{
       const { data } = await axios.get(URL);
       dispatch({
           type: action.GET_DETAILS_SUCCESS,
           payload:data
       });
    }catch(error){
        dispatch({
            type: action.GET_DETAILS_FAILED,
            payload:error.response
        })
    }
}

