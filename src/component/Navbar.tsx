import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectlog,loguot,loginAsync } from '../Slices/loginSlice';

const Navbar = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const is_log = useAppSelector(selectlog);
  const dispatch = useAppDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">template-react-redux-ts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/profile">post</Link>
        </li>
      </ul>
      {!is_log?<form className="d-flex" role="login">
        <input className="form-control me-2" type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
        <input className="form-control me-2" type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <button className="btn btn-outline-success" type="button" onClick={()=>dispatch(loginAsync({username,password}))}>login</button>
      </form>:<button className="btn btn-outline-danger" onClick={()=>dispatch(loguot())}>loguot</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar