import { Grid, Box, Button } from '@mui/material';
import DatePickerInput from 'components/shared/DatePickerInput';
import { Field, FieldProps } from 'formik';
import React from 'react';
import { NumberInput, TextInput } from '../FormController/formInputs/textInput';
import FormSection from '../formSection';

type PropTypes = {
  numberOfNonBillablePeriods: number;
  setNumberOfNonBillablePeriods: React.Dispatch<React.SetStateAction<number>>;
};

const NonBillablePeriods = ({
  numberOfNonBillablePeriods,
  setNumberOfNonBillablePeriods,
}: PropTypes) => {
  return (
    <>
      {[...Array(numberOfNonBillablePeriods)].map((value, index) => (
        <FormSection key={index} label={`Non billable period ${index + 1}`}>
          <Grid container direction="row" padding={2}>
            <Box marginRight={2}>
              <Field name={`nonBillablePeriods[${index}].fromDate`}>
                {({ field, form, meta }: FieldProps) => (
                  <DatePickerInput label={'From date'} field={field} form={form} meta={meta} />
                )}
              </Field>
            </Box>
            <Box>
              <Field name={`nonBillablePeriods[${index}].toDate`}>
                {({ field, form, meta }: FieldProps) => (
                  <DatePickerInput label={'To date'} field={field} form={form} meta={meta} />
                )}
              </Field>
            </Box>
          </Grid>
        </FormSection>
      ))}
      <Button onClick={() => setNumberOfNonBillablePeriods(numberOfNonBillablePeriods + 1)}>
        + Add period
      </Button>
      <Button onClick={() => setNumberOfNonBillablePeriods(numberOfNonBillablePeriods - 1)}>
        - Remove period
      </Button>
    </>
  );
};

export default NonBillablePeriods;
