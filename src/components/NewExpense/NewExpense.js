import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//это не врапер компонента
const NewExpense = (props) => {
  //lifting up method

  const saveExpenseDataHundler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddEXpnese(expenseData);
  };
  const App = () => {
    const [visible, setVisible] = React.useState(false);
    return (
      <div>
        <button onClick={() => setVisible(true)}>Show</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        {visible && <ExpenseForm onSaveExpenseDate={saveExpenseDataHundler} />}
      </div>
    );
  };
  return (
    <div className="new-expense">
      <App />
    </div>
  );
};

export default NewExpense;
