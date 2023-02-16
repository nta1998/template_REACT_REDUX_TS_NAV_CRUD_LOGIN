import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { editAsync, selectpost } from '../Slices/crudSlice';
import { selectacsses } from '../Slices/loginSlice'
import { ToastContainer, toast } from 'react-toastify';

const Edit = () => {
  const token = useAppSelector(selectacsses);
  const data = useAppSelector(selectpost);
  const [post, setpost] = useState("")
  const [pic, setpic] = useState<any>()
  const dispatch = useAppDispatch();
  const [to_edit, setto_edit] = useState(-1)
  const handleFileChange = (event: any) => {
    setpic(event.target.files[0]);
  };
  const add = (id:number=-1) => {
      toast("post efited", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    const formData = new FormData();
    formData.append('post', post);
    formData.append("pic", pic);
    dispatch(editAsync({ formData, token,id }))
  }

  return (
    <div style={{ display:'grid',gridTemplateColumns: 'auto auto auto'}}>{data.map((post, index) =>
      <div key={index} className="card" style={{ width: "15rem" ,margin:'4%'}}>
        <div className="card-body">
          <h5 className="card-title">{post.user}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6>
          <p className="card-text">{post.post}</p>
        </div>{to_edit !== index ?
          <button className="btn btn-danger" onClick={() => setto_edit(index)}>Edit</button>
          :
          <div>
            <div className="input-group">
              <span className="input-group-text">Post</span>
              <textarea className="form-control" aria-label="With textarea" onChange={(e) => setpost(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">add img to the post</label>
              <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
              <br/>
              <button type="button" onClick={()=>add(post.id)} className="btn btn-primary">Post</button>
            </div>
          </div>}
      </div>)
    }
        <ToastContainer /></div>
  )
}

export default Edit