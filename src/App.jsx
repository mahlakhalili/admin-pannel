import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="app grid grid-rows-[max-content_1fr] grid-cols-[max-content_1fr]  min-h-screen">
			<Header />
			<Sidebar />
			<main className='p-4'>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
