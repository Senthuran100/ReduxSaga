import axios from "axios";
import {takeLatest, call, put} from "redux-saga/effects";


export function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST",workerSaga);
    yield takeLatest("API_CAT_REQUEST",workercatSaga);

}

function fetchDog() {
    return axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
  }

function fetchCat(){
    return axios({
        method: "get",
        url: "https://api.thecatapi.com/v1/images/search"
      });
}

export function* workerSaga(){
    try{
        const response= yield call(fetchDog);
        const dog = response.data.message;

        yield put({type:"API_CALL_SUCCESS",dog});
    }catch(e){
        yield put({type:"API_CALL_FAILURE",e});
    }
}

export function* workercatSaga(){
    try {
        const response= yield call(fetchCat);
        const cat = response.data[0].url;
        yield put({type:"API_CAT_SUCCESS",cat});
    } catch (error) {
        yield put({type:"API_CAT_FAILURE",error});
    }
}