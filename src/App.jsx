import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';
import Home from "./pages/Home/Home";
import Footer from './pages/Footer/Footer';
import TutorialMain from './pages/Tutorial/TutorialMain';
import NotFound from './pages/NotFound/NotFound';

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
				<Route exact path = "/html/editors" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Editores"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/basic" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Básico"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/elements" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Elementos"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/attributes" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Atributos"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/headings" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Títulos"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/paragraphs" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Parágrafos"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/styles" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Estilos"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/formatting" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Formatação"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/quotations" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Citações"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/comments" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Comentários"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route exact path = "/html/colors" element = {(
					<>
					<Navigation></Navigation>
					<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Cores"></TutorialMain>
					<Footer></Footer>
					</>
				)}></Route>
				<Route path = "*" element = {(
					<NotFound></NotFound>
				)}></Route>
    		</Routes>
      	</Router>
    </div>
  );
}

export default App;
