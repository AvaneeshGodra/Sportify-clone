import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useRef } from "react";
import Buttons from '../../../shared/components/Buttons.jsx';
import { networkOperations } from '../../../shared/services/api-client';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [message,setMessage]=useState('');
  
  const emailRef=useRef();
  const passwordRef=useRef();
  const nameRef=useRef();
  const phoneRef=useRef();
  const [print,setPrint]=useState('');

  const  Register=async()=>{

    

    const userInfo={
      'name':nameRef.current.value,
      'email':emailRef.current.value,
      'password':passwordRef.current.value,
      'phone':phoneRef.current.value
    }
    try{
      const response=await networkOperations.post(process.env.REACT_APP_REGISTER,userInfo);
      setMessage(response.data.message) // printing message registered 
      
      // console.log('response is ', response);
      // console.log('user info',userInfo);
      
    }
    catch(err){
      setMessage('Registered failed');
    }
    // if(message == 'register sucessesfully'){ 
    // Swal.fire('Success!',`Registered sucessfully  YOUR MID IS: ${mid}`);
    // }

  }
  useEffect(()=>{
    // if(message == 'register sucessesfully') {
    //   setPrint(`Registered sucessfully  YOUR MID IS: ${mid}`)
    // }

    if(message == 'register sucessesfully'){ 
      Swal.fire('Success!',`Registered sucessfully `,'success');
      }
    else if(message==''){
      setPrint('');
    }
    else{
      // setPrint('Registered failed');
      Swal.fire('failed!','Registration Failed,Please try again','error');
    }
},[Register])


//   return (
//     <>

//     <Buttons/>

    
     
//           <TextField placeholder='Name'  type='text'  inputRef={nameRef} />
//           <TextField   placeholder='Email'  type='email'  inputRef={emailRef}/>
//           <TextField placeholder='Password'  type='password'  inputRef={passwordRef}/>
//           <TextField  placeholder='Phone'  type='text'  inputRef={phoneRef}/>
//           <button className="mb-5 btn btn-outline-primary text-center w-50"  onClick={Register}>Proceed</button> 
// </>
//   )
   
return (
//   <>

//   <p
    
//   >
//     Register
//   </p>
//   <p className="message">Signup now and get full access to our app.</p>
//   <div
//     className="flex"
//     style={{ display: 'flex', width: '100%', gap: '6px' }}
//   >
   
//     <TextField placeholder='Name'  type='text'  inputRef={nameRef} />
    
//   </div>

//   <TextField   placeholder='Email'  type='email'  inputRef={emailRef}/>
 
 
//   <TextField placeholder='Password'  type='password'  inputRef={passwordRef}/>
  
  
//   <TextField  placeholder='Phone'  type='text'  inputRef={phoneRef}/>

//   <button
//     className="mb-5 btn btn-outline-primary text-center w-50"
//     onClick={Register}
//   >
//     Proceed
//   </button>
//   <p className="signin">
//     Already have an account ?{' '}
//     <a href="/login">Already have an account ?</a>
//   </p>



//  </>
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
              
              Register</div>
            {/* <div id="welcome-line-2">Register</div> */}
          </div>
          <div id="input-area">
            <div className="form-inp" >
              <input ref={nameRef} placeholder="Name" type="text" />
            </div>
            <div className="form-inp" >
              <input ref={emailRef} placeholder="Email Address" type="text" />
            </div>
            <div className="form-inp mt-3" >
              <input ref={passwordRef} placeholder="Password" type="password" />
            </div>
            <div className="form-inp mt-3">
              <input ref={phoneRef} placeholder="Phone No" type="text" />
            </div>
          </div>
          <div id="submit-button-cvr">
          <Button onClick={Register} variant="contained" fullWidth> REGISTER </Button>
          </div>
          <div id="forgot-pass">
            {/* <a href="login">Already have an account ?</a> */}
            <Link to ='/login'>
              <h6>Already have an account ?</h6>
                  {/* <Button color='info' variant="contained" fullWidth> Already have an account ? </Button> */}
                  </Link>
          </div>
          
        </div>
      </form>
    </div>
  </div>
</div>
</>
);

}

export default Signup;