import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("REQUEST", workerSaga);
}

function fetchNumber(number) {
    console.log(number)
    return axios({
        method: "get",
        url: `https://numbers-api-proxy.dci-fbw121.now.sh/?number=${number}`
    });
}

function* workerSaga(action) {
    try {
        const response = yield call(fetchNumber, action.number);
        const output = response.data;

        yield put({ type: "SUCCESS", output });

    } catch (error) {
        yield put({ type: "FAILURE", error });
    }
}