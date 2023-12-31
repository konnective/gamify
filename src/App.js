// import logo from './logo.svg';
// import './App.css';

import Home from './pages/Home';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Addtask from './pages/Addtask';
import Goals from './pages/Goals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import { useEffect, useState } from 'react';

// Create a client
const queryClient = new QueryClient();

function App() {
  const user = localStorage.getItem('user');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/gamify" element={user ? <Home /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/task" element={<Addtask />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
