import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import HowItWorksPage from './pages/HowItWorksPage'
import SciencePage from './pages/SciencePage'
import ResidentialPage from './pages/ResidentialPage'
import CommercialPage from './pages/CommercialPage'
import AssessmentPage from './pages/AssessmentPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/how-it-works" element={<PageWrapper><HowItWorksPage /></PageWrapper>} />
        <Route path="/science" element={<PageWrapper><SciencePage /></PageWrapper>} />
        <Route path="/residential" element={<PageWrapper><ResidentialPage /></PageWrapper>} />
        <Route path="/commercial" element={<PageWrapper><CommercialPage /></PageWrapper>} />
        <Route path="/assessment" element={<PageWrapper><AssessmentPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="*" element={
          <PageWrapper>
            <div className="min-h-screen flex items-center justify-center bg-cream-100 pt-20">
              <div className="text-center px-4">
                <div className="text-8xl mb-4">🌬️</div>
                <h1 className="font-serif font-bold text-navy-700 text-4xl mb-3">Page Not Found</h1>
                <p className="text-gray-500 mb-6">That page doesn't exist — but clean air does.</p>
                <a href="/" className="btn-primary">← Back Home</a>
              </div>
            </div>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
