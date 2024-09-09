import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.tsx';
import { HelmetProvider } from 'react-helmet-async';
import Loading from './components/spinner/Loading.tsx';
import SellWithUsPage from './pages/SellWithUs.tsx';
import Sell from './pages/Sell.tsx';
import Services from './pages/Services.tsx';
import AboutOurProducts from './pages/AboutOurProducts.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Contact from './pages/ContactUs.tsx';
import ServiceDetailedView from './pages/ServiceDetailedView.tsx';
import CategoriesDetailedView from './pages/CategoriesDetailedView.tsx';
import Cart from './pages/Cart.tsx';
import RepairDetail from './pages/RepairDetail.tsx';
import CategoryDetail from './pages/CategoryDetail.tsx'
import Checkout from './pages/Checkout.tsx';
import BookingPage from './pages/BookingPage.tsx';
import Dashboard from "./pages/Dashboard";
import Login from "./components/auth/Login";
import Products from "./pages/Products";
import Users from "./pages/users";
import Feedback from "./pages/Feedback";
import AdminProtectedRoutes from "./utils/AdminProtectedRoutes.tsx";
import Orders from "./pages/Orders";
import Transactions from './components/admin-dashboard/transactions/Transactions.tsx'
// Lazy load the Home component
const Home = React.lazy(() => import('./pages/Home.tsx'));

const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Sell */}
            <Route path='/sell-with-us' element={<SellWithUsPage />} />
            <Route path='/sell-with-us/sell' element={<Sell />} />
            {/* Services */}
            <Route path='/services' element={<Services />} />
            <Route path='/services/:id' element={<ServiceDetailedView />} />
            {/* Categories */}
            <Route path='/categories/:id' element={<CategoriesDetailedView />} />
            {/* About our products */}
            <Route path='/about-our-products' element={<AboutOurProducts />} />
            {/* About us */}
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/brand/:id' element={<RepairDetail />} />
            <Route path='/category/:id' element={<CategoryDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route  path='/checkout' element={<Checkout />} />
            <Route path='/booking' element={<BookingPage />} />

            <Route path="/admin/dashboard/home" element={<Dashboard />} />
            <Route path="/admin/dashboard/products" element={<Products />} />
            <Route path="/admin/dashboard/transactions" element={<Transactions />} />
            <Route path="/admin/dashboard/orders" element={<Orders />} />
            <Route path="/admin/dashboard/feedback" element={<Feedback />} />
            <Route path="/admin/dashboard/users" element={<Users />} />

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
