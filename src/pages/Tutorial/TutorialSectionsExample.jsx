import { TutorialExampleHeaderTitle } from "./TutorialExampleHeaderTitle";
import { TutorialExampleTryButton } from "./TutorialExampleTryButton";
import TutorialManagePages from "./TutorialManagePages";

export default function TutorialSectionsExample(content) {
    content = content.content;
    let id = `tutorial-example-article-${Math.floor(Math.random() * (10000 * 10000))}`;

    let articleContents = []
    for(const part of content.parts) {
        if(part.type === "code") {
            articleContents.push(new TutorialManagePages().convertTextToCode(part.code, part.content || null, part.contentIndex || null, part.tabs || 0));
        };
    };

    return (
        <div className = "tutorials-sections-examples">
            <main className = "tutorials-examples-mains">
                <header className = "tutorials-examples-headers">
                    <TutorialExampleHeaderTitle>Exemplo</TutorialExampleHeaderTitle>
                </header>
                <article className = "tutorials-examples-articles" id = {id}>
                    {articleContents}
                </article>
                <footer className = "tutorials-examples-footers">
                    <TutorialExampleTryButton>Tentar</TutorialExampleTryButton>
                </footer>
            </main>
        </div>
    )
};