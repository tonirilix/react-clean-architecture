import { PayloadAction } from '@reduxjs/toolkit';
import { IITem } from 'core/domain/entities/IItem';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { dddSaga } from './saga';
import { DddState } from './types';

export const initialState: DddState = {
  items: [],
};

const slice = createSlice({
  name: 'ddd',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getItems() {},
    addClient(state, action: PayloadAction<IITem[]>) {
      state.items = action.payload;
    },
  },
});

export const { actions: dddActions } = slice;

export const useDddSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: dddSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useDddSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
