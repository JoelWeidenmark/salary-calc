import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reduxState';
import { Grid, Card, Box } from '@mui/material';
import './styles.scss';
import FormController from 'components/salaryForm/FormController';

const SalaryForm = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="siteWrapper"
      height="500px"
      padding="50px">
      <Grid item xs={12} lg={8} paddingBottom={10}>
        <Box textAlign="center">
          <h1>Salary calc</h1>
        </Box>
        <FormController />
      </Grid>
    </Grid>
  );
};

export default SalaryForm;
