import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Blog from './pages/blog/blog'
import Contact from './pages/contact/contact'
import Notfound from './pages/notFound/notFound'
import OtherService from './pages/Other Service/OtherService'
import Products from './pages/Products/Products'
import Services from './pages/services/services'
import Solutions from './pages/solutions/solutions'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import ComingSoon from './pages/comingsoon/Comingsoon'
import Defensivemeasures from './pages/DefensiveMeasures/DefensiveMeasures'
import RolesProtocols from './pages/RolesProtocols/RolesProtocols'
import Threats from './pages/Threats/Threats'
import Vulnerabilities from './pages/Vulnerabilities/Vulnerabilities'
import PenetrationTesting from './pages/PenetrationTesting/PenetrationTesting'
import VulnerabilityAssessment from './pages/VulnerabilityAssessment/VulnerabilityAssessment'
import RansomwareDataRecovery from './pages/RansomwareDataRecovery/Ransomwaredatarecovery'
import MalwareAnalysis from './pages/MalwareAnalysis/MalwareAnalysis'
import TechnicalSupport from './pages/TechnicalSupport/TechnicalSupport'
import { useEffect, useState } from 'react'

const App = () => {

useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='solutions' element={<Solutions/>}/>
        <Route path='OtherService' element={<OtherService/>}/>
        <Route path='coming-soon' element={<ComingSoon/>}/>
        <Route path='defensive-measures' element={<Defensivemeasures/>}/>
        <Route path='roles-protocols' element={<RolesProtocols/>}/>
        <Route path='threats' element={<Threats/>}/>
        <Route path='vulnerabilities' element={<Vulnerabilities/>}/>
        <Route path='*' element={<Notfound/>}/>
        Keep the 404 route at the end
        <Route path='VulnerabilityAssessment' element={<VulnerabilityAssessment/>}/>
        <Route path='PenetrationTesting' element={<PenetrationTesting/>}/>
        <Route path='RansomwareDataRecovery' element={<RansomwareDataRecovery/>}/>
        <Route path='MalwareAnalysis' element={<MalwareAnalysis/>}/>
        <Route path='TechnicalSupport' element={<TechnicalSupport/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App