import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Login.css"
import { auth } from './firebase';
import axios from 'axios';
function Login() {


  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState({ email: "", password: "" });
  const [userId, setUserId] = useState(0);
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
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      setUsers({ email: email, password: password })
      // history('/')
    })
      .catch((e) => alert(e.message));
  }
  useEffect(() => {
    // console.log(users);
    const user = { email: email, password: password }
    axios.post('https://reqres.in/api/users', user).
      then(response => {
        console.log(response)
        setUserId(response.data.id)
        console.log(userId)
      })
  }, [users])

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