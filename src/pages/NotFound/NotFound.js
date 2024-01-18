import "./NotFound.css"
import { NotFound404 } from "./NotFound404";
import { NotFoundPanelHeaderDot } from "./NotFoundPanelHeaderDot";
import { NotFOundRedirectLink } from "./NotFoundRedirectLink";
import { NotFoundTitle } from "./NotFoundTitle";

export default function NotFound() {
    return (
        <div className = "display-flex-column" id = "not-found">
            <div id = "notfound-panel">
                <header id = "notfound-panel-header">
                    <div id = "notfound-panel-dots-div">
                        <NotFoundPanelHeaderDot></NotFoundPanelHeaderDot>
                        <NotFoundPanelHeaderDot></NotFoundPanelHeaderDot>
                        <NotFoundPanelHeaderDot></NotFoundPanelHeaderDot>
                    </div>
                </header>
                <main id = "notfound-panel-main">
                    <NotFound404>404</NotFound404>
                    <NotFoundTitle>Página não encontrada</NotFoundTitle>
                    <NotFOundRedirectLink href = "/">Retornar a página inicial</NotFOundRedirectLink>
                </main>
            </div>
        </div>
    );
};