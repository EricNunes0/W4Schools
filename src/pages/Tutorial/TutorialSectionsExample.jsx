import { TutorialExampleHeaderTitle } from "./TutorialExampleHeaderTitle";
import { TutorialExampleButton } from "./TutorialExampleButton";
import TutorialManagePages from "./TutorialManagePages";
import { TutorialExampleDescription } from "./TutorialExampleDescription";
import TutorialExampleResults from "./TutorialExampleResults";

export default function TutorialSectionsExample(content) {
    content = content.content;
    let id = Math.floor(Math.random() * (10000 * 10000));
    let exampleId = `tutorial-example-${id}`;
    let articleId = `tutorial-example-article-${id}`;
    let exampleButtonId = `tutorial-example-button-${id}`;

    let article;
    let articleContents = [];
    if(content.lines) {
        for(const line of content.lines) {
            articleContents.push(new TutorialManagePages().convertLine(line));
        };

        article = (
            <article className = "tutorials-examples-articles" id = {articleId}>
                {articleContents}
            </article>
        );
    } else if(content.parts) {
        for(const part of content.parts) {
            if(part.type === "code") {
                articleContents.push(new TutorialManagePages().lineCode(part));
            };
        };

        article = (
            <article className = "tutorials-examples-articles" id = {articleId}>
                {articleContents}
            </article>
        );
    };

    return (
        <div className = "tutorials-sections-examples" id = {exampleId} key = {exampleId}>
            <main className = "tutorials-examples-mains">
                <header className = "tutorials-examples-headers" data-hidden = {content.headerHide || content.exampleHide || false}>
                    <TutorialExampleHeaderTitle>{content.title}</TutorialExampleHeaderTitle>
                    <TutorialExampleDescription>{content.description || ""}</TutorialExampleDescription>
                </header>
                {article}
                <footer className = "tutorials-examples-footers" data-hidden = {content.footerHide || content.exampleHide || false}>
                    <TutorialExampleButton id = {exampleButtonId} onClick = {
                        function() {
                            function exampleButtonAnimation() {
                                const exampleButton = document.querySelector(`#${exampleButtonId}`);
                                const exampleAnimationDuration = 1;
                                exampleButton.dataset.copy = true;
                                setTimeout(function() {
                                    exampleButton.dataset.copy = false;
                                }, exampleAnimationDuration * 1000);
                            };

                            const article = document.querySelector(`#${articleId}`);
                            const codes = article.querySelectorAll("code");
                            let copyText = "";
                            for(const code of codes) {
                                copyText = `${copyText}${code.innerHTML.replace("&lt;", "<").replace("&gt;", ">").replace("&nbsp;", " ")}`;
                            };
                            copyText = copyText.replace("&lt;", "<").replace("&gt;", ">").replace("&nbsp;", " ");
                            navigator.clipboard.writeText(copyText);
                            exampleButtonAnimation();
                        }
                    } data-copy = {false}>Copiar</TutorialExampleButton>
                </footer>
                {/* Resultados */}
                <TutorialExampleResults results = {content.results}></TutorialExampleResults>
            </main>
        </div>
    )
};