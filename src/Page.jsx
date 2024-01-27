import './App.css';
import Navigation from './pages/Navigation/Navigation';
import Footer from './pages/Footer/Footer';

function Page(prop) {
	const content = prop.content;
	return (
		<>
			<Navigation></Navigation>
			{content}
			<Footer></Footer>
		</>
	);
}

export default Page;
