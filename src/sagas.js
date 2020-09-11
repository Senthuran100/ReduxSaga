import axios from "axios";
import {takeLatest, call, put} from "redux-saga/effects";


export function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST",workerSaga);
    yield takeLatest("API_CAT_REQUEST",workercatSaga);
}

function fetchCall(url) {
    return axios({
      method: "get",
      url: url
    });
  }

export function* workerSaga(){
    try{
        const response= yield call(fetchCall("https://dog.ceo/api/breeds/image/random"));
        const dog = response.data.message;

        yield put({type:"API_CALL_SUCCESS",dog});
    }catch(e){
        yield put({type:"API_CALL_FAILURE",e});
    }
}

export function* workercatSaga(){
    try {
        const response= yield call(fetchCall("https://api.thecatapi.com/v1/images/search"));
        const cat = response.data.url;
        yield put({type:"API_CAT_SUCCESS",cat});
    } catch (error) {
        yield put({type:"API_CAT_FAILURE",error});
    }
}