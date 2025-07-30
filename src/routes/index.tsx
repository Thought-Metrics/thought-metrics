// routes/AppRouter.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

// Layout Components

// Pages
import Home from '@/pages/home';
import IndustriesPage from '@/pages/industries';
import Advertising from '@/pages/industries/pages/advertising';
import Internet from '@/pages/industries/pages/internet';
import Retail from '@/pages/industries/pages/retail';
import Healthcare from '@/pages/industries/pages/healthcare';
import HR from '@/pages/industries/pages/hr';
import Finance from '@/pages/industries/pages/finance';
import Automotive from '@/pages/industries/pages/automotive';
import Education from '@/pages/industries/pages/education';
import FMCG from '@/pages/industries/pages/fmcg';
import Investor from '@/pages/industries/pages/investor';
import Technology from '@/pages/industries/pages/technology';
import Layout from '@/shared/components/layout';
import NotFound from '@/pages/not-found';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Home Route */}
      <Route index element={<Home />} />

      {/* Industries Routes with Nested Structure */}
      <Route path="industries" element={<IndustriesPage />}>
        <Route index element={<Navigate to="/industries" replace />} />
        <Route path="advertising" element={<Advertising />} />
        <Route path="internet" element={<Internet />} />
        <Route path="retail" element={<Retail />} />
        <Route path="healthcare" element={<Healthcare />} />
        <Route path="hr" element={<HR />} />
        <Route path="finance" element={<Finance />} />
        <Route path="automotive" element={<Automotive />} />
        <Route path="education" element={<Education />} />
        <Route path="fmcg" element={<FMCG />} />
        <Route path="investor" element={<Investor />} />
        <Route path="technology" element={<Technology />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const goBack = () => {
  window.history.back();
};
