import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRef,useEffect } from 'react';
import { apiClient } from '../../../shared/services/api-client';
import { networkOperations } from '../../../shared/services/api-client';
import Buttons from '../../../shared/components/Buttons.jsx';
import SearchPage from '../../search/pages/SearchPage.jsx'
import Firstpagerouts from '../../../routes/Firstpagerouts.jsx';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { Link } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  
  const submit = async () => {
    const userInfo = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };

    try {
      const response = await networkOperations.post(
        process.env.REACT_APP_LOGIN,
        userInfo
      ); //backend
      console.log(response);
      setMessage(response.data.message);

      if (response.data.message == "invalid userid or password") {
        setMessage(response.data.message);
      } else {
        localStorage.setItem("authtoken", response.data.authtoken);
        localStorage.setItem("email",emailRef.current.value);
       
        navigate('/');
        
       
      }
    } catch (err) {
      // console.log(err);
      setMessage("login fails");
    }
  };
   
  
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#1e1e1e',
        }}
      >
        <div
          id="form-body" 
        >
          <div id="form-ui">
            <form action="" method="post" id="form">
              <div id="form-body">
                <div id="welcome-lines">
                  
                  <div id="welcome-line-1">
                    

                       Login
                  </div>
                  {/* <div id="welcome-line-2">Login</div> */}
                </div>
                <div id="input-area">
                  <div className="form-inp" >
                    <input ref={emailRef} placeholder="Email Address" type="text" />
                  </div>
                  <div className="form-inp">
                    <input ref={passwordRef} placeholder="Password" type="password" />
                  </div>
                </div>
                <div id="submit-button-cvr">
                <Button onClick={submit} variant="contained" fullWidth> Login </Button>
                </div>
                <div id="forgot-pass">
                  {/* <a href="/signup">Create an account</a> */}
                  <Link to ='/signup'>
                  <h6>create an account</h6>
                  </Link>
                  
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
  
};
