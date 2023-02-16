import { disconnect } from 'process';
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { deleteAsync, selecflag, selectpost } from '../Slices/crudSlice';
import { selectacsses } from '../Slices/loginSlice';
import { ToastContainer, toast } from 'react-toastify';
const Delete = () => {
  const token = useAppSelector(selectacsses);
  const data = useAppSelector(selectpost);
  const flag = useAppSelector(selecflag);
  const [onLoad, setonLoad] = useState(true)
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!onLoad) {
      toast("post deleted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
    else { setonLoad(false) }
  }, [!flag])
  return (
    <div style={{ display: 'grid', gridTemplateColumns: ' auto auto auto ' }}>
      {data.map((post, index) => <div key={index} className="card" style={{ width: "15rem", margin: '4%' }}>
        <div className="card-body">
          <h5 className="card-title">{post.user}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6>
          <p className="card-text">{post.post}</p>
          <button className="btn btn-danger" onClick={() => dispatch(deleteAsync({ "id": post.id, token }))}>delete</button>

        </div>
      </div>)}
      <ToastContainer />
    </div>
  )
}

export default Delete