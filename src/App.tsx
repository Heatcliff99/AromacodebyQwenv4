import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Customise from './pages/Customise';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Occasions from './pages/Occasions';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/occasions" element={<Occasions />} />
        </Routes>
      </Layout>
    </Router>
  );
}
