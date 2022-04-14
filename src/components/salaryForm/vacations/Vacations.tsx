import { Grid, Box, Button } from '@mui/material';
import DatePickerInput from 'components/shared/DatePickerInput';
import { Field, FieldProps, FieldArray, FormikProps } from 'formik';
import React from 'react';
import { NumberInput, TextInput } from '../FormController/formInputs/textInput';
import FormSection from '../formSection';

type PropTypes = {
  numberOfVacations: number;
  setNumberOfVacations: React.Dispatch<React.SetStateAction<number>>;
};

const Vacations = ({ numberOfVacations, setNumberOfVacations }: PropTypes) => {
  return (
    <>
      {[...Array(numberOfVacations)].map((value, index) => (
        <FormSection key={index} label={`Vacation ${index + 1}`}>
          <Grid container direction="row" padding={2}>
            <Box marginRight={2}>
              <Field name={`vacations[${index}].fromDate`}>
                {({ field, form, meta }: FieldProps) => (
                  <DatePickerInput label={'From date'} field={field} form={form} meta={meta} />
                )}
              </Field>
            </Box>
            <Box>
              <Field name={`vacations[${index}].toDate`}>
                {({ field, form, meta }: FieldProps) => (
                  <DatePickerInput label={'To date'} field={field} form={form} meta={meta} />
                )}
              </Field>
            </Box>
          </Grid>
        </FormSection>
      ))}
      <Button onClick={() => setNumberOfVacations(numberOfVacations + 1)}>+ Add period</Button>
      <Button onClick={() => setNumberOfVacations(numberOfVacations - 1)}>- Remove period</Button>
    </>
  );
};

export default Vacations;
