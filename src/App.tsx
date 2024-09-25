import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.tsx';
import { HelmetProvider } from 'react-helmet-async';
import Loading from './components/spinner/Loading.tsx';
import TermsAndConditions from './pages/TermsAndConditions.tsx';
const SellWithUsPage = React.lazy(() => import('./pages/SellWithUs.tsx'));
const Sell = React.lazy(() => import('./pages/Sell.tsx'));
const Services = React.lazy(() => import('./pages/Services.tsx'));
const AboutOurProducts = React.lazy(() => import('./pages/AboutOurProducts.tsx'));
const ServiceDetailedView = React.lazy(() => import('./pages/ServiceDetailedView.tsx'));
const CategoriesDetailedView = React.lazy(() => import('./pages/CategoriesDetailedView.tsx'));

const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail.tsx'));
const Checkout = React.lazy(() => import('./pages/Checkout.tsx'));
const BookingPage = React.lazy(() => import('./pages/BookingPage.tsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Products = React.lazy(() => import('./pages/Products'));
const Users = React.lazy(() => import('./pages/Users'));
const Feedback = React.lazy(() => import('./pages/Feedback'));
const Cart = React.lazy(() => import('./pages/Cart.tsx'));
const Contact = React.lazy(() => import('./pages/ContactUs.tsx'));
const Transactions = React.lazy(() => import('./components/admin-dashboard/transactions/Transactions.tsx'));
const ServicesDashboard = React.lazy(() => import('./pages/ServicesDashboard.tsx'));
const Home = React.lazy(() => import('./pages/Home.tsx'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks'));
const Orders = React.lazy(() => import('./pages/Orders'));
const AboutUs = React.lazy(() => import('./pages/AboutUs.tsx'));

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
            <Route path='/category/:id' element={<CategoriesDetailedView />} />
            {/* About our products */}
            <Route path='/about-our-products' element={<AboutOurProducts />} />
            {/* About us */}
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/how-it-works' element={<HowItWorks />} />
            
            <Route path='/category/:categoryId/product/:productId' element={<CategoryDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/booking' element={<BookingPage />} />

            <Route path="/admin/dashboard/home" element={<Dashboard />} />
            <Route path="/admin/dashboard/products" element={<Products />} />
            <Route path="/admin/dashboard/services" element={<ServicesDashboard />} />
            <Route path="/admin/dashboard/transactions" element={<Transactions transactions={[]} />} />
            <Route path="/admin/dashboard/orders" element={<Orders />} />
            <Route path="/admin/dashboard/feedback" element={<Feedback />} />
            <Route path="/admin/dashboard/users" element={<Users />} />
            {/* terms & policies */}
            <Route path='/terms-and-conditions'  element={<TermsAndConditions />  } />

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
