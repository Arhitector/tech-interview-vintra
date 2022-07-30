import React, { useEffect } from "react";
import styled from 'styled-components';

import Errors from '../Error';
import { useFetchFunc } from "../../hooks/useFetch";
import {AUTH_HOST} from "../../variables";

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 24px;
    width: 200px;
    border: 2px solid #ccc;
    border-radius: 14px;
    form, .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .input-container {
      margin-bottom: 20px;
    }
    label {
      margin-bottom: 10px;
    }
    input {
      height: 24px;
    }
    .button-container input {
      margin-top: 20xp;
      border-radius: 14px;
      width: 100px;
      border: none;
      margin-bottom: 4px;
      box-shadow: 1px 1px 4px #222;
      background-color: lightskyblue;
      &:hover {
        cursor: pointer;
        margin-top: 4px;
        margin-bottom: 0;
        transform: translateY(-4px) ;
        box-shadow: 2px 4px 4px #222;
      }
    }
`;

const Login = () => {
  const { data, handleFetch, error } = useFetchFunc();
    const handleSubmit = (event) => {
        event.preventDefault();
        const { uname, pass } = document.forms[0];
        handleFetch({
          pathLink: AUTH_HOST,
          requestData: JSON.stringify({ username: uname.value, password: pass.value}),
          method: 'POST'
        });
      };
  useEffect(() => {
    if (data?.access_token) {
      // put token into cookies
    }
  }, [data])
  return (
    <>
    <Errors error={error}/>
      <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </LoginWrapper>
   </>
  );
}

export default Login;