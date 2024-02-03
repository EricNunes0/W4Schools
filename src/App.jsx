import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';
import Home from "./pages/Home/Home";
import Footer from './pages/Footer/Footer';
import TutorialMain from './pages/Tutorial/TutorialMain';
import NotFound from './pages/NotFound/NotFound';
import Page from './Page';
import ImageMapExample from './pages/Examples/ImageMapExample';

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
				<Route path = "/html/colors" >
					{/* Introdução */}
					<Route path = "" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Cores" subtitle = "Introdução"></TutorialMain>)}></Page>
					)}></Route>
					{/* RGB */}
					<Route path = "rgb" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Cores" subtitle = "RGB"></TutorialMain>)}></Page>
					)}></Route>
					{/* HEX */}
					<Route path = "hex" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Cores" subtitle = "HEX"></TutorialMain>)}></Page>
					)}></Route>
					{/* RGB */}
					<Route path = "hsl" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Cores" subtitle = "HSL"></TutorialMain>)}></Page>
					)}></Route>
					<Route path = "*" element = {(
						<Navigate to = ""></Navigate>
					)}></Route>
				</Route>
				<Route exact path = "/html/css" element = {(
					<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML CSS"></TutorialMain>)}></Page>
				)}></Route>
				<Route path = "/html/links" >
					{/* Introdução */}
					<Route path = "" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Links" subtitle = "Introdução"></TutorialMain>)}></Page>
					)}></Route>
					{/* Cores */}
					<Route path = "colors" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Links" subtitle = "Cores"></TutorialMain>)}></Page>
					)}></Route>
					{/* Bookmarks */}
					<Route path = "bookmarks" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Links" subtitle = "Marcadores"></TutorialMain>)}></Page>
					)}></Route>
				</Route>
				<Route path = "/html/images" >
					{/* Introdução */}
					<Route path = "" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Imagens" subtitle = "Introdução"></TutorialMain>)}></Page>
					)}></Route>
					{/* Mapeamento */}
					<Route path = "map">
						<Route path = "" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Imagens" subtitle = "Mapeamento"></TutorialMain>)}></Page>
						)}></Route>
						<Route path = "square" element = {(
							<ImageMapExample shape = "square"></ImageMapExample>
						)}></Route>
						<Route path = "circle" element = {(
							<ImageMapExample shape = "circle"></ImageMapExample>
						)}></Route>
						<Route path = "triangle" element = {(
							<ImageMapExample shape = "triangle"></ImageMapExample>
						)}></Route>
					</Route>
					{/* Imagens de fundo */}
					<Route path = "background" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Imagens" subtitle = "Imagens de fundo"></TutorialMain>)}></Page>
					)}></Route>
					{/* Elemento Picture */}
					<Route path = "picture" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Imagens" subtitle = "Elemento Picture"></TutorialMain>)}></Page>
					)}></Route>
				</Route>
				<Route path = "*" element = {(
					<NotFound></NotFound>
				)}></Route>
    		</Routes>
      	</Router>
    </div>
  );
}

export default App;
