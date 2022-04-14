enum Quarter {
  Q1 = 'Q1',
  Q2 = 'Q2',
  Q3 = 'Q3',
  Q4 = 'Q4',
}

type SalaryPerQuarter = {
  q1?: QuarterSalary;
  q2?: QuarterSalary;
  q3?: QuarterSalary;
  q4?: QuarterSalary;
};

export type QuarterSalary = {
  quarter: Quarter;
  salary: number;
};

export type CalculatedResults = {
  salaryPerQuarter: SalaryPerQuarter;
  totalSalary: number;
  totalSalaryPerMonth: number;
};
