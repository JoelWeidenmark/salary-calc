import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from 'reduxState/SalaryResults';

export const getCalculatedResults = createSelector(
  (state: RootStateType) => state.calculatedResults,
  (value) => {
    return value;
  },
);

// export const getCalculatedResults = createSelector(() => {
//   return idsMatch || noIds;
// });
