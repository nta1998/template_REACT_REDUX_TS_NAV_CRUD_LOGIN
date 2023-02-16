import { disconnect } from 'process';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addAsync } from '../Slices/crudSlice';
import { selectacsses } from '../Slices/loginSlice';

const Add = () => {
  const token = useAppSelector(selectacsses);
  const dispatch = useAppDispatch();
  const [post, setpost] = useState("")
  const [pic, setpic] = useState<any>()
  const handleFileChange = (event:any) => {
    setpic(event.target.files[0]);
  };
  const add=()=>{
    toast("posting........", {
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
    dispatch(addAsync({formData,token}))
        }
        
  return (
    
    <div style={{paddingRight:"8%"}}>
          <ToastContainer />
      <div className="input-group">
        <span className="input-group-text">Post</span>
        <textarea className="form-control" aria-label="With textarea" onChange={(e)=>setpost(e.target.value)}></textarea>
      </div><br></br>
      <div className="mb-3">
        <label className="form-label">add img to the post</label>
        <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
      </div><br></br>
      <button type="button" onClick={()=>add()} className="btn btn-primary">Post</button>
    </div>
  )
}

export default Add