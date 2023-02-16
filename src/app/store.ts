import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import crudReducer from '../Slices/crudSlice';
import loginReducer from '../Slices/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login : loginReducer,
    crud: crudReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
