import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Login.css"
import users from '../users_data';
import { auth } from './firebase';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [currentUser, setUsers] = useState([{ email: "", password: "" }]);
  const Mylogin = (event) => {
    event.preventDefault(); //Stop refreshing !!!

    // do login login......

    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      // Logged in....rediect home page
      history('/');
    })
      .catch((e) => {
        alert(e.message)
      })
  }

  const Myregister = (event) => {
    event.preventDefault(); //Stop refreshing !!!
    // do register logic......
    // console.log(email);
    // console.log(password);
    // setUsers(currentUser => [...currentUser, { email: email, password: password },]);
    // console.log(currentUser);
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      // created a user
      history('/');

    })
      .catch((e) => alert(e.message));
  }

  return (
    <div className="My_Login">
      <Link to="/">
        <img className='My_login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' />
      </Link>

      <div className='My_login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(event) => {
            setEmail(event.target.value)
          }} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={(event) => {
            setPassword(event.target.value)
          }} type="password" />
          <button onClick={Mylogin} type='submit' className='My_login_signInButton'>Sign in</button>
        </form>

        <p>
          By signing-in you agree to amazon's privacy policy
        </p>
        <button onClick={Myregister} className='My_login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login