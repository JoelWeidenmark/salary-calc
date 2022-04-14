import React from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { FieldProps } from 'formik';

interface PropTypes extends FieldProps {
  label: string;
}

const TextInput = ({ label, field }: PropTypes) => {
  return (
    <Grid item>
      <Box marginBottom={1}>
        <label htmlFor={label}>{label}</label>
      </Box>
      <TextField id={label} label={label} variant="outlined" size="small" {...field} />
    </Grid>
  );
};

export default TextInput;
