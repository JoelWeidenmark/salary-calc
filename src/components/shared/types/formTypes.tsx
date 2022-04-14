export type BillingTargetValues = {
  fromDate: Date;
  toDate: Date;
  billingRate: number;
  targetPercentage: number;
  actualPercentage: number;
};

export type NonBillablePeriodValues = {
  fromDate: Date;
  toDate: Date;
};

export type VacationValues = {
  fromDate: Date;
  toDate: Date;
};

export type FormValues = {
  variableSalary: number | undefined;
  fixedSalary: number | undefined;
  vacationDays: number | undefined;
  sickDays: number | undefined;
  hiredFrom: Date;
  hiredTo: Date;
  billingTargets: BillingTargetValues[];
  vacations: VacationValues[];
  nonBillablePeriods: NonBillablePeriodValues[];
};
