import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure } from './tasksToolkit';

function* fetchTasksSaga() {
  try {
    const response = yield call(fetch, 'https://671e62361dfc429919822348.mockapi.io/ListProduct/Api_TaskList');
    const data = yield response.json();
    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error.toString()));
  }
}

export function* watchFetchTasks() {
  yield takeLatest(fetchTasksStart.type, fetchTasksSaga);
}
