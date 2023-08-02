import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import AboutPage from './components/AboutPage'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Project from './components/Projects'
import ContactPage from './components/ContactPage'


function App() {
	return (
		
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/about' exact element={<AboutPage />} />
				<Route path='/projects' exact element={<Project />} />
				<Route path='/contact' exact element={<ContactPage/>} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
