import { Card } from '@mui/material';
import React from 'react';

type PropTypes = {
  label: string;
  children?: JSX.Element | JSX.Element[];
};

const FormSection = ({ label, children }: PropTypes) => {
  return (
    <div>
      <h2>{label}</h2>
      <Card>{children}</Card>
    </div>
  );
};

export default FormSection;
