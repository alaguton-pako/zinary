import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Layout from "../Components/Layout";
import Dashboard from "../Pages/Dashboard";
import Loans from "../Pages/Loans";
import ShortLoans from "../Pages/ShortLoans";
import InstallmentLoans from "../Pages/InstallmentLoans";
import Transactions from "../Pages/Transactions";
import Users from "../Pages/Users";
import Payment from "../Pages/Payment";
import Wallet from "../Pages/Wallet";
import Staff from "../Pages/Staff";
import AuditTrail from "../Pages/AuditTrail";
import Setting from "../Pages/Setting";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="short-loans" element={<ShortLoans />} />
            <Route path="installment-loans" element={<InstallmentLoans />} />
            <Route path="loans" element={<Loans />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="users" element={<Users />} />
            <Route path="payments" element={<Payment />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="staff" element={<Staff />} />
            <Route path="audit-trail" element={<AuditTrail />} />
            <Route path="settings" element={<Setting />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
