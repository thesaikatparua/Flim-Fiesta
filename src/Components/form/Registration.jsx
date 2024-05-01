import React from 'react'
import "./Registration.css"
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <div className="signup">
            <h2>Sign Up</h2>
          <form >
            <input type="text" placeholder=' UserName'/>
            <input type="text" placeholder=' Email' />
            <input type="text" placeholder=" Password" />
            <span style={{fontSize:"12px"}}><p>Forget password! <Link>Click here</Link></p></span>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
    </>
  )
}

export default SignUp