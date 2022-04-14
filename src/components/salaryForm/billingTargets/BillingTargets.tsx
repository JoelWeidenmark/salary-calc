import { Grid, Box, Button } from '@mui/material';
import DatePickerInput from 'components/shared/DatePickerInput';
import { Field, FieldProps, FieldArray, FormikProps } from 'formik';
import React from 'react';
import { NumberInput, TextInput } from '../FormController/formInputs/textInput';
import FormSection from '../formSection';

type PropTypes = {
  numberOfBillingTargets: number;
  setNumberOfBillingTargets: React.Dispatch<React.SetStateAction<number>>;
};

const BillingTargets = ({ numberOfBillingTargets, setNumberOfBillingTargets }: PropTypes) => {
  return (
    <>
      {[...Array(numberOfBillingTargets)].map((value, index) => (
        <FormSection key={index} label={`Billing target ${index + 1}`}>
          <Grid container direction="row" padding={2}>
            <Grid item xs={6}>
              <Box marginBottom={2}>
                <Field name={`billingTargets[${index}].fromDate`}>
                  {({ field, form, meta }: FieldProps) => (
                    <DatePickerInput label={'From date'} field={field} form={form} meta={meta} />
                  )}
                </Field>
              </Box>
              <Box marginBottom={2}>
                <Field name={`billingTargets[${index}].toDate`}>
                  {({ field, form, meta }: FieldProps) => (
                    <DatePickerInput label={'To date'} field={field} form={form} meta={meta} />
                  )}
                </Field>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box marginBottom={2}>
                <Field name={`billingTargets[${index}].billingRate`}>
                  {({ field, form, meta }: FieldProps) => (
                    <NumberInput label="Billing rate" field={field} form={form} meta={meta} />
                  )}
                </Field>
              </Box>
              <Box marginBottom={2}>
                <Field name={`billingTargets[${index}].targetPercentage`}>
                  {({ field, form, meta }: FieldProps) => (
                    <NumberInput label="Target percentage" field={field} form={form} meta={meta} />
                  )}
                </Field>
              </Box>
              <Box marginBottom={2}>
                <Field name={`billingTargets[${index}].actualPercentage`}>
                  {({ field, form, meta }: FieldProps) => (
                    <NumberInput label="Actual percentage" field={field} form={form} meta={meta} />
                  )}
                </Field>
              </Box>
            </Grid>
          </Grid>
        </FormSection>
      ))}
      <Button onClick={() => setNumberOfBillingTargets(numberOfBillingTargets + 1)}>
        + Add billing target
      </Button>
      <Button onClick={() => setNumberOfBillingTargets(numberOfBillingTargets - 1)}>
        - Remove billing target
      </Button>
    </>
  );
};

export default BillingTargets;
