import { all, put, takeLatest, select, call } from 'redux-saga/effects'
import ActionType, { Actions } from './action'
import * as API from '@/api'

function* login() {
  const user = yield select((state) => state.login.user)
  try {
    const res = yield call(API.login, user)
    const data = yield res.json()
    //执行完异步网络请求，派发action
    yield put(Actions.login(data))
  } catch (error) {}
}

function* rootSaga() {
  //saga中间件拦截同步action
  yield all([takeLatest(ActionType.LOGIN, login)])
}

export default rootSaga
