import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';
import Home from "./pages/Home/Home";
import Footer from './pages/Footer/Footer';
import TutorialMain from './pages/Tutorial/TutorialMain';

function App() {
  return (
    <div className="App">
      	<Router>
        	<Routes>
				<Route path = "/" element = {(
					<>
					<Navigation></Navigation>
					<Home></Home>
					<Footer></Footer>
					</>
				)}>
				</Route>
				<Route exact path = "/html/default" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML HOME"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/intro" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Introdução"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
    		</Routes>
      	</Router>
    </div>
  );
}

export default App;
