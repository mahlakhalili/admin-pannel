import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="app grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] min-h-screen">
			<Header />
			<Sidebar />
			<main></main>
		</div>
	);
}

export default App;
