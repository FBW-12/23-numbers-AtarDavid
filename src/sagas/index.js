import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("REQUEST", workerSaga);
}

function fetchNumber() {
    return axios({
        method: "get",
        url: "https://numbers-api-proxy.dci-fbw121.now.sh/?number=23"
    });
}

function* workerSaga() {
    try {
        const response = yield call(fetchNumber);
        const output = response.data.message;

        yield put({ type: "SUCCESS", output });

    } catch (error) {
        yield put({ type: "FAILURE", error });
    }
}