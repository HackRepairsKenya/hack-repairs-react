import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import { HelmetProvider } from 'react-helmet-async'
const helmetContext = {};
function App() {


  return (
    <HelmetProvider context={helmetContext}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </HelmetProvider>
    
  
  )
}

export default App
