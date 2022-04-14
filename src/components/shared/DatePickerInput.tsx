import React from 'react';
import DatePicker from 'react-datepicker';
import { Formik, useField, useFormikContext, FieldProps } from 'formik';
import { Grid, Box } from '@mui/material';

interface PropTypes extends FieldProps {
  label: string;
}

type Props = {
  onChange: (date: Date) => void;
  label: string;
  value: Date;
};

const DatePickerInput = ({ label, field }: PropTypes) => {
  const { setFieldValue } = useFormikContext();

  console.log(label);
  return (
    <Grid item>
      <Box marginBottom={2}>
        <label htmlFor={label}>{label}</label>
      </Box>
      <DatePicker onChange={(val) => setFieldValue(field.name, val)} selected={field.value} />
    </Grid>
  );
};

export default DatePickerInput;
