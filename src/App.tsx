import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from '@/pages/home';
import Header from '@/shared/components/header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
