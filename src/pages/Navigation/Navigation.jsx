import "./Navigation.css";
import NavigationHide from "./NavigationHide";
import { NavigationButton } from "./NavigationButton";
import { NavigationHideButton } from "./NavigationHideButton";
import { NavigationListButton } from "./NavigationListButton";
import { NavigationLoginButton } from "./NavigationLoginButton";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationRightButton } from "./NavigationRightButton";
import { NavigationSearchBar } from "./NavigationSearchBar";
import { NavigationSearchButton } from "./NavigationSearchButton";
import { NavigationSignupButton } from "./NavigationSignUpButton";
import { NavigationThemeButton } from "./NavigationThemeButton";

export default function Navigation() {
    return (
        <div id = "navigation">
            <main id = "navigation-main">
                <header id = "navigation-header">
                    <section className = "navigation-header-sections" id = "left">
                        <div id = "navigation-logo-div">
                            <i id = "navigation-logo"></i>
                            <NavigationLogo></NavigationLogo>
                        </div>
                        <div id = "navigation-list-buttons-div">
                            <NavigationListButton>Tutoriais</NavigationListButton>
                            <NavigationListButton>Exercícios</NavigationListButton>
                            <NavigationListButton>Certificados</NavigationListButton>
                            <NavigationListButton>Serviços</NavigationListButton>
                        </div>
                        <div id = "navigation-search-div">
                            <NavigationSearchBar></NavigationSearchBar>
                            <NavigationSearchButton></NavigationSearchButton>
                        </div>
                        <div id = "navigation-theme-button-div">
                            <NavigationThemeButton></NavigationThemeButton>
                        </div>
                    </section>
                    <section className = "navigation-header-sections" id = "right">
                        <div id = "navigation-right-buttons-div">
                            <NavigationRightButton data-right = "jobs">Trabalhos</NavigationRightButton>
                            <NavigationRightButton data-right = "spaces">Espaços</NavigationRightButton>
                            <NavigationRightButton data-right = "certified">Certificados</NavigationRightButton>
                        </div>
                        <div id = "navigation-sign-div">
                            <div id = "navigation-sign-area">
                                <NavigationSignupButton>Sign up</NavigationSignupButton>
                                <NavigationLoginButton>Log in</NavigationLoginButton>
                            </div>
                        </div>
                    </section>
                </header>
                <section id = "navigation-languages-section">
                    <NavigationButton>HTML</NavigationButton>
                    <NavigationButton>CSS</NavigationButton>
                    <NavigationButton>JS</NavigationButton>
                    <NavigationButton>SQL</NavigationButton>
                    <NavigationButton>Python</NavigationButton>
                    <NavigationButton>Java</NavigationButton>
                    <NavigationButton>PHP</NavigationButton>
                    <NavigationButton>C</NavigationButton>
                    <NavigationButton>C++</NavigationButton>
                    <NavigationButton>C#</NavigationButton>
                    <NavigationButton>Bootstrap</NavigationButton>
                    <NavigationButton>React</NavigationButton>
                    <NavigationButton>MySQL</NavigationButton>
                    <NavigationButton>jQuery</NavigationButton>
                    <NavigationButton>Excel</NavigationButton>
                    <NavigationButton>XML</NavigationButton>
                    <NavigationButton>Django</NavigationButton>
                    <NavigationButton>Numpy</NavigationButton>
                    <NavigationButton>Pandas</NavigationButton>
                    <NavigationButton>Node.js</NavigationButton>
                    <NavigationButton>R</NavigationButton>
                    <NavigationButton>TypeScript</NavigationButton>
                    <NavigationButton>Angular</NavigationButton>
                    <NavigationButton>Git</NavigationButton>
                    <NavigationButton>PostgreSQL</NavigationButton>
                    <NavigationButton>MongoDB</NavigationButton>
                    <NavigationButton>ASP</NavigationButton>
                    <NavigationButton>AWS</NavigationButton>
                    <NavigationButton>AI</NavigationButton>
                    <NavigationButton>GO</NavigationButton>
                    <NavigationButton>KOTLIN</NavigationButton>
                    <NavigationButton>SASS</NavigationButton>
                    <NavigationButton>VUE</NavigationButton>
                    <NavigationButton>GEN AI</NavigationButton>
                    <NavigationButton>SCIPY</NavigationButton>
                    <NavigationButton>CIBERSEGURANÇA</NavigationButton>
                    <NavigationButton>DATA SCIENCE</NavigationButton>
                </section>
            </main>
            <NavigationHideButton data-closed = "false" id = "navigation-hide-button" onClick = {NavigationHide}></NavigationHideButton>
        </div>
    )
};