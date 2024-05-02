import React, {createContext, useState} from 'react';
import "./Registration.css";
import { Link } from 'react-router-dom';


export const Name=createContext()

const Login = () => {
  const[signVal, setSignVal]=useState("");
  const[subVal, SetSubVal]=useState(false);
  const change = (e)=>{
    setSignVal(e.target.value);
  }

  const submitForm=(e)=>{
    e.preventDefault();
    SetSubVal(true);
}


  return (
    <>
    {/* <Name.Provider value={signVal}> */}
       <div className="signup">
       <h2>Sign In</h2>
       <form className="registration" onSubmit={submitForm}>
            <input type="text"  value={signVal} onChange={change} placeholder=' UserName' required/>
            <input type="text" placeholder=' Email' required/>
            <input type="text" placeholder=" Password" required/>
            <span style={{fontSize:"12px"}}><p>Forget password! <Link  style={{textDecoration:"none"}}>Click here</Link></p></span>
            <button type="submit" >Submit</button>
            <br/>
            {
                subVal &&   <h1>this is {signVal}</h1>
            }
            <scan>If you not register,<Link to="/signup"  style={{textDecoration:"none"}}>Click here</Link></scan>
        </form> 
       </div>
       {/* </Name.Provider> */}
   
    </>
  )
}

export default Login