import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from "./components/Products";
import ProfileEditInfo from "./components/ProfileEditInfo";
import ProfileProducts from "./components/ProfileProducts";
import ProfileSettings from "./components/ProfileSettings";
import ProductDetail from "./components/ProductDetail";
import Logout from "./components/Logout";
import Cart from "./components/Cart";
import AdminDashboard from "./components/AdminDashboard";
import AdminDashboardPayments from "./components/AdminDashboardPayments";
import AddToProduct from "./components/AddToProduct";
import PaymentsPage from "./components/PaymentsPage";

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/profile" element={<ProfileEditInfo />} />
        <Route exact path="/profile/products" element={<ProfileProducts />} />
        <Route exact path="/profile/settings" element={<ProfileSettings />} />
        <Route exact path="/productdetail" element={<ProductDetail />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/addToProduct" element={<AddToProduct />} />
        <Route exact path="/paymentsPage" element={<PaymentsPage />} />
        <Route exact path="/adminDashboard" element={<AdminDashboard />} />
        <Route exact path="/adminDashboardPayments" element={<AdminDashboardPayments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;