import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import SalaryInformation from '../salaryInformation';
import BillingTargets from '../billingTargets';
import NonBillablePeriods from '../nonBillablePeriods';
import Vacations from '../vacations';

import { FormValues } from 'components/shared/types/formTypes';
import { useDispatch } from 'react-redux';
import { setSalaryData } from 'reduxState/SalaryResults';

const FormController = () => {
  const [numberOfBillingTargets, setNumberOfBillingTargets] = useState(1);
  const [numberOfNonBillablePeriods, setNumberOfNonBillablePeriods] = useState(1);
  const [numberOfVacations, setNumberOfVacations] = useState(1);
  const dispatch = useDispatch();
  //const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/dates').then((resp) => {
  //     console.log(resp);
  //   });
  // }, []);
  const onSubmit = (formValues: FormValues) => {
    dispatch(setSalaryData(formValues));
    console.log(formValues);
  };

  const initialValues = {
    variableSalary: undefined,
    fixedSalary: undefined,
    vacationDays: undefined,
    sickDays: undefined,
    hiredFrom: new Date(),
    hiredTo: new Date(),
    billingTargets: [],
    vacations: [],
    nonBillablePeriods: [],
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, submitForm }) => {
        return (
          <Form>
            <SalaryInformation />
            <BillingTargets
              numberOfBillingTargets={numberOfBillingTargets}
              setNumberOfBillingTargets={setNumberOfBillingTargets}
            />
            <NonBillablePeriods
              numberOfNonBillablePeriods={numberOfNonBillablePeriods}
              setNumberOfNonBillablePeriods={setNumberOfNonBillablePeriods}
            />
            <Vacations
              numberOfVacations={numberOfVacations}
              setNumberOfVacations={setNumberOfVacations}
            />
            <button onClick={submitForm}>Sub</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormController;
