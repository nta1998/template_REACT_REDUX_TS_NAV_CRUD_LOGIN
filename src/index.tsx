import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Profile from './component/Post';
import Home from './component/Home';
import Footer from './component/Footer';
import Get from './component/Get';
import Add from './component/Add';
import Edit from './component/Edit';
import Delete from './component/Delete';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />}>
          <Route path="/home" element={<Home></Home>} />
            <Route path="/profile" element={<Profile></Profile>}>
            <Route path="/profile/get" element={<Get></Get>} />
            <Route path="/profile/add" element={<Add></Add>} />
            <Route path="/profile/edit" element={<Edit></Edit>} />
            <Route path="/profile/delete" element={<Delete></Delete>} />
            </Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
