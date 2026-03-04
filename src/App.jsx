import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
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
					{ path: 'projects', element: <Projects /> },
					{ path: 'demos', element: <Demos /> },
					{ path: 'about', element: <About /> },
					{ path: 'contact', element: <Contact /> },
				],
			},
		],
		{ basename: '/voice-actor-website' } // Matches repo name to avoid routing 404s
	);

	return <RouterProvider router={router} />;
}

export default App;
