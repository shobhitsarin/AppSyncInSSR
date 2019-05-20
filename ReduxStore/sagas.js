import { all } from 'redux-saga/effects';
import homePageSaga from "../ReduxStore/homePage/homePage.saga";

export default function* rootSaga() {
  yield all([
    homePageSaga()
]);
}