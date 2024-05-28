import React, {createContext, useState} from 'react';
import "./Registration.css";
import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../media query/Formres.css";


export const Name=createContext()

const Registration = (props) => {
  const[signVal, setSignVal]=useState("");
  const[mailVal, setMailVal]=useState("");

  const change = (e)=>{
    setSignVal(e.target.value);
   
  }

  const changeEmail=(e)=>{
    setMailVal(e.target.value)
  }

  const navigate = useNavigate();

  const submitForm=(e)=>{
    e.preventDefault();
    props.handleSign(signVal,mailVal)
    navigate("/")
    Swal.fire({
      title: 'This is a Official Alert message',
      text: 'Welcome to FilmFiesta!!!',
      confirmButtonText: 'OK'
    });
}
// const seatBook=()=>{
//   Swal.fire({
//     title: 'This is a Official Alert message',
//     text: 'Please book your seat',
//     confirmButtonText: 'OK'
//   });
// }


  return (
    <>
    {/* <Name.Provider value={signVal}> */}
       <div className="signup">
       <h2>Sign Up</h2>
       <form className="registration" onSubmit={submitForm}>
            <input type="text"  value={signVal} onChange={change} placeholder=' UserName' required/>
            <input type="text"  value={mailVal} onChange={changeEmail}placeholder=' Email' required/>
            <input type="text" placeholder=" Password" required/>
            <span style={{fontSize:"12px"}} id="registration_span"><p>Forget password! <Link  style={{textDecoration:"none"}}>Click here</Link></p></span>
            <button type="submit">Submit</button>
            <br/>
            <span id="registration_span"><p>If you already register,<Link to="/login" style={{textDecoration:"none"}} >Login here</Link></p></span>
        </form> 
       </div>
       {/* </Name.Provider> */}
   
    </>
  )
}

export default Registration