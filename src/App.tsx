//App.tsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
