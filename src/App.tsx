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
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
