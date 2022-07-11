import React from "react";
import { useReducer } from "react";

export const actionType = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SET_DATA: "SET_DATA",
  SET_DATA_COUNT: "SET_DATA_COUNT",
  SET_STATE: 'SET_STATE'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.LOADING:
      return { ...state, loading: action.payload };
    case actionType.ERROR:
      return { ...state, error: action.payload};
    case actionType.SET_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        dataCount: action.payload.dataCount,
      };
      case actionType.SET_STATE: 
      return (action.payload)
    default:
      return state;
  }
};

const useStarWarsPeople = (initialState) => {
  const starWarsPeopleReducer = useReducer(reducer, initialState);
  return starWarsPeopleReducer;
};

export default useStarWarsPeople;
