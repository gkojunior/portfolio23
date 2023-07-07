import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/module/home/home'
import AboutPage from './components/module/aboutPage/AboutPage'
import Footer from './components/module/footer/footer'
import Navbar from './components/module/navbar/Navbar'
import Project from './components/module/projects/Projects'
import ContactPage from './components/module/contactPage/ContactPage'


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
