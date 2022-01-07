import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onChangeYear(e.target.value);
  };

  const years = function (startYear) {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years.map((year) => (
      <option value={year} key={year}>
        {year}
      </option>
    ));
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={props.defaultYear}>
          {years(2019 - 20)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
