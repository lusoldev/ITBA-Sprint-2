import { useEffect, useState } from 'react';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Simulador } from './components/Simulador';
import { Spinner } from './components/Spinner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Pagos } from './components/Pagos';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		window.addEventListener('load', () => {
			setIsLoading(false);
		});
	}, []);
	return (
		<Router>
			{isLoading && <Spinner />}
			<UserProvider>
				<Header />
				<Aside />
				<main className="main-content" id="main-content">
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/transferencias" element={<div>TODO</div>} />
						<Route path="/pagos" element={<Pagos />} />
						<Route path="/solicitar-prestamo" element={<div>TODO</div>} />
						<Route path="/Simulador" element={<Simulador />} />
						<Route path="/conversor" element={<div>TODO</div>} />
						<Route path="/cuentas" element={<div>TODO</div>} />
					</Routes>
				</main>
			</UserProvider>
		</Router>
	);
}

export default App;
