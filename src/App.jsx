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

				<Route path = "/html">
					{/* HOME */}
					<Route path = "default" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML HOME"></TutorialMain>)}></Page>
					)}></Route>
					{/* Introdução */}
					<Route path = "intro" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Introdução"></TutorialMain>)}></Page>
					)}></Route>
					{/* Editores */}
					<Route path = "editors" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Editores"></TutorialMain>)}></Page>
					)}></Route>
					{/* Básico */}
					<Route path = "basic" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Básico"></TutorialMain>)}></Page>
					)}></Route>
					{/* Elementos */}
					<Route path = "elements" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Elementos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Atributos */}
					<Route path = "attributes" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Atributos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Títulos */}
					<Route path = "headings" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Títulos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Parágrafos */}
					<Route path = "paragraphs" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Parágrafos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Estilos */}
					<Route path = "styles" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Estilos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Formatação */}
					<Route path = "formatting" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Formatação"></TutorialMain>)}></Page>
					)}></Route>
					{/* Citações */}
					<Route path = "quotations" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Citações"></TutorialMain>)}></Page>
					)}></Route>
					{/* Comentários */}
					<Route path = "comments" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Comentários"></TutorialMain>)}></Page>
					)}></Route>
					{/* Cores */}
					<Route path = "colors">
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
					{/* CSS */}
					<Route path = "css" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML CSS"></TutorialMain>)}></Page>
					)}></Route>
					{/* Links */}
					<Route path = "links">
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
					{/* Imagens */}
					<Route path = "images">
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
					{/* Favicon */}
					<Route path = "favicon" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Favicon"></TutorialMain>)}></Page>
					)}></Route>
					{/* Título da página */}
					<Route path = "page_title" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Título da página"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tabelas */}
					<Route path = "tables">
						{/* Principal */}
						<Route path = "" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Principal"></TutorialMain>)}></Page>
						)}></Route>
						{/* Bordas */}
						<Route path = "borders" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Bordas"></TutorialMain>)}></Page>
						)}></Route>
						{/* Tamanhos */}
						<Route path = "sizes" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Tamanhos"></TutorialMain>)}></Page>
						)}></Route>
						{/* Cabeçalhos */}
						<Route path = "headers" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Cabeçalhos"></TutorialMain>)}></Page>
						)}></Route>
						{/* Preenchimento e espaçamento */}
						<Route path = "padding_spacing" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Preenchimento e espaçamento"></TutorialMain>)}></Page>
						)}></Route>
						{/* Colspan e Rowspan */}
						<Route path = "colspan_rowspan" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Colspan e Rowspan"></TutorialMain>)}></Page>
						)}></Route>
						{/* Estilização */}
						<Route path = "styling" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Estilização"></TutorialMain>)}></Page>
						)}></Route>
						{/* Colgroup */}
						<Route path = "colgroup" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Tabelas" subtitle = "Colgroup"></TutorialMain>)}></Page>
						)}></Route>
						<Route path = "*" element = {(
							<Navigate to = ""></Navigate>
						)}></Route>
					</Route>
					{/* Listas */}
					<Route path = "lists">
						{/* Principal */}
						<Route path = "" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Listas" subtitle = "Principal"></TutorialMain>)}></Page>
						)}></Route>
						{/* Ordenadas */}
						<Route path = "ordered" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Listas" subtitle = "Listas ordenadas"></TutorialMain>)}></Page>
						)}></Route>
						{/* Não ordenadas */}
						<Route path = "unordered" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Listas" subtitle = "Listas não ordenadas"></TutorialMain>)}></Page>
						)}></Route>
						{/* Outras */}
						<Route path = "others" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Listas" subtitle = "Outras listas"></TutorialMain>)}></Page>
						)}></Route>
						<Route path = "*" element = {(
							<Navigate to = ""></Navigate>
						)}></Route>
					</Route>
					{/* Block & Inline */}
					<Route path = "blocks" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Block & Inline"></TutorialMain>)}></Page>
					)}></Route>
					{/* Div */}
					<Route path = "div" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Div"></TutorialMain>)}></Page>
					)}></Route>
					{/* Classes */}
					<Route path = "classes" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Classes"></TutorialMain>)}></Page>
					)}></Route>
					{/* Id */}
					<Route path = "id" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Id"></TutorialMain>)}></Page>
					)}></Route>
					{/* Iframes */}
					<Route path = "iframe" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Iframes"></TutorialMain>)}></Page>
					)}></Route>
					{/* JavaScript */}
					<Route path = "scripts" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML JavaScript"></TutorialMain>)}></Page>
					)}></Route>
					{/* File Paths */}
					<Route path = "filepaths" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML File Paths"></TutorialMain>)}></Page>
					)}></Route>
					{/* Head */}
					<Route path = "head" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Head"></TutorialMain>)}></Page>
					)}></Route>
					{/* Layout */}
					<Route path = "layout" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Layout"></TutorialMain>)}></Page>
					)}></Route>
					{/* Responsividade */}
					<Route path = "responsive" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Responsividade"></TutorialMain>)}></Page>
					)}></Route>
					{/* Códigos / Computer Code */}
					<Route path = "computercode" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Códigos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Semântica */}
					<Route path = "semantics" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Semântica"></TutorialMain>)}></Page>
					)}></Route>
					{/* Guia de estilos */}
					<Route path = "syntax" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Guia de estilos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Entidades */}
					<Route path = "entities" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Entidades"></TutorialMain>)}></Page>
					)}></Route>
					{/* Símbolos */}
					<Route path = "symbols" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Símbolos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Emojis */}
					<Route path = "emojis" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Emojis"></TutorialMain>)}></Page>
					)}></Route>
					{/* Charsets / Conjuntos de caracteres */}
					<Route path = "charsets" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Charsets"></TutorialMain>)}></Page>
					)}></Route>
					{/* URL Encode / Codificação de URL */}
					<Route path = "urlencode" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML Codificação de URL"></TutorialMain>)}></Page>
					)}></Route>
					{/* HTML vs. XHTML */}
					<Route path = "xhtml" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Tutorial" title = "HTML vs. XHTML"></TutorialMain>)}></Page>
					)}></Route>
					
					{/* Formulários */}
					<Route path = "forms">
						{/* Principal */}
						<Route path = "" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Formulários" title = "HTML Formulários"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributos */}
						<Route path = "attributes" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Formulários" title = "HTML Atributos de formulários"></TutorialMain>)}></Page>
						)}></Route>
						{/* Elementos */}
						<Route path = "elements" element = {(
							<Page content = {(<TutorialMain language = "html" topic = "HTML Formulários" title = "HTML Tags de formulários"></TutorialMain>)}></Page>
						)}></Route>
						{/* Input */}
						<Route path = "input">
							{/* Tipos */}
							<Route path = "types" element = {(
								<Page content = {(<TutorialMain language = "html" topic = "HTML Formulários" title = "HTML Tipos de Input"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributos */}
							<Route path = "attributes" element = {(
								<Page content = {(<TutorialMain language = "html" topic = "HTML Formulários" title = "HTML Atributos de Input"></TutorialMain>)}></Page>
							)}></Route>
							{/* Inputs - Atributos de formulário */}
							<Route path = "form-attributes" element = {(
								<Page content = {(<TutorialMain language = "html" topic = "HTML Formulários" title = "Inputs - Atributos de formulário"></TutorialMain>)}></Page>
							)}></Route>
						</Route>
						{/*<Route path = "*" element = {(
							<Navigate to = ""></Navigate>
						)}></Route>*/}
					</Route>

					{/* Canvas */}
					<Route path = "canvas" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Gráficos" title = "HTML Canvas"></TutorialMain>)}></Page>
					)}></Route>
					{/* SVG */}
					<Route path = "svg" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Gráficos" title = "HTML SVG"></TutorialMain>)}></Page>
					)}></Route>

					{/* Media */}
					<Route path = "media" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Mídia" title = "HTML Mídia"></TutorialMain>)}></Page>
					)}></Route>
					{/* Vídeo */}
					<Route path = "video" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Mídia" title = "HTML Vídeo"></TutorialMain>)}></Page>
					)}></Route>
					{/* Áudio */}
					<Route path = "audio" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Mídia" title = "HTML Áudio"></TutorialMain>)}></Page>
					)}></Route>
					{/* Objeto / Plug-Ins */}
					<Route path = "object" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Mídia" title = "HTML Plug-ins"></TutorialMain>)}></Page>
					)}></Route>
					{/* YouTube */}
					<Route path = "youtube" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Mídia" title = "HTML YouTube"></TutorialMain>)}></Page>
					)}></Route>

					{/* Geolocalização */}
					<Route path = "geolocation" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML APIs" title = "HTML Geolocalização"></TutorialMain>)}></Page>
					)}></Route>
					{/* Drag/Drop */}
					<Route path = "drag_drop" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML APIs" title = "HTML Drag/Drop"></TutorialMain>)}></Page>
					)}></Route>
					{/* Armazenamento web */}
					<Route path = "web_storage" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML APIs" title = "HTML Armazenamento web"></TutorialMain>)}></Page>
					)}></Route>
					{/* Web Workers */}
					<Route path = "web_workers" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML APIs" title = "HTML Web Workers"></TutorialMain>)}></Page>
					)}></Route>
					{/* SSE */}
					<Route path = "sse" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML APIs" title = "HTML SSE"></TutorialMain>)}></Page>
					)}></Route>

					{/* Exemplos */}
					<Route path = "examples" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Exemplos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Editor */}
					<Route path = "editor" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Editor"></TutorialMain>)}></Page>
					)}></Route>
					{/* Quiz */}
					<Route path = "quiz" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Quiz"></TutorialMain>)}></Page>
					)}></Route>
					{/* Exercícios */}
					<Route path = "exercises" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Exercícios"></TutorialMain>)}></Page>
					)}></Route>
					{/* Website */}
					<Route path = "website" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Website"></TutorialMain>)}></Page>
					)}></Route>
					{/* Bootcamp */}
					<Route path = "bootcamp" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Bootcamp"></TutorialMain>)}></Page>
					)}></Route>
					{/* Exame / Certificado */}
					<Route path = "exam" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Certificado"></TutorialMain>)}></Page>
					)}></Route>
					{/* Resumo */}
					<Route path = "summary" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Resumo"></TutorialMain>)}></Page>
					)}></Route>
					{/* Acessibilidade */}
					<Route path = "accessibility" element = {(
						<Page content = {(<TutorialMain language = "html" topic = "HTML Exemplos" title = "HTML Acessibilidade"></TutorialMain>)}></Page>
					)}></Route>
				</Route>

				<Route path = "/tags">
					{/* Por alfabeto */}
					<Route path = "default" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML por alfabeto"></TutorialMain>)}></Page>
					)}></Route>
					{/* Por categoria */}
					<Route path = "category" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML por categoria"></TutorialMain>)}></Page>
					)}></Route>
					{/* Suporte */}
					<Route path = "browser_support" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Suporte"></TutorialMain>)}></Page>
					)}></Route>
					{/* Atributos */}
					<Route path = "attributes" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Atributos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Atributos globais */}
					<Route path = "global_attributes" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Atributos globais"></TutorialMain>)}></Page>
					)}></Route>
					{/* Eventos */}
					<Route path = "events" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Eventos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Cores */}
					<Route path = "colors" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Cores"></TutorialMain>)}></Page>
					)}></Route>
					{/* Canvas */}
					<Route path = "canvas" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Canvas"></TutorialMain>)}></Page>
					)}></Route>
					{/* Áudio/Vídeo */}
					<Route path = "audio_video" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Áudio/Vídeo"></TutorialMain>)}></Page>
					)}></Route>
					{/* Conjuntos de caracteres */}
					<Route path = "character_sets" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Conjuntos de caracteres"></TutorialMain>)}></Page>
					)}></Route>
					{/* Doctypes */}
					<Route path = "doctypes" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Doctypes"></TutorialMain>)}></Page>
					)}></Route>
					{/* URL encode */}
					<Route path = "urlencode" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML URL encode"></TutorialMain>)}></Page>
					)}></Route>
					{/* Códigos de idiomas */}
					<Route path = "lang_codes" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Códigos de idiomas"></TutorialMain>)}></Page>
					)}></Route>
					{/* Códigos de países */}
					<Route path = "country_codes" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Códigos de países"></TutorialMain>)}></Page>
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
