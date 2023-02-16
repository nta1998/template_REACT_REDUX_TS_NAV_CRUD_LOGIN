import React, { useEffect } from 'react'
import { getAsync, getpostAsync, selectget ,selectpost} from '../Slices/crudSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectacsses } from '../Slices/loginSlice';



const Get = () => {
  const token = useAppSelector(selectacsses);
  const data = useAppSelector(selectpost);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(token)
    dispatch(getpostAsync(token))
  }, [])
  
  return (
    <div style={{ display:'grid',gridTemplateColumns: 'auto auto auto'}}>
{data.map((pro,index)=> <div key={index} className="card" style={{ width: "15rem" ,margin:'4%'}}>
        <img src={`http://127.0.0.1:8000/static${pro.pic}`} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{pro.user}</h5>
          <p className="card-text">{pro.post}</p>
        </div>  </div>)}
    </div>
  )
}

export default Get