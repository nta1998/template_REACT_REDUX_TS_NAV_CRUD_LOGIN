import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch} from './app/hooks';
import { loginrefreshAsync} from './Slices/loginSlice';


function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const token =localStorage.getItem('refresh_token')
    dispatch(loginrefreshAsync(token || ""))
  }, [])
  
  return (
    <div>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
