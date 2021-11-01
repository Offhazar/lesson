import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    //открылы useState c первоначальным значением
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) => { //Lifting up
    setCourseGoals((prevGoals) => { 
      const updatedGoals = [...prevGoals];//открываем переменную и записываем туда старое значение
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });//добавляем обьект с помощью lifting up
      return updatedGoals;//и возвращаем updatedGoals в courseGoals
    });
  };

  const deleteItemHandler = (goalId) => { //lifting up
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);//открываем переменную и и фильтруемполученный id со всеми id
      return updatedGoals;//обновляеться courseGoals
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> //если content больше нулю CourseGoalList
    );
  }

  //на 44 передаем функцие через пропс что бы работал lifting up

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} /> 

      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
