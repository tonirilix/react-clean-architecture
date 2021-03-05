import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.ddd || initialState;

export const selectDdd = createSelector([selectSlice], state => state);
