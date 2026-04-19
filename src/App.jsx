import { createBrowserRouter, Outlet, RouterProvider, useState } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Demos from './pages/Demos';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function Layout() {
	return (
		<div className="app">
			<Navbar />
			<main className="main-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

function App() {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <Layout />,
				children: [
					{ index: true, element: <Home /> },
					{ path: '/voice-actor-website/projects', element: <Projects /> },
					{ path: '/voice-actor-website/demos', element: <Demos /> },
					{ path: '/voice-actor-website/about', element: <About /> },
					{ path: '/voice-actor-website/contact', element: <Contact /> },
				],
			},
		],
		{ basename: '/voice-actor-website' } // Matches repo name to avoid routing 404s
	);

	const [theme, setTheme] = useState("light-theme");

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === "light-theme" ? "dark-theme" : "light-theme"
		);
	};

	return (
		<div className={theme}>
			<button onClick={toggleTheme}>
				Switch to {theme === "light-theme" ? "Dark" : "Light"} Theme
			</button>
			<h1>Welcome to My Website</h1>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
