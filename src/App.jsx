import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/Home-page.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import FaqPage from './pages/Faq-page.jsx'
import Contact from './pages/Contact.jsx'
import WhatsAppChatButton from './components/WhatsAppChatButton.jsx'
import PrivacyPolicy from './pages/Privacy-Policy.jsx'
import TermsOfUse from './pages/Terms-of-use.jsx'

export default function App () {
  return (
    <BrowserRouter>
    <WhatsAppChatButton />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
