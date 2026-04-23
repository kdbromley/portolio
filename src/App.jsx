import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  ScrollPage  from './pages/ScrollPage'
import  ProjectDetail  from './pages/ProjectDetail'
import WritingSamples  from './pages/WritingSamples'
import  Navbar  from './components/Navbar'
import Footer from './components/Footer'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<ScrollPage />} />
                <Route path="/work/:slug" element={<ProjectDetail />} />
                <Route path="/writing/samples" element={<WritingSamples />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App