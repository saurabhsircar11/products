import axios from "axios";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  ADD_ITEM,
} from "../../constants/actionConstants";

export function getData() {
  return {
    type: FETCHING_DATA,
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(getDataSuccess(res.data)))
      .catch((err) => {
        dispatch(getDataFailure());
      });
  };
}

export function  addItem(data)
{
    return {
        type:ADD_ITEM,
        payload:data
    }
}
