import "./Navigation.css";
import "./NavigationMenu.css";
import NavigationHide from "./NavigationHide";
import { NavigationHideButton } from "./NavigationHideButton";
import { NavigationListButton } from "./NavigationListButton";
import { NavigationListMenuButton } from "./NavigationListMenuButton";
import { NavigationLoginButton } from "./NavigationLoginButton";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationRightButton } from "./NavigationRightButton";
import { NavigationSearchBar } from "./NavigationSearchBar";
import { NavigationSearchButton } from "./NavigationSearchButton";
import { NavigationSignupButton } from "./NavigationSignUpButton";
import { NavigationThemeButton } from "./NavigationThemeButton";
import { NavigationMenuCloseButton } from "./NavigationMenuCloseButton";
import NavigationMenuClose from "./NavigationMenuClose";
import NavigationMenus from "./NavigationMenus";
import NavigationListMenu from "./NavigationListMenu";
import NavigationMobileMenuOpen from "./NavigationMobileMenuOpen";
import NavLanguageButtons from "./NavLanguageButtons";

export default function Navigation(prop) {
    let closed = prop.closed || true;

    return (
        <div id = "navigation">
            <main id = "navigation-main" data-closed = {closed}>
                <header id = "navigation-header">
                    <section className = "navigation-header-sections" id = "left">
                        <div id = "navigation-logo-div">
                            <i id = "navigation-logo"></i>
                            <NavigationLogo href = "/"></NavigationLogo>
                        </div>
                        <div id = "navigation-list-buttons-div">
                            <NavigationListMenuButton onClick = {() => {NavigationMobileMenuOpen()}}>Menu</NavigationListMenuButton>
                            <NavigationListButton onClick = {() => NavigationListMenu("tutorials")}><p>Tutoriais</p></NavigationListButton>
                            <NavigationListButton onClick = {() => NavigationListMenu("exercises")}><p>Exercícios</p></NavigationListButton>
                            <NavigationListButton onClick = {() => NavigationListMenu("certificates")}><p>Certificados</p></NavigationListButton>
                            <NavigationListButton onClick = {() => NavigationListMenu("services")}><p>Serviços</p></NavigationListButton>
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
                <article id = "navigation-article">
                    <NavLanguageButtons></NavLanguageButtons>
                    <section id = "navigation-menu" data-closed = "true">
                        <div id = "navigation-menu-close-div">
                            <NavigationMenuCloseButton onClick = {NavigationMenuClose}></NavigationMenuCloseButton>
                        </div>
                        <NavigationMenus></NavigationMenus>
                    </section>
                </article>
            </main>
            <NavigationHideButton data-closed = {closed} id = "navigation-hide-button" onClick = {NavigationHide}></NavigationHideButton>
        </div>
    )
};