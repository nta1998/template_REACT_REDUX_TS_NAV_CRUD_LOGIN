import { User } from "../model/user";
import axios from "axios";
const MY_server="http://127.0.0.1:8000/"
// A mock function to mimic making an async request for data
export const login=(user:User)=>{
  return new Promise<{ data: any }>((resolve,reject) =>
    axios.post(MY_server+"login/",user).then(res => {
      resolve({ data: res.data });
    }).catch(error => {
      reject(error);
    }))
  }
export const refresh=(refresh:string)=>{
  return new Promise<{ data: any }>((resolve) =>
    axios.post(MY_server+"token/refresh/",{refresh}).then(res => resolve({ data: res.data }))
  );
}
export const singup=(user:User)=>{
  return new Promise<{ data: any }>((resolve) =>
    axios.post(MY_server+"singup/",user).then(res => resolve({ data: res.data }))
  );
}


