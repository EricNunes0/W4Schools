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
						{/* Tag a */}
						<Route path = "a">
							{/* Atributo download */}
							<Route path = "download" element = {(
								<Page content = {(<TutorialMain language = "attributes" topic = "Atributos" title = "Tag <a>" subtitle="download" pageTitle="Tag a - Atributo download"></TutorialMain>)}></Page>
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
