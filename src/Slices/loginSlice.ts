import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login ,refresh,singup} from '../Api/loginAPI';
import { User } from '../model/user';
import { RootState, AppThunk } from '../app/store';


export interface CounterState {
  user: User[];
  acsses: string;
  refresh: string;
  login: boolean
  to_remember:boolean
  loginreject:boolean
}

const initialState: CounterState = {
  user: [],
  refresh:"",
  acsses: '',
  login: false,
  to_remember:false,
  loginreject:false
};
export const loginAsync = createAsyncThunk(
  'login/login',
  async (user: User) => {
   const response = await login(user);
    return response.data;
  }
);
export const loginrefreshAsync = createAsyncThunk(
  'login/refresh',
  async (token: string) => {
   const response = await refresh(token);
    return response.data;
  }
);
export const singuphAsync = createAsyncThunk(
  'login/singup',
  async (user: User) => {
   const response = await singup(user);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loguot: (state) => {
      state.login = false
      state.to_remember = false;
      state.refresh = ""
      localStorage.setItem("refresh_token",state.refresh) 
    } , 
    remember: (state) => {
      state.to_remember = true
    },
    to_singup: (state) => {
      state.loginreject = !state.loginreject
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.acsses = action.payload.access
        state.refresh = action.payload.refresh
        state.login = true
        if(state.to_remember){
          localStorage.setItem("refresh_token",state.refresh) 
         }
      })
      .addCase(loginrefreshAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.acsses = action.payload.access
        state.refresh = action.payload.refresh
        localStorage.setItem("refresh_token",state.refresh) 
        state.login = true
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loginreject = true
         });
  },
}); 

export const {loguot,remember,to_singup} = loginSlice.actions;
export const selectacsses = (state: RootState) => state.login.acsses
export const selecrefresh = (state: RootState) => state.login.refresh
export const selectlog = (state: RootState) => state.login.login
export const selectsingup = (state: RootState) => state.login.loginreject

export default loginSlice.reducer;


