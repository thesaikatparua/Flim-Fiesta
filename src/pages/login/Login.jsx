import React, { useState } from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
// import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    
    return (
      <>
      <div className='container'>
            {/* <Link to="/movies/Login" style={{ textDecoration: "none" }}> */}
              <div className="head">
                <div className="text">{action}</div>
              </div>
                    <div className="inputs">
                     {action==="Login"?<div></div>:<div className="inputt">   {/*to hide forgot passwordin sign up we used this empty div */}
                      <FaUserLarge id="icon" style={{ textDecoration: "none" }}/>
                        <input type="text" placeholder="Name"/>
                      </div>}
                      
  
                      <div className="inputt">
                      <MdEmail id="icon" style={{ textDecoration: "none" }}/>
                        <input type="email" placeholder="Email Id"/>
                      </div>
  
                      <div className="inputt">
                      <RiLockPasswordFill id="icon" style={{ textDecoration: "none" }}/>
                        <input type="password" placeholder="Password"/>
                      </div>
                      </div>
                    {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password? <span>Click Here!</span></div>} 
                    <div className="submit-container">
                      <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                    </div>
                    
      </div>
                
                {/* </Link> */}
      
      </>
    );
  };
  
  export default Login;
  
