import React from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from './layout/Sidebar/Sidebar';
import Home from "./pages/Home/Home";
import Budget from "./pages/Budget/Budget";
import Transactions from "./pages/Transactions/Transactions";
import { SidebarProvider } from './context/sidebarContext';

import './App.css';

function App() {
  return (
    <SidebarProvider>
      <div className='app'>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
