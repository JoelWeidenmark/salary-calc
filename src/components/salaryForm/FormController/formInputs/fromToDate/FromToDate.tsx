import React, { useState } from 'react';
import DatePickerInput from 'components/shared/DatePickerInput';
import './styles.scss';

const FromToDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="wrapper">
      {/* <DatePickerInput
        label="Start Date"
        value={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
      <DatePickerInput
        label="End Date"
        value={endDate}
        onChange={(date: Date) => setEndDate(date)}
      /> */}
    </div>
  );
};

export default FromToDate;
