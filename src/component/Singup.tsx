import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { singuphAsync,to_singup } from '../Slices/loginSlice'

const Singup = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const dispatch = useAppDispatch();
  return (
    <div style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%', paddingBottom: '10%' }}>
      <h3>sing-up</h3>
      <br/>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@Username</span>
        <input type="text" className="form-control" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
      </div><br/>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@Password</span>
        <input type="text" className="form-control" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
      </div><br/>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@Email</span>
        <input type="text" className="form-control" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
      </div><br/>
      <button className="btn btn-outline-success" type="button" onClick={()=>dispatch(singuphAsync({username,password,email}))}>singup</button>
      <button style={{marginLeft:'1%'}} className="btn btn-outline-primary" type="button" onClick={() => dispatch(to_singup())}>login</button>

    </div>
  )
}

export default Singup