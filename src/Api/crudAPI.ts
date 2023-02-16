import { User } from "../model/user";
import axios from "axios";
import { profile } from "../model/profile";
import { post } from "../model/post";
const MY_server="http://127.0.0.1:8000/"
// A mock function to mimic making an async request for data
export const get=(token:string)=>{
  return new Promise<{ data: profile[] }>((resolve) =>
    axios.get(MY_server+"profile/",{ headers: {
      'Authorization': `Bearer ${token}`
    }}).then(res => resolve({ data: res.data }))
  );
}
export const postget=(token:string)=>{
  return new Promise<{ data: post[] }>((resolve) =>
    axios.get(MY_server+"post/",{ headers: {
      'Authorization': `Bearer ${token}`
    }}).then(res => resolve({ data: res.data }))
  );
}
export const add=(post_img:File,token:string)=>{

  return new Promise<{ data: any }>((resolve,reject) =>
    axios.post(MY_server+"post/",post_img,{ headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }}).then(res => {
      resolve({ data: res.data });
    }).catch(error => {
      reject(error);
    }))
  }
export const edit=(post_img:File,token:string,id:number)=>{
  return new Promise<{ data: any }>((resolve) =>
    axios.put(MY_server+"edit/"+id,post_img,{ headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }}).then(res => resolve({ data: res.data }))
  );
}
export const delete_crud=(id:number, token:string)=>{
  return new Promise<{ data: any }>((resolve) =>
    axios.delete(MY_server+"delete/"+id,{ headers: {
      'Authorization': `Bearer ${token}`
    }}).then(res => resolve({ data: res.data }))
  );
}
