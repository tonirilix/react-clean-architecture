import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import itemFactory from 'app/factories/ItemFactory';
import { dddActions as actions } from '.';
import { IITem } from 'core/domain/entities/IItem';

function* getItems() {
  const data: IITem[] = yield call([itemFactory, itemFactory.getItems]);
  yield put(actions.addClient(data));
}

export function* dddSaga() {
  yield takeLatest(actions.getItems, getItems);
}
