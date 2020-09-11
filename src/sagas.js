import axios from "axios";
import {takeLatest, call, put} from "redux-saga/effects";


export function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST",workerSaga);
}

function fetchDog() {
    return axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
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