import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChat';

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2021');

  const filterChangeHundler = (selectYear) => {
    console.log(selectYear);
    setfilteredYear(selectYear);
  };

  const expenseFilter = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHundler}
      />
      <ExpensesChart items={expenseFilter} />
      <ExpensesList expenses={expenseFilter} />
    </Card>
  );
}

export default Expenses;
