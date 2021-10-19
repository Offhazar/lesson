import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//это не врапер компонента
const NewExpense = (props) => {
  //lifting up method
  const saveExpenseDateHundler = (data) => {
    let expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHundler} />
    </div>
  );
};

export default NewExpense;
