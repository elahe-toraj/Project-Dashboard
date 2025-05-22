import React from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from './layout/Sidebar/Sidebar';
import Home from "./pages/Home/Home";
import Budget from "./pages/Budget/Budget";
import Transactions from "./pages/Transactions/Transactions";
// بقیه صفحات رو به همین صورت اضافه کن
// import Subscriptions from "./pages/Subscriptions/Subscriptions";
// import Loans from "./pages/Loans/Loans";
// import Reports from "./pages/Reports/Reports";
// import Savings from "./pages/Savings/Savings";
// import FinancialAdvice from "./pages/FinancialAdvice/FinancialAdvice";
// import Account from "./pages/Account/Account";
// import Settings from "./pages/Settings/Settings";

import './App.css';

function App() {
  return (
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
  );
}

export default App;
