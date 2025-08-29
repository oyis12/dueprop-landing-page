import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/Home-page.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.js'
import FaqPage from './pages/Faq-page.jsx'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
