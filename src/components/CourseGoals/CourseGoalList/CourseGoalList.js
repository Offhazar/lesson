import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = (props) => {
  //в проспе наш courseGoals + функиция
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        //CourseGoalItem это лишки и плюс это служит как обертка
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem} //здесь lifting up
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
