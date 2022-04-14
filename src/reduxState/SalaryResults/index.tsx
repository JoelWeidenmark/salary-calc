import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from 'components/shared/types/formTypes';
import { CalculatedResults } from 'components/shared/types/results';

export interface RootStateType {
  calculatedResults: CalculatedResults;
  formValues: FormValues;
}

const initialState: RootStateType = {
  calculatedResults: {
    salaryPerQuarter: {},
    totalSalary: 0,
    totalSalaryPerMonth: 0,
  },
  formValues: {
    variableSalary: undefined,
    fixedSalary: undefined,
    vacationDays: undefined,
    sickDays: undefined,
    hiredFrom: new Date(),
    hiredTo: new Date(),
    billingTargets: [],
    vacations: [],
    nonBillablePeriods: [],
  },
};

export const salaryResults = createSlice({
  name: 'salaryResults',
  initialState,
  reducers: {
    // fetchQuestionnairesStart: {
    //   prepare: (params) => ({ payload: {}, meta: { params } }),
    //   reducer(draftState, action) {
    //     draftState.overview.meta.loading = true;
    //     draftState.overview.meta.params = action.meta.params;

    //     draftState.overview.error = null;
    //   },
    // },
    setSalaryData: {
      prepare(payload: FormValues) {
        return { payload };
      },
      reducer(state, action: PayloadAction<FormValues>) {
        state.formValues = action.payload;
      },
    },
    setCalculatedSalary: {
      prepare(payload: FormValues) {
        return { payload };
      },
      reducer(state, action: PayloadAction<FormValues>) {
        console.log(action.payload);
        console.log('js');
      },
    },
  },
});

export const { setSalaryData, setCalculatedSalary } = salaryResults.actions;

export default salaryResults.reducer;
