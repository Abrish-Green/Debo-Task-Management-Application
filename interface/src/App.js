import React, { Fragment, useState, useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
  } from "react-router-dom";


import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import SignUp from './pages/AuthPage/Signup/SignUp'
import Login from './pages/AuthPage/Login/SignIn'
import Project from './pages/Projects/index'
import Member from './pages/Members/Home'
import MemberProject from './pages/Members/Project'
import '@fontsource/roboto/300.css';

import { connect } from 'react-redux'
const App = (props)=>{

  const [isAuth,setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("token") == props.auth.token){
      setIsAuth(true)

    }else{
      setIsAuth(false)
    }
  }, [isAuth])
  return (
      <React.Fragment>
          <Navbar isAuth={isAuth}/>
        <BrowserRouter>
          <Routes>
              <Route index element={<h1>Index</h1>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Manager/Home" element={<Home />} />
              <Route path="/Manager/Project/:projectId" element={<Project />} />
              <Route path="/Member/:memberId/Home" element={<Member />} />
              <Route path="/Member/:memberId/Project" element={<MemberProject />} />
              <Route path="/Member/:memberId/Task" element={<Project />} />


          </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,null)(App)