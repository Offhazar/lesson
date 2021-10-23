import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2021');

  const filterChangeHundler = (selectYear) => {
    console.log(selectYear);
    setfilteredYear(selectYear);
  };
  return (
    <Card className="expenses">
      {
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHundler}
        />
        // <ExpenseItem
        //   title={props.expenses[0].title}
        //   amount={props.expenses[0].amount}
        //   date={props.expenses[0].date}
        // />
        // <ExpenseItem
        //   title={props.expenses[1].title}
        //   amount={props.expenses[1].amount}
        //   date={props.expenses[1].date}
        // />
        // <ExpenseItem
        //   title={props.expenses[2].title}
        //   amount={props.expenses[2].amount}
        //   date={props.expenses[2].date}
        // /> */}
      }
      {props.expenses.map((el) => {
        return (
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
        );
      })}
    </Card>
  );
}

export default Expenses;