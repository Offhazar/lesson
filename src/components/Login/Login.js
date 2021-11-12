import classes from './Login.module.css';
import React, { useReducer, useState } from 'react';

const emailReducer = (prevenState, action) => {
  if (action.type === 'USER_NAME') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }
  if (action.type === 'NAMEstate_WARNING') {
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    };
  }
};

const Login = (props) => {
  const [emailState, dispatEmail] = useReducer(emailLoginRuducer, {
    value: '',

    isValid: false,
  });

  const usernameHundler = (event) => {
    dispatEmail({ type: 'USER_NAME', value: event.target.value });
  };

  return (
    <form action="" onSubmit={formChangeHandler} className={classes.form}>
      <h1 className={classes.form__title}>Sign Up</h1>
      <p className={classes.form__description}>
        Login here using your username(email) and password
      </p>
      <div className={classes.form__group}>
        <input
          type="text"
          id="name"
          className={classes.form__input}
          placeholder=" "
          autocomplete="off"
        />
        <label for="name" className={classes.form__label}>
          Username
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          type="text"
          id="email"
          className={classes.form__input}
          placeholder=" "
          autocomplete="off"
        />
        <label for="email" className={classes.form__label}>
          Email Adress
        </label>
      </div>
      <div className={classes.form__group}>
        <input
          type="password"
          id="password"
          className={classes.form__input}
          placeholder=" "
        />
        <label for="password" className={classes.form__label}>
          Password
        </label>
      </div>
      {console.log(form)}
      <button type="submit" className={classes.form__button}>
        Log In
      </button>
    </form>
  );
};
export default Login;
