import React from 'react';
import FormSection from '../formSection';
import { Field, FieldProps, Formik } from 'formik';
import { TextInput } from '../FormController/formInputs/textInput';
import { Grid, TextField, Box } from '@mui/material';
import { useFormik } from 'formik';

const SalaryInformation = () => {
  return (
    <FormSection label="Basic salary information">
      <Grid container direction="row" padding={2}>
        <Grid item xs={6}>
          <Box marginBottom={2}>
            <Field name="fixedSalary">
              {({ field, form, meta }: FieldProps) => (
                <TextInput label="Fixed salary" field={field} form={form} meta={meta} />
              )}
            </Field>
          </Box>
          <Box marginBottom={2}>
            <Field name="variableSalary">
              {({ field, form, meta }: FieldProps) => (
                <TextInput label="Variable salary" field={field} form={form} meta={meta} />
              )}
            </Field>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box marginBottom={2}>
            <Field name="vacationDays">
              {({ field, form, meta }: FieldProps) => (
                <TextInput label="Vacation days" field={field} form={form} meta={meta} />
              )}
            </Field>
          </Box>
          <Box marginBottom={2}>
            <Field name="sickDays">
              {({ field, form, meta }: FieldProps) => (
                <TextInput label="Estimated sick days" field={field} form={form} meta={meta} />
              )}
            </Field>
          </Box>
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default SalaryInformation;
