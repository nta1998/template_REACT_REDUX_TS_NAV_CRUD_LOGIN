import { useEffect, useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { loginAsync ,remember,to_singup} from '../Slices/loginSlice';


const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [to_remember, setto_remember] = useState(false)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(to_remember){
            dispatch(remember()) 
        }
    }, [to_remember])
    
    return (
 
        <div style={{paddingLeft:'20%',paddingRight:'20%',paddingTop:'10%',paddingBottom:'10%'}}>
                <h3>Login</h3>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@Username</span>
                <input type="text" className="form-control" placeholder="Username" onChange={(e) => setusername(e.target.value)} />
            </div>
            <br></br>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@Password</span>
                <input type="Password" className="form-control" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
            </div>
            <form>
            <div style={{ display: 'flex'}}><input type="checkbox" checked={to_remember} onChange={(e) => setto_remember(e.target.checked)}/><h5 style={{margin:'1%'}}>Remember me</h5></div>
            </form>
            <button className="btn btn-outline-success" type="button" onClick={() => dispatch(loginAsync({ username, password }))}>login</button>
            <button style={{marginLeft:'1%'}} className="btn btn-outline-primary" type="button" onClick={() => dispatch(to_singup())}>sing up</button>

        </div> 
    )
}

export default Login