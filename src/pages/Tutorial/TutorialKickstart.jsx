import { TutorialKickstartsMedals } from "./TutorialKickstartsMedals";

export default function TutorialKickstart(prop) {
    const language = prop.language;
    const link = prop.link;
    return (
        <div className = "tutorial-kickstarts">
            <main className = "tutorial-kickstarts-mains">
                <h1>Dê o pontapé inicial na sua carreira</h1>
                <h2>Obtenha a certificação concluindo o curso de {language}</h2>
                <a className = "tutorial-kickstarts-links display-flex" href = {link}>Obter certificado</a>
                <TutorialKickstartsMedals href = {link} language = {language.toLocaleLowerCase()}></TutorialKickstartsMedals>
            </main>
        </div>
    )
};