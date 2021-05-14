import { all, put, takeLatest } from 'redux-saga/effects'
import ActionType, { Actions } from './action'

function* login(params) {
  console.log(params)
  try {
    const res = yield fetch('')
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
