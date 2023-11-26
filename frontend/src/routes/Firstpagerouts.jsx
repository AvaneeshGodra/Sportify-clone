import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Login } from '../modules/login/components/Login.jsx';
import Signup from '../modules/login/components/Signup.jsx';
import Liked from '../modules/search/Components/Liked.jsx';
import SearchPage from '../modules/search/pages/SearchPage.jsx';
import Player from '../modules/search/Components/Player.jsx';
const Firstpagerouts = () => {
  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<SearchPage/>}/>
            <Route path="login" element= {<Login/>}/>
         
              <Route path="liked" element= {<Liked/>}/>
            <Route path="/signup" element= {<Signup/>}/>
            
         
        </Routes>
      </Router>
    </>
  )
}

export default Firstpagerouts