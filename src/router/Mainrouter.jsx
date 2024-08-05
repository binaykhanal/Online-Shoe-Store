import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../components/Home";
import UserLayout from "../layout/UserLayout";
import Men from "../components/Men";
import Women from "../components/Women";
import Details from "../components/Details";
import Description from "../components/detail/Description";
import ProductEnquiry from "../components/detail/ProductEnquiry";
import Information from "../components/detail/Information";
import Reviews from "../components/detail/Reviews";
import WishlistItem from "../components/common/WishlistItem";
import Junior from "../components/Junior";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../components/admin/Dashboard";
import Customer from "../components/admin/Customer";
import Orders from "../components/admin/Orders";
import Analytcis from "../components/admin/Analytcis";
import AdminProduct from "../components/admin/AdminProduct";
import AddProducts from "../components/admin/adminproducts/AddProducts";
import UpdateProduct from "../components/admin/adminproducts/UpdateProduct";
// import ForgotPassword from "../components/ForgotPassword";
import OutletsDash from "../components/admin/Branches/OutletsDash";
import CheckoutPage from "../components/payment/CheckoutPage";
import ProtectedROutes from "./ProtectedROutes";
import UserOrder from "../components/userprofile/UserOrder";
import LoginPage from "../components/LoginPage";

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="junior" element={<Junior />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="userorder" element={<UserOrder />} />
        <Route path="wishlist" element={<WishlistItem />} />
        <Route path="details" element={<Details />}>
          <Route index element={<Description />} />
          <Route path="inquiry" element={<ProductEnquiry />} />
          <Route path="info" element={<Information />} />
          <Route path="review" element={<Reviews />} />
          <Route />
        </Route>
      </Route>
      <Route element={<ProtectedROutes />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<AdminProduct />}>
            <Route index element={<AddProducts />} />
            <Route path="update" element={<UpdateProduct />} />
          </Route>
          <Route path="outlets" element={<OutletsDash />} />
          <Route path="analytics" element={<Analytcis />} />
        </Route>
      </Route>
    </Route>
  )
);
