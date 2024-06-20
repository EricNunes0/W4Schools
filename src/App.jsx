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
					{/* Eventos */}
					<Route path = "events" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Eventos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Cores */}
					<Route path = "colors" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Cores"></TutorialMain>)}></Page>
					)}></Route>
					{/* Canvas (Referências) */}
					<Route path = "ref_canvas" element = {(
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
					{/* HTTP Mensagens */}
					<Route path = "http_messages" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTTP Mensagens"></TutorialMain>)}></Page>
					)}></Route>
					{/* HTTP Métodos */}
					<Route path = "http_methods" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTTP Métodos"></TutorialMain>)}></Page>
					)}></Route>
					{/* Conversor de PX para EM */}
					<Route path = "px_em_converter" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "Conversor de PX para EM"></TutorialMain>)}></Page>
					)}></Route>
					{/* Atalhos de teclado */}
					<Route path = "keyboard_shortcuts" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "Atalhos de teclado"></TutorialMain>)}></Page>
					)}></Route>

					{/* Comentário */}
					<Route path = "comment" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Comentário"></TutorialMain>)}></Page>
					)}></Route>
					{/* Doctype */}
					<Route path = "doctype" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Doctype"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag a */}
					<Route path = "a" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag a"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag abbr */}
					<Route path = "abbr" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag abbr"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag acronym */}
					<Route path = "acronym" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag acronym"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag address */}
					<Route path = "address" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag address"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag applet */}
					<Route path = "applet" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag applet"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag area */}
					<Route path = "area" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag area"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag article */}
					<Route path = "article" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag article"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag aside */}
					<Route path = "aside" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag aside"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag audio */}
					<Route path = "audio" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag audio"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag b */}
					<Route path = "b" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag b"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag base */}
					<Route path = "base" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag base"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag basefont */}
					<Route path = "basefont" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag basefont"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag bdi */}
					<Route path = "bdi" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag bdi"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag bdo */}
					<Route path = "bdo" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag bdo"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag big */}
					<Route path = "big" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag big"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag blockquote */}
					<Route path = "blockquote" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag blockquote"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag body */}
					<Route path = "body" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag body"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag br */}
					<Route path = "br" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag br"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag button */}
					<Route path = "button" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag button"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag canvas */}
					<Route path = "canvas" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag canvas"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag caption */}
					<Route path = "caption" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag caption"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag center */}
					<Route path = "center" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag center"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag cite */}
					<Route path = "cite" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag cite"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag code */}
					<Route path = "code" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag code"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag col */}
					<Route path = "col" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag col"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag colgroup */}
					<Route path = "colgroup" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag colgroup"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag data */}
					<Route path = "data" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag data"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag datalist */}
					<Route path = "datalist" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag datalist"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag dd */}
					<Route path = "dd" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag dd"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag del */}
					<Route path = "del" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag del"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag details */}
					<Route path = "details" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag details"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag dfn */}
					<Route path = "dfn" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag dfn"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag dialog */}
					<Route path = "dialog" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag dialog"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag dir */}
					<Route path = "dir" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag dir"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag div */}
					<Route path = "div" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag div"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag dl */}
					<Route path = "dl" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag dl"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag dt */}
					<Route path = "dt" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag dt"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag em */}
					<Route path = "em" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag em"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag embed */}
					<Route path = "embed" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag embed"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag fieldset */}
					<Route path = "fieldset" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag fieldset"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag figcaption */}
					<Route path = "figcaption" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag figcaption"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag figure */}
					<Route path = "figure" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag figure"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag font */}
					<Route path = "font" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag font"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag footer */}
					<Route path = "footer" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag footer"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag form */}
					<Route path = "form" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag form"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag frame */}
					<Route path = "frame" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag frame"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag frameset */}
					<Route path = "frameset" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag frameset"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag h1 - h6 */}
					<Route path = "hn" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag h1 - h6"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag head */}
					<Route path = "head" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag head"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag header */}
					<Route path = "header" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag header"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag hgroup */}
					<Route path = "hgroup" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag hgroup"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag hr */}
					<Route path = "hr" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag hr"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag html */}
					<Route path = "html" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag html"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag i */}
					<Route path = "i" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag i"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag iframe */}
					<Route path = "iframe" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag iframe"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag img */}
					<Route path = "img" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag img"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag input */}
					<Route path = "input" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag input"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag ins */}
					<Route path = "ins" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag ins"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag kbd */}
					<Route path = "kbd" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag kbd"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag label */}
					<Route path = "label" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag label"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag legend */}
					<Route path = "legend" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag legend"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag li */}
					<Route path = "li" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag li"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag link */}
					<Route path = "link" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag link"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag main */}
					<Route path = "main" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag main"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag map */}
					<Route path = "map" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag map"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag mark */}
					<Route path = "mark" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag mark"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag menu */}
					<Route path = "menu" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag menu"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag meta */}
					<Route path = "meta" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag meta"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag meter */}
					<Route path = "meter" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag meter"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag nav */}
					<Route path = "nav" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag nav"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag noframes */}
					<Route path = "noframes" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag noframes"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag noscript */}
					<Route path = "noscript" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag noscript"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag object */}
					<Route path = "object" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag object"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag ol */}
					<Route path = "ol" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag ol"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag optgroup */}
					<Route path = "optgroup" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag optgroup"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag option */}
					<Route path = "option" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag option"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag output */}
					<Route path = "output" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag output"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag p */}
					<Route path = "p" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag p"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag param */}
					<Route path = "param" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag param"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag picture */}
					<Route path = "picture" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag picture"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag pre */}
					<Route path = "pre" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag pre"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag progress */}
					<Route path = "progress" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag progress"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag q */}
					<Route path = "q" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag q"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag rp */}
					<Route path = "rp" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag rp"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag rt */}
					<Route path = "rt" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag rt"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag ruby */}
					<Route path = "ruby" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag ruby"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag s */}
					<Route path = "s" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag s"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag samp */}
					<Route path = "samp" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag samp"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag script */}
					<Route path = "script" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag script"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag search */}
					<Route path = "search" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag search"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag section */}
					<Route path = "section" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag section"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag select */}
					<Route path = "select" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag select"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag small */}
					<Route path = "small" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag small"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag source */}
					<Route path = "source" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag source"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag span */}
					<Route path = "span" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag span"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag strike */}
					<Route path = "strike" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag strike"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag strong */}
					<Route path = "strong" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag strong"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag style */}
					<Route path = "style" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag style"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag sub */}
					<Route path = "sub" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag sub"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag summary */}
					<Route path = "summary" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag summary"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag sup */}
					<Route path = "sup" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag sup"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag svg */}
					<Route path = "svg" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag svg"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag table */}
					<Route path = "table" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag table"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag tbody */}
					<Route path = "tbody" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag tbody"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag td */}
					<Route path = "td" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag td"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag template */}
					<Route path = "template" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag template"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag textarea */}
					<Route path = "textarea" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag textarea"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag tfoot */}
					<Route path = "tfoot" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag tfoot"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag th */}
					<Route path = "th" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag th"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag thead */}
					<Route path = "thead" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag thead"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag time */}
					<Route path = "time" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag time"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag title */}
					<Route path = "title" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag title"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag tr */}
					<Route path = "tr" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag tr"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag track */}
					<Route path = "track" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag track"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag tt */}
					<Route path = "tt" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag tt"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag u */}
					<Route path = "u" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag u"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag ul */}
					<Route path = "ul" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag ul"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag var */}
					<Route path = "var" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag var"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag video */}
					<Route path = "video" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag video"></TutorialMain>)}></Page>
					)}></Route>
					{/* Tag wbr */}
					<Route path = "wbr" element = {(
						<Page content = {(<TutorialMain language = "tags" topic = "HTML Tags" title = "Tag wbr"></TutorialMain>)}></Page>
					)}></Route>
					{/* Atributos */}
					<Route path = "attributes">
						{/* Atributo accept */}
						<Route path = "accept" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "accept" pageTitle="Atributo accept"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo accept-charset */}
						<Route path = "accept-charset" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "accept-charset" pageTitle="Atributo accept-charset"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo action */}
						<Route path = "action" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "action" pageTitle="Atributo action"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo alt */}
						<Route path = "alt" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "alt" pageTitle="Atributo alt"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo async */}
						<Route path = "async" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "async" pageTitle="Atributo async"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo autocomplete */}
						<Route path = "autocomplete" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "autocomplete" pageTitle="Atributo autocomplete"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo autofocus */}
						<Route path = "autofocus" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "autofocus" pageTitle="Atributo autofocus"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo autoplay */}
						<Route path = "autoplay" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "autoplay" pageTitle="Atributo autoplay"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo charset */}
						<Route path = "charset" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "charset" pageTitle="Atributo charset"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo checked */}
						<Route path = "checked" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "checked" pageTitle="Atributo checked"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo cite */}
						<Route path = "cite" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "cite" pageTitle="Atributo cite"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo cols */}
						<Route path = "cols" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "cols" pageTitle="Atributo cols"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo colspan */}
						<Route path = "colspan" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "colspan" pageTitle="Atributo colspan"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo content */}
						<Route path = "content" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "content" pageTitle="Atributo content"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo controls */}
						<Route path = "controls" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "controls" pageTitle="Atributo controls"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo coords */}
						<Route path = "coords" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "coords" pageTitle="Atributo coords"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo data */}
						<Route path = "data" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "data" pageTitle="Atributo data"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo datetime */}
						<Route path = "datetime" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "datetime" pageTitle="Atributo datetime"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo default */}
						<Route path = "default" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "default" pageTitle="Atributo default"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo defer */}
						<Route path = "defer" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "defer" pageTitle="Atributo defer"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo dirname */}
						<Route path = "dirname" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "dirname" pageTitle="Atributo dirname"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo disabled */}
						<Route path = "disabled" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "disabled" pageTitle="Atributo disabled"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo download */}
						<Route path = "download" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "download" pageTitle="Atributo download"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo enctype */}
						<Route path = "enctype" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "enctype" pageTitle="Atributo enctype"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo for */}
						<Route path = "for" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "for" pageTitle="Atributo for"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo form */}
						<Route path = "form" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "form" pageTitle="Atributo form"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo formaction */}
						<Route path = "formaction" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "formaction" pageTitle="Atributo formaction"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo headers */}
						<Route path = "headers" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "headers" pageTitle="Atributo headers"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo height */}
						<Route path = "height" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "height" pageTitle="Atributo height"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo high */}
						<Route path = "high" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "high" pageTitle="Atributo high"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo href */}
						<Route path = "href" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "href" pageTitle="Atributo href"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo hreflang */}
						<Route path = "hreflang" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "hreflang" pageTitle="Atributo hreflang"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo http-equiv */}
						<Route path = "http-equiv" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "http-equiv" pageTitle="Atributo http-equiv"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ismap */}
						<Route path = "ismap" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ismap" pageTitle="Atributo ismap"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo kind */}
						<Route path = "kind" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "kind" pageTitle="Atributo kind"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo label */}
						<Route path = "label" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "label" pageTitle="Atributo label"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo list */}
						<Route path = "list" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "list" pageTitle="Atributo list"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo loop */}
						<Route path = "loop" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "loop" pageTitle="Atributo loop"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo low */}
						<Route path = "low" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "low" pageTitle="Atributo low"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo max */}
						<Route path = "max" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "max" pageTitle="Atributo max"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo maxlength */}
						<Route path = "maxlength" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "maxlength" pageTitle="Atributo maxlength"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo media */}
						<Route path = "media" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "media" pageTitle="Atributo media"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo method */}
						<Route path = "method" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "method" pageTitle="Atributo method"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo min */}
						<Route path = "min" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "min" pageTitle="Atributo min"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo multiple */}
						<Route path = "multiple" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "multiple" pageTitle="Atributo multiple"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo muted */}
						<Route path = "muted" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "muted" pageTitle="Atributo muted"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo name */}
						<Route path = "name" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "name" pageTitle="Atributo name"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo novalidate */}
						<Route path = "novalidate" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "novalidate" pageTitle="Atributo novalidate"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo onabort */}
						<Route path = "onabort" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "onabort" pageTitle="Atributo onabort"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo onafterprint */}
						<Route path = "onafterprint" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "onafterprint" pageTitle="Atributo onafterprint"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo onbeforeprint */}
						<Route path = "onbeforeprint" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "onbeforeprint" pageTitle="Atributo onbeforeprint"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo onblur */}
						<Route path = "onblur" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "onblur" pageTitle="Atributo onblur"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo oncanplay */}
						<Route path = "oncanplay" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "oncanplay" pageTitle="Atributo oncanplay"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo oncanplaythrough */}
						<Route path = "oncanplaythrough" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "oncanplaythrough" pageTitle="Atributo oncanplaythrough"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo onchange */}
						<Route path = "onchange" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "onchange" pageTitle="Atributo onchange"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo onclick */}
						<Route path = "onclick" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "onclick" pageTitle="Atributo onclick"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo oncontextmenu */}
						<Route path = "oncontextmenu" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "oncontextmenu" pageTitle="Atributo oncontextmenu"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo oncopy */}
						<Route path = "oncopy" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "oncopy" pageTitle="Atributo oncopy"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo oncuechange */}
						<Route path = "oncuechange" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "oncuechange" pageTitle="Atributo oncuechange"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo oncut */}
						<Route path = "oncut" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "oncut" pageTitle="Atributo oncut"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondblclick */}
						<Route path = "ondblclick" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondblclick" pageTitle="Atributo ondblclick"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondrag */}
						<Route path = "ondrag" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondrag" pageTitle="Atributo ondrag"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondragend */}
						<Route path = "ondragend" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondragend" pageTitle="Atributo ondragend"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondragenter */}
						<Route path = "ondragenter" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondragenter" pageTitle="Atributo ondragenter"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondragleave */}
						<Route path = "ondragleave" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondragleave" pageTitle="Atributo ondragleave"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondragover */}
						<Route path = "ondragover" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondragover" pageTitle="Atributo ondragover"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondragstart */}
						<Route path = "ondragstart" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondragstart" pageTitle="Atributo ondragstart"></TutorialMain>)}></Page>
						)}></Route>
						{/* Atributo ondrop */}
						<Route path = "ondrop" element = {(
							<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "ondrop" pageTitle="Atributo ondrop"></TutorialMain>)}></Page>
						)}></Route>
						
						{/* Atributos globais */}
						<Route path = "global">
							{/* Atributos globais */}
							<Route path = "" element = {(
								<Page content = {(<TutorialMain language = "tags" topic = "HTML Referências" title = "HTML Atributos globais"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo accesskey */}
							<Route path = "accesskey" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "accesskey" pageTitle="Atributo accesskey"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo class */}
							<Route path = "class" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "class" pageTitle="Atributo class"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo contenteditable */}
							<Route path = "contenteditable" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "contenteditable" pageTitle="Atributo contenteditable"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo data- */}
							<Route path = "data-" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "data-" pageTitle="Atributo data-"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo dir */}
							<Route path = "dir" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "dir" pageTitle="Atributo dir"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo draggable */}
							<Route path = "draggable" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "draggable" pageTitle="Atributo draggable"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo enterkeyhint */}
							<Route path = "enterkeyhint" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "enterkeyhint" pageTitle="Atributo enterkeyhint"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo hidden */}
							<Route path = "hidden" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "hidden" pageTitle="Atributo hidden"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo id */}
							<Route path = "id" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "id" pageTitle="Atributo id"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo inert */}
							<Route path = "inert" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "inert" pageTitle="Atributo inert"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo inputmode */}
							<Route path = "inputmode" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "inputmode" pageTitle="Atributo inputmode"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo lang */}
							<Route path = "lang" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos globais" title = "lang" pageTitle="Atributo lang"></TutorialMain>)}></Page>
							)}></Route>
						</Route>

						{/* Tag a */}
						<Route path = "a">
							{/* Atributo download */}
							<Route path = "download" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="download" pageTitle="Tag a - Atributo download"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo href */}
							<Route path = "href" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="href" pageTitle="Tag a - Atributo href"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo hreflang */}
							<Route path = "hreflang" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="hreflang" pageTitle="Tag a - Atributo hreflang"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo media */}
							<Route path = "media" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="media" pageTitle="Tag a - Atributo media"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo ping */}
							<Route path = "ping" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="ping" pageTitle="Tag a - Atributo ping"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo referrerpolicy */}
							<Route path = "referrerpolicy" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="referrerpolicy" pageTitle="Tag a - Atributo referrerpolicy"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rel */}
							<Route path = "rel" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="rel" pageTitle="Tag a - Atributo rel"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo target */}
							<Route path = "target" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="target" pageTitle="Tag a - Atributo target"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <a>" subtitle="type" pageTitle="Tag a - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "download"></Navigate>
							)}></Route>
						</Route>
						{/* Tag area */}
						<Route path = "area">
							{/* Atributo alt */}
							<Route path = "alt" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="alt" pageTitle="Tag area - Atributo alt"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo coords */}
							<Route path = "coords" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="coords" pageTitle="Tag area - Atributo coords"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo download */}
							<Route path = "download" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="download" pageTitle="Tag area - Atributo download"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo href */}
							<Route path = "href" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="href" pageTitle="Tag area - Atributo href"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo hreflang */}
							<Route path = "hreflang" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="hreflang" pageTitle="Tag area - Atributo hreflang"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo media */}
							<Route path = "media" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="media" pageTitle="Tag area - Atributo media"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo referrerpolicy */}
							<Route path = "referrerpolicy" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="referrerpolicy" pageTitle="Tag area - Atributo referrerpolicy"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rel */}
							<Route path = "rel" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="rel" pageTitle="Tag area - Atributo rel"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo shape */}
							<Route path = "shape" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="shape" pageTitle="Tag area - Atributo shape"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo target */}
							<Route path = "target" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="target" pageTitle="Tag area - Atributo target"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <area>" subtitle="type" pageTitle="Tag area - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "alt"></Navigate>
							)}></Route>
						</Route>
						{/* Tag audio */}
						<Route path = "audio">
							{/* Atributo autoplay */}
							<Route path = "autoplay" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <audio>" subtitle="autoplay" pageTitle="Tag audio - Atributo autoplay"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo controls */}
							<Route path = "controls" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <audio>" subtitle="controls" pageTitle="Tag audio - Atributo controls"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo loop */}
							<Route path = "loop" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <audio>" subtitle="loop" pageTitle="Tag audio - Atributo loop"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo muted */}
							<Route path = "muted" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <audio>" subtitle="muted" pageTitle="Tag audio - Atributo muted"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo preload */}
							<Route path = "preload" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <audio>" subtitle="preload" pageTitle="Tag audio - Atributo preload"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <audio>" subtitle="src" pageTitle="Tag audio - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "autoplay"></Navigate>
							)}></Route>
						</Route>
						{/* Tag base */}
						<Route path = "base">
							{/* Atributo href */}
							<Route path = "href" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <base>" subtitle="href" pageTitle="Tag base - Atributo href"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo target */}
							<Route path = "target" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <base>" subtitle="target" pageTitle="Tag base - Atributo target"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "href"></Navigate>
							)}></Route>
						</Route>
						{/* Tag bdo */}
						<Route path = "bdo">
							{/* Atributo dir */}
							<Route path = "dir" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <bdo>" subtitle="dir" pageTitle="Tag bdo - Atributo dir"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "dir"></Navigate>
							)}></Route>
						</Route>
						{/* Tag blockquote */}
						<Route path = "blockquote">
							{/* Atributo cite */}
							<Route path = "cite" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <blockquote>" subtitle="cite" pageTitle="Tag blockquote - Atributo cite"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "cite"></Navigate>
							)}></Route>
						</Route>
						{/* Tag button */}
						<Route path = "button">
							{/* Atributo autofocus */}
							<Route path = "autofocus" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="autofocus" pageTitle="Tag button - Atributo autofocus"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="disabled" pageTitle="Tag button - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="form" pageTitle="Tag button - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formaction */}
							<Route path = "formaction" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="formaction" pageTitle="Tag button - Atributo formaction"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formenctype */}
							<Route path = "formenctype" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="formenctype" pageTitle="Tag button - Atributo formenctype"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formmethod */}
							<Route path = "formmethod" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="formmethod" pageTitle="Tag button - Atributo formmethod"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formnovalidate */}
							<Route path = "formnovalidate" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="formnovalidate" pageTitle="Tag button - Atributo formnovalidate"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formtarget */}
							<Route path = "formtarget" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="formtarget" pageTitle="Tag button - Atributo formtarget"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo popovertarget */}
							<Route path = "popovertarget" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="popovertarget" pageTitle="Tag button - Atributo popovertarget"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo popovertargetaction */}
							<Route path = "popovertargetaction" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="popovertargetaction" pageTitle="Tag button - Atributo popovertargetaction"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="name" pageTitle="Tag button - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="type" pageTitle="Tag button - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <button>" subtitle="value" pageTitle="Tag button - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "autofocus"></Navigate>
							)}></Route>
						</Route>
						{/* Tag canvas */}
						<Route path = "canvas">
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <canvas>" subtitle="height" pageTitle="Tag canvas - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <canvas>" subtitle="width" pageTitle="Tag canvas - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "height"></Navigate>
							)}></Route>
						</Route>
						{/* Tag col */}
						<Route path = "col">
							{/* Atributo span */}
							<Route path = "span" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <col>" subtitle="span" pageTitle="Tag col - Atributo span"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "span"></Navigate>
							)}></Route>
						</Route>
						{/* Tag colgroup */}
						<Route path = "colgroup">
							{/* Atributo span */}
							<Route path = "span" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <colgroup>" subtitle="span" pageTitle="Tag colgroup - Atributo span"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "span"></Navigate>
							)}></Route>
						</Route>
						{/* Tag del */}
						<Route path = "del">
							{/* Atributo cite */}
							<Route path = "cite" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <del>" subtitle="cite" pageTitle="Tag del - Atributo cite"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo datetime */}
							<Route path = "datetime" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <del>" subtitle="datetime" pageTitle="Tag del - Atributo datetime"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "cite"></Navigate>
							)}></Route>
						</Route>
						{/* Tag details */}
						<Route path = "details">
							{/* Atributo open */}
							<Route path = "open" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <details>" subtitle="open" pageTitle="Tag details - Atributo open"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "open"></Navigate>
							)}></Route>
						</Route>
						{/* Tag dialog */}
						<Route path = "dialog">
							{/* Atributo open */}
							<Route path = "open" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <dialog>" subtitle="open" pageTitle="Tag dialog - Atributo open"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "open"></Navigate>
							)}></Route>
						</Route>
						{/* Tag embed */}
						<Route path = "embed">
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <embed>" subtitle="height" pageTitle="Tag embed - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <embed>" subtitle="src" pageTitle="Tag embed - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <embed>" subtitle="type" pageTitle="Tag embed - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <embed>" subtitle="width" pageTitle="Tag embed - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "height"></Navigate>
							)}></Route>
						</Route>
						{/* Tag fieldset */}
						<Route path = "fieldset">
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <fieldset>" subtitle="disabled" pageTitle="Tag fieldset - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <fieldset>" subtitle="form" pageTitle="Tag fieldset - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <fieldset>" subtitle="name" pageTitle="Tag fieldset - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "disabled"></Navigate>
							)}></Route>
						</Route>
						{/* Tag form */}
						<Route path = "form">
							{/* Atributo accept-charset */}
							<Route path = "accept-charset" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="accept-charset" pageTitle="Tag form - Atributo accept-charset"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo action */}
							<Route path = "action" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="action" pageTitle="Tag form - Atributo action"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo autocomplete */}
							<Route path = "autocomplete" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="autocomplete" pageTitle="Tag form - Atributo autocomplete"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo enctype */}
							<Route path = "enctype" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="enctype" pageTitle="Tag form - Atributo enctype"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo method */}
							<Route path = "method" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="method" pageTitle="Tag form - Atributo method"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="name" pageTitle="Tag form - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo novalidate */}
							<Route path = "novalidate" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="novalidate" pageTitle="Tag form - Atributo novalidate"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rel */}
							<Route path = "rel" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="rel" pageTitle="Tag form - Atributo rel"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo target */}
							<Route path = "target" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <form>" subtitle="target" pageTitle="Tag form - Atributo target"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							{/*<Route path = "" element = {(
								<Navigate to = "accept-charset"></Navigate>
							)}></Route>*/}
						</Route>
						{/* Tag html */}
						<Route path = "html">
							{/* Atributo xmlns */}
							<Route path = "xmlns" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <html>" subtitle="xmlns" pageTitle="Tag html - Atributo xmlns"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "xmlns"></Navigate>
							)}></Route>
						</Route>
						{/* Tag iframe */}
						<Route path = "iframe">
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="height" pageTitle="Tag iframe - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="name" pageTitle="Tag iframe - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo referrerpolicy */}
							<Route path = "referrerpolicy" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="referrerpolicy" pageTitle="Tag iframe - Atributo referrerpolicy"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo sandbox */}
							<Route path = "sandbox" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="sandbox" pageTitle="Tag iframe - Atributo sandbox"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="src" pageTitle="Tag iframe - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo srcdoc */}
							<Route path = "srcdoc" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="srcdoc" pageTitle="Tag iframe - Atributo srcdoc"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <iframe>" subtitle="width" pageTitle="Tag iframe - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "height"></Navigate>
							)}></Route>
						</Route>
						{/* Tag img */}
						<Route path = "img">
							{/* Atributo alt */}
							<Route path = "alt" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="alt" pageTitle="Tag img - Atributo alt"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="height" pageTitle="Tag img - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo ismap */}
							<Route path = "ismap" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="ismap" pageTitle="Tag img - Atributo ismap"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo loading */}
							<Route path = "loading" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="loading" pageTitle="Tag img - Atributo loading"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo longdesc */}
							<Route path = "longdesc" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="longdesc" pageTitle="Tag img - Atributo longdesc"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo referrerpolicy */}
							<Route path = "referrerpolicy" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="referrerpolicy" pageTitle="Tag img - Atributo referrerpolicy"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="src" pageTitle="Tag img - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo usemap */}
							<Route path = "usemap" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="usemap" pageTitle="Tag img - Atributo usemap"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <img>" subtitle="width" pageTitle="Tag img - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "alt"></Navigate>
							)}></Route>
						</Route>
						{/* Tag input */}
						<Route path = "input">
							{/* Atributo accept */}
							<Route path = "accept" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="accept" pageTitle="Tag input - Atributo accept"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo alt */}
							<Route path = "alt" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="alt" pageTitle="Tag input - Atributo alt"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo autocomplete */}
							<Route path = "autocomplete" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="autocomplete" pageTitle="Tag input - Atributo autocomplete"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo autofocus */}
							<Route path = "autofocus" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="autofocus" pageTitle="Tag input - Atributo autofocus"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo checked */}
							<Route path = "checked" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="checked" pageTitle="Tag input - Atributo checked"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo dirname */}
							<Route path = "dirname" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="dirname" pageTitle="Tag input - Atributo dirname"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="disabled" pageTitle="Tag input - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="form" pageTitle="Tag input - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formaction */}
							<Route path = "formaction" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="formaction" pageTitle="Tag input - Atributo formaction"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formenctype */}
							<Route path = "formenctype" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="formenctype" pageTitle="Tag input - Atributo formenctype"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formmethod */}
							<Route path = "formmethod" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="formmethod" pageTitle="Tag input - Atributo formmethod"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formnovalidate */}
							<Route path = "formnovalidate" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="formnovalidate" pageTitle="Tag input - Atributo formnovalidate"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo formtarget */}
							<Route path = "formtarget" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="formtarget" pageTitle="Tag input - Atributo formtarget"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="height" pageTitle="Tag input - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo list */}
							<Route path = "list" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="list" pageTitle="Tag input - Atributo list"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo max */}
							<Route path = "max" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="max" pageTitle="Tag input - Atributo max"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo maxlength */}
							<Route path = "maxlength" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="maxlength" pageTitle="Tag input - Atributo maxlength"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo min */}
							<Route path = "min" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="min" pageTitle="Tag input - Atributo min"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo minlength */}
							<Route path = "minlength" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="minlength" pageTitle="Tag input - Atributo minlength"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo multiple */}
							<Route path = "multiple" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="multiple" pageTitle="Tag input - Atributo multiple"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="name" pageTitle="Tag input - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo pattern */}
							<Route path = "pattern" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="pattern" pageTitle="Tag input - Atributo pattern"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo placeholder */}
							<Route path = "placeholder" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="placeholder" pageTitle="Tag input - Atributo placeholder"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo popovertarget */}
							<Route path = "popovertarget" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="popovertarget" pageTitle="Tag input - Atributo popovertarget"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo popovertargetaction */}
							<Route path = "popovertargetaction" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="popovertargetaction" pageTitle="Tag input - Atributo popovertargetaction"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo readonly */}
							<Route path = "readonly" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="readonly" pageTitle="Tag input - Atributo readonly"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo required */}
							<Route path = "required" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="required" pageTitle="Tag input - Atributo required"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo size */}
							<Route path = "size" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="size" pageTitle="Tag input - Atributo size"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="src" pageTitle="Tag input - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo step */}
							<Route path = "step" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="step" pageTitle="Tag input - Atributo step"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="type" pageTitle="Tag input - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="value" pageTitle="Tag input - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <input>" subtitle="width" pageTitle="Tag input - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "accept"></Navigate>
							)}></Route>
						</Route>
						{/* Tag ins */}
						<Route path = "ins">
							{/* Atributo cite */}
							<Route path = "cite" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <ins>" subtitle="cite" pageTitle="Tag ins - Atributo cite"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo datetime */}
							<Route path = "datetime" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <ins>" subtitle="datetime" pageTitle="Tag ins - Atributo datetime"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "cite"></Navigate>
							)}></Route>
						</Route>
						{/* Tag label */}
						<Route path = "label">
							{/* Atributo for */}
							<Route path = "for" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <label>" subtitle="for" pageTitle="Tag label - Atributo for"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <label>" subtitle="form" pageTitle="Tag label - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							{/*<Route path = "" element = {(
								<Navigate to = "for"></Navigate>
							)}></Route>*/}
						</Route>
						{/* Tag li */}
						<Route path = "li">
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <li>" subtitle="value" pageTitle="Tag li - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "value"></Navigate>
							)}></Route>
						</Route>
						{/* Tag link */}
						<Route path = "link">
							{/* Atributo href */}
							<Route path = "href" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="href" pageTitle="Tag link - Atributo href"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo hreflang */}
							<Route path = "hreflang" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="hreflang" pageTitle="Tag link - Atributo hreflang"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo media */}
							<Route path = "media" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="media" pageTitle="Tag link - Atributo media"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo referrerpolicy */}
							<Route path = "referrerpolicy" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="referrerpolicy" pageTitle="Tag link - Atributo referrerpolicy"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rel */}
							<Route path = "rel" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="rel" pageTitle="Tag link - Atributo rel"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo sizes */}
							<Route path = "sizes" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="sizes" pageTitle="Tag link - Atributo sizes"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <link>" subtitle="type" pageTitle="Tag link - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "href"></Navigate>
							)}></Route>
						</Route>
						{/* Tag map */}
						<Route path = "map">
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <map>" subtitle="name" pageTitle="Tag map - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "name"></Navigate>
							)}></Route>
						</Route>
						{/* Tag meta */}
						<Route path = "meta">
							{/* Atributo charset */}
							<Route path = "charset" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meta>" subtitle="charset" pageTitle="Tag meta - Atributo charset"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo content */}
							<Route path = "content" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meta>" subtitle="content" pageTitle="Tag meta - Atributo content"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo http-equiv */}
							<Route path = "http-equiv" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meta>" subtitle="http-equiv" pageTitle="Tag meta - Atributo http-equiv"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meta>" subtitle="name" pageTitle="Tag meta - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "charset"></Navigate>
							)}></Route>
						</Route>
						{/* Tag meter */}
						<Route path = "meter">
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="form" pageTitle="Tag meter - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo high */}
							<Route path = "high" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="high" pageTitle="Tag meter - Atributo high"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo low */}
							<Route path = "low" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="low" pageTitle="Tag meter - Atributo low"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo max */}
							<Route path = "max" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="max" pageTitle="Tag meter - Atributo max"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo min */}
							<Route path = "min" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="min" pageTitle="Tag meter - Atributo min"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo optimum */}
							<Route path = "optimum" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="optimum" pageTitle="Tag meter - Atributo optimum"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <meter>" subtitle="value" pageTitle="Tag meter - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "form"></Navigate>
							)}></Route>
						</Route>
						{/* Tag object */}
						<Route path = "object">
							{/* Atributo data */}
							<Route path = "data" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="data" pageTitle="Tag object - Atributo data"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="form" pageTitle="Tag object - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="height" pageTitle="Tag object - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="name" pageTitle="Tag object - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="type" pageTitle="Tag object - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo usemap */}
							<Route path = "usemap" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="usemap" pageTitle="Tag object - Atributo usemap"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <object>" subtitle="width" pageTitle="Tag object - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "data"></Navigate>
							)}></Route>
						</Route>
						{/* Tag ol */}
						<Route path = "ol">
							{/* Atributo reversed */}
							<Route path = "reversed" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <ol>" subtitle="reversed" pageTitle="Tag ol - Atributo reversed"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo start */}
							<Route path = "start" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <ol>" subtitle="start" pageTitle="Tag ol - Atributo start"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <ol>" subtitle="type" pageTitle="Tag ol - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "reversed"></Navigate>
							)}></Route>
						</Route>
						{/* Tag optgroup */}
						<Route path = "optgroup">
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <optgroup>" subtitle="disabled" pageTitle="Tag optgroup - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo label */}
							<Route path = "label" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <optgroup>" subtitle="label" pageTitle="Tag optgroup - Atributo label"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "disabled"></Navigate>
							)}></Route>
						</Route>
						{/* Tag option */}
						<Route path = "option">
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <option>" subtitle="disabled" pageTitle="Tag option - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo label */}
							<Route path = "label" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <option>" subtitle="label" pageTitle="Tag option - Atributo label"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo selected */}
							<Route path = "selected" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <option>" subtitle="selected" pageTitle="Tag option - Atributo selected"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <option>" subtitle="value" pageTitle="Tag option - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "disabled"></Navigate>
							)}></Route>
						</Route>
						{/* Tag output */}
						<Route path = "output">
							{/* Atributo for */}
							<Route path = "for" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <output>" subtitle="for" pageTitle="Tag output - Atributo for"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <output>" subtitle="form" pageTitle="Tag output - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <output>" subtitle="name" pageTitle="Tag output - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "for"></Navigate>
							)}></Route>
						</Route>
						{/* Tag param */}
						<Route path = "param">
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <param>" subtitle="name" pageTitle="Tag param - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <param>" subtitle="value" pageTitle="Tag param - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "name"></Navigate>
							)}></Route>
						</Route>
						{/* Tag progress */}
						<Route path = "progress">
							{/* Atributo max */}
							<Route path = "max" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <progress>" subtitle="max" pageTitle="Tag progress - Atributo max"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo value */}
							<Route path = "value" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <progress>" subtitle="value" pageTitle="Tag progress - Atributo value"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "max"></Navigate>
							)}></Route>
						</Route>
						{/* Tag q */}
						<Route path = "q">
							{/* Atributo cite */}
							<Route path = "cite" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <q>" subtitle="cite" pageTitle="Tag q - Atributo cite"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "cite"></Navigate>
							)}></Route>
						</Route>
						{/* Tag script */}
						<Route path = "script">
							{/* Atributo async  */}
							<Route path = "async" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="async" pageTitle="Tag script - Atributo async"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo crossorigin  */}
							<Route path = "crossorigin" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="crossorigin" pageTitle="Tag script - Atributo crossorigin"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo defer  */}
							<Route path = "defer" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="defer" pageTitle="Tag script - Atributo defer"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo integrity  */}
							<Route path = "integrity" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="integrity" pageTitle="Tag script - Atributo integrity"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo referrerpolicy  */}
							<Route path = "referrerpolicy" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="referrerpolicy" pageTitle="Tag script - Atributo referrerpolicy"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src  */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="src" pageTitle="Tag script - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type  */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <script>" subtitle="type" pageTitle="Tag script - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "async"></Navigate>
							)}></Route>
						</Route>
						{/* Tag select */}
						<Route path = "select">
							{/* Atributo autofocus */}
							<Route path = "autofocus" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="autofocus" pageTitle="Tag select - Atributo autofocus"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="disabled" pageTitle="Tag select - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="form" pageTitle="Tag select - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo multiple */}
							<Route path = "multiple" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="multiple" pageTitle="Tag select - Atributo multiple"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="name" pageTitle="Tag select - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo required */}
							<Route path = "required" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="required" pageTitle="Tag select - Atributo required"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo size */}
							<Route path = "size" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <select>" subtitle="size" pageTitle="Tag select - Atributo size"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "autofocus"></Navigate>
							)}></Route>
						</Route>
						{/* Tag source */}
						<Route path = "source">
							{/* Atributo media */}
							<Route path = "media" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <source>" subtitle="media" pageTitle="Tag source - Atributo media"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <source>" subtitle="src" pageTitle="Tag source - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo srcset */}
							<Route path = "srcset" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <source>" subtitle="srcset" pageTitle="Tag source - Atributo srcset"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <source>" subtitle="type" pageTitle="Tag source - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "media"></Navigate>
							)}></Route>
						</Route>
						{/* Tag style */}
						<Route path = "style">
							{/* Atributo media */}
							<Route path = "media" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <style>" subtitle="media" pageTitle="Tag style - Atributo media"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo type */}
							<Route path = "type" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <style>" subtitle="type" pageTitle="Tag style - Atributo type"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "media"></Navigate>
							)}></Route>
						</Route>
						{/* Tag td */}
						<Route path = "td">
							{/* Atributo colspan */}
							<Route path = "colspan" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <td>" subtitle="colspan" pageTitle="Tag td - Atributo colspan"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo headers */}
							<Route path = "headers" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <td>" subtitle="headers" pageTitle="Tag td - Atributo headers"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rowspan */}
							<Route path = "rowspan" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <td>" subtitle="rowspan" pageTitle="Tag td - Atributo rowspan"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "colspan"></Navigate>
							)}></Route>
						</Route>
						{/* Tag textarea */}
						<Route path = "textarea">
							{/* Atributo autofocus */}
							<Route path = "autofocus" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="autofocus" pageTitle="Tag textarea - Atributo autofocus"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo cols */}
							<Route path = "cols" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="cols" pageTitle="Tag textarea - Atributo cols"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo dirname */}
							<Route path = "dirname" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="dirname" pageTitle="Tag textarea - Atributo dirname"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo disabled */}
							<Route path = "disabled" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="disabled" pageTitle="Tag textarea - Atributo disabled"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo form */}
							<Route path = "form" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="form" pageTitle="Tag textarea - Atributo form"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo maxlength */}
							<Route path = "maxlength" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="maxlength" pageTitle="Tag textarea - Atributo maxlength"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo name */}
							<Route path = "name" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="name" pageTitle="Tag textarea - Atributo name"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo placeholder */}
							<Route path = "placeholder" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="placeholder" pageTitle="Tag textarea - Atributo placeholder"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo readonly */}
							<Route path = "readonly" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="readonly" pageTitle="Tag textarea - Atributo readonly"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo required */}
							<Route path = "required" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="required" pageTitle="Tag textarea - Atributo required"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rows */}
							<Route path = "rows" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="rows" pageTitle="Tag textarea - Atributo rows"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo wrap */}
							<Route path = "wrap" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <textarea>" subtitle="wrap" pageTitle="Tag textarea - Atributo wrap"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "autofocus"></Navigate>
							)}></Route>
						</Route>
						{/* Tag th */}
						<Route path = "th">
							{/* Atributo abbr */}
							<Route path = "abbr" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <th>" subtitle="abbr" pageTitle="Tag th - Atributo abbr"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo colspan */}
							<Route path = "colspan" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <th>" subtitle="colspan" pageTitle="Tag th - Atributo colspan"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo headers */}
							<Route path = "headers" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <th>" subtitle="headers" pageTitle="Tag th - Atributo headers"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo rowspan */}
							<Route path = "rowspan" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <th>" subtitle="rowspan" pageTitle="Tag th - Atributo rowspan"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo scope */}
							<Route path = "scope" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <th>" subtitle="scope" pageTitle="Tag th - Atributo scope"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "abbr"></Navigate>
							)}></Route>
						</Route>
						{/* Tag time */}
						<Route path = "time">
							{/* Atributo datetime */}
							<Route path = "datetime" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <time>" subtitle="datetime" pageTitle="Tag time - Atributo datetime"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "datetime"></Navigate>
							)}></Route>
						</Route>
						{/* Tag track */}
						<Route path = "track">
							{/* Atributo default */}
							<Route path = "default" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <track>" subtitle="default" pageTitle="Tag track - Atributo default"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo kind */}
							<Route path = "kind" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <track>" subtitle="kind" pageTitle="Tag track - Atributo kind"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo label */}
							<Route path = "label" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <track>" subtitle="label" pageTitle="Tag track - Atributo label"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <track>" subtitle="src" pageTitle="Tag track - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo srclang */}
							<Route path = "srclang" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <track>" subtitle="srclang" pageTitle="Tag track - Atributo srclang"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "default"></Navigate>
							)}></Route>
						</Route>
						{/* Tag video */}
						<Route path = "video">
							{/* Atributo autoplay */}
							<Route path = "autoplay" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="autoplay" pageTitle="Tag video - Atributo autoplay"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo controls */}
							<Route path = "controls" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="controls" pageTitle="Tag video - Atributo controls"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo height */}
							<Route path = "height" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="height" pageTitle="Tag video - Atributo height"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo loop */}
							<Route path = "loop" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="loop" pageTitle="Tag video - Atributo loop"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo muted */}
							<Route path = "muted" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="muted" pageTitle="Tag video - Atributo muted"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo poster */}
							<Route path = "poster" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="poster" pageTitle="Tag video - Atributo poster"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo preload */}
							<Route path = "preload" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="preload" pageTitle="Tag video - Atributo preload"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo src */}
							<Route path = "src" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="src" pageTitle="Tag video - Atributo src"></TutorialMain>)}></Page>
							)}></Route>
							{/* Atributo width */}
							<Route path = "width" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos por tag" title = "Tag <video>" subtitle="width" pageTitle="Tag video - Atributo width"></TutorialMain>)}></Page>
							)}></Route>
							{/* Não encontrado */}
							<Route path = "" element = {(
								<Navigate to = "autoplay"></Navigate>
							)}></Route>
						</Route>
					</Route>
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
