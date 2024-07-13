import "./Footer.css";
import { FooterArticleLink } from "./FooterArticleLink";
import { FooterArticleTitle } from "./FooterArticleTitle";
import { FooterBottomDescription } from "./FooterBottomDescription";
import { FooterBottomIcon } from "./FooterBottomIcon";
import { FooterBottomLink } from "./FooterBottomLink";
import { FooterBottomCreatedBy } from "./FooterCreatedBy";
import { FooterHeaderLink } from "./FooterHeaderLink";
import { FooterHeaderLogo } from "./FooterHeaderLogo";

export default function Footer() {
    return (
        <footer id = "footer">
            <main className = "display-flex-column" id = "footer-main">
                <header className = "display-flex-row" id = "footer-header">
                    <div id = "footer-header-logo-div">
                        <FooterHeaderLogo className = "display-flex" href = "/"></FooterHeaderLogo>
                    </div>
                    <div className = "display-flex-row"  id = "footer-header-links-div">
                        <FooterHeaderLink href = "/spaces">Espaços</FooterHeaderLink>
                        <FooterHeaderLink href = "/pro">Upgrade</FooterHeaderLink>
                        <FooterHeaderLink href = "/pro">Ad-free</FooterHeaderLink>
                        <FooterHeaderLink href = "/newsletter">Notícias</FooterHeaderLink>
                        <FooterHeaderLink href = "/certification">Espaços</FooterHeaderLink>
                        <FooterHeaderLink href = "/">Reportar erro</FooterHeaderLink>
                    </div>
                </header>
                <article className = "display-flex-row" id = "footer-article">
                    <section className = "footer-article-topics">
                        <div className = "footer-article-titles-divs">
                            <FooterArticleTitle>Top Tutoriais</FooterArticleTitle>
                        </div>
                        <div className = "footer-article-links-divs display-flex-column">
                            <FooterArticleLink href = "/html/default">HTML Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/css/default">CSS Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/js/default">JavaScript Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/bootstrap/default">Bootstrap Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/python/default">Python Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/sql/default">SQL Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/php/default">PHP Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/java/default">Java Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/c/default">C Tutorial</FooterArticleLink>
                            <FooterArticleLink href = "/cpp/default">C++ Tutorial</FooterArticleLink>
                        </div>
                    </section>
                    <section className = "footer-article-topics">
                        <div className = "footer-article-titles-divs">
                            <FooterArticleTitle>Top Referências</FooterArticleTitle>
                        </div>
                        <div className = "footer-article-links-divs display-flex-column">
                            <FooterArticleLink href = "/html/reference">HTML Referência</FooterArticleLink>
                            <FooterArticleLink href = "/css/reference">CSS Referência</FooterArticleLink>
                            <FooterArticleLink href = "/js/reference">JavaScript Referência</FooterArticleLink>
                            <FooterArticleLink href = "/sql/reference">SQL Referência</FooterArticleLink>
                            <FooterArticleLink href = "/python/reference">Python Referência</FooterArticleLink>
                            <FooterArticleLink href = "/bootstrap/reference">Bootstrap Referência</FooterArticleLink>
                            <FooterArticleLink href = "/php/reference">PHP Referência</FooterArticleLink>
                            <FooterArticleLink href = "/java/reference">Java Referência</FooterArticleLink>
                            <FooterArticleLink href = "/angular/reference">Angular Referência</FooterArticleLink>
                            <FooterArticleLink href = "/jquery/reference">jQuery Referência</FooterArticleLink>
                        </div>
                    </section>
                    <section className = "footer-article-topics">
                        <div className = "footer-article-titles-divs">
                            <FooterArticleTitle>Top Exemplos</FooterArticleTitle>
                        </div>
                        <div className = "footer-article-links-divs display-flex-column">
                            <FooterArticleLink href = "/html/examples">HTML Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/css/examples">CSS Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/js/examples">JavaScript Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/sql/examples">SQL Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/python/examples">Python Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/bootstrap/examples">Bootstrap Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/php/examples">PHP Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/java/examples">Java Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/xml/examples">XML Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/jquery/examples">jQuery Exemplos</FooterArticleLink>
                        </div>
                    </section>
                    <section className = "footer-article-topics">
                        <div className = "footer-article-titles-divs">
                            <FooterArticleTitle>Top Exemplos</FooterArticleTitle>
                        </div>
                        <div className = "footer-article-links-divs display-flex-column">
                            <FooterArticleLink href = "/html/examples">HTML Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/css/examples">CSS Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/js/examples">JavaScript Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/sql/examples">SQL Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/python/examples">Python Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/bootstrap/examples">Bootstrap Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/php/examples">PHP Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/java/examples">Java Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/xml/examples">XML Exemplos</FooterArticleLink>
                            <FooterArticleLink href = "/jquery/examples">jQuery Exemplos</FooterArticleLink>
                        </div>
                    </section>
                </article>
                <div id = "footer-bottom">
                    <main className = "display-flex-column" id = "footer-bottom-main">
                        <section id = "footer-bottom-top">
                            <div className = "display-flex-row" id = "footer-bottom-icons-divs">
                                <FooterBottomIcon media = "facebook" href = "/"></FooterBottomIcon>
                                <FooterBottomIcon media = "discord" href = "/"></FooterBottomIcon>
                                <FooterBottomIcon media = "linkedin" href = "/"></FooterBottomIcon>
                                <FooterBottomIcon media = "instagram" href = "/"></FooterBottomIcon>
                                <FooterBottomLink href = "/">FÓRUM</FooterBottomLink>
                                <FooterBottomLink href = "/">SOBRE</FooterBottomLink>
                            </div>
                        </section>
                        <section id = "footer-bottom-center">
                            <FooterBottomDescription>W4Schools é um site criado como uma forma de aprendizado e treino. Este projeto é só uma cópia genérica do W3Schools e não possui nenhum envolvimento com os criadores do mesmo.</FooterBottomDescription>
                        </section>
                        <section id = "footer-bottom-bottom">
                            <FooterBottomCreatedBy>Criado por Eric Nunes</FooterBottomCreatedBy>
                        </section>
                    </main>
                </div>
            </main>
        </footer>
    )
};