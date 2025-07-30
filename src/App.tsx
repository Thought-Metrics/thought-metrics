//App.tsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Advertising from './pages/industries/pages/advertising';
import Internet from './pages/industries/pages/internet';
import Retail from './pages/industries/pages/retail';
import Healthcare from './pages/industries/pages/healthcare';
import HR from './pages/industries/pages/hr';
import Finance from './pages/industries/pages/finance';
import Automotive from './pages/industries/pages/automotive';
import Education from './pages/industries/pages/education';
import FMCG from './pages/industries/pages/fmcg';
import Investor from './pages/industries/pages/investor';
import Technology from './pages/industries/pages/technology';
import IndustriesPage from './pages/industries';
import { ROUTES } from './routes/routeConfig';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          {/* industries routes */}
          <Route path={ROUTES.INDUSTRY} element={<IndustriesPage />} />
          <Route path={ROUTES.INDUSTRY_ADVERTISING} element={<Advertising />} />
          <Route path={ROUTES.INDUSTRY_INTERNET} element={<Internet />} />
          <Route path={ROUTES.INDUSTRY_RETAIL} element={<Retail />} />
          <Route path={ROUTES.INDUSTRY_HEALTHCARE} element={<Healthcare />} />
          <Route path={ROUTES.INDUSTRY_HR} element={<HR />} />
          <Route path={ROUTES.INDUSTRY_FINANCE} element={<Finance />} />
          <Route path={ROUTES.INDUSTRY_AUTOMOTIVE} element={<Automotive />} />
          <Route path={ROUTES.INDUSTRY_EDUCATION} element={<Education />} />
          <Route path={ROUTES.INDUSTRY_FMCG} element={<FMCG />} />
          <Route path={ROUTES.INDUSTRY_INVESTOR} element={<Investor />} />
          <Route path={ROUTES.INDUSTRY_TECHNOLOGY} element={<Technology />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
