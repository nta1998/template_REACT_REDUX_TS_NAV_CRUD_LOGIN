import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getpostAsync, selecflag } from '../Slices/crudSlice';
import { selectlog, selectacsses,selectsingup } from '../Slices/loginSlice';
import Login from './Login';
import 'react-toastify/dist/ReactToastify.css';
import Singup from './Singup';
const Profile = () => {
  const token = useAppSelector(selectacsses);
  const is_log = useAppSelector(selectlog);
  const flag = useAppSelector(selecflag);
  const singup = useAppSelector(selectsingup);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (is_log) {
      dispatch(getpostAsync(token))
    }
  }, [is_log, flag])
  return (
    <div>
      {is_log ?
      <div>
        <div className="nav flex-column" style={{position:'sticky',top:'25%',width:'20%'}}>
     
            <Link className="nav-link active" to="/profile/get" style={{ fontSize: '20px' }}>get</Link>
            <Link className="nav-link" to="/profile/add" style={{ fontSize: '20px' }}>add</Link>
            <Link className="nav-link" to="/profile/edit" style={{ fontSize: '20px' }}>edit</Link>
            <Link className="nav-link" to="/profile/delete" style={{ fontSize: '20px' }}>delete</Link>

        </div>
        <div style={{ paddingLeft:'15%'}}>
          <Outlet></Outlet>
        </div>
      </div> :singup?<Singup></Singup>:<Login></Login>}
    </div>
  )
}

export default Profile