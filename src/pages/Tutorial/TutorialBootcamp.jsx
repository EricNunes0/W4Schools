import { TutorialBootcampsMedals } from "./TutorialBootcampsMedals";

export default function TutorialBootcamp(prop) {
    const content = prop.content;
    if(content) {
        const title = content.title;
        const subtitle = content.subtitle;
        const duration = content.duration;
        const language = content.language;
        const link = content.href || content.link || "";
        return (
            <div className = "tutorial-bootcamps">
                <main className = "tutorial-bootcamps-mains">
                    <h1>{title}</h1>
                    <h6>{subtitle}</h6>
                    <h6><b>Duração:</b> {duration}</h6>
                    <a className = "tutorial-bootcamps-links display-flex" href = {link}>Saber mais</a>
                    <TutorialBootcampsMedals href = {link} language = {language.toLocaleLowerCase()}></TutorialBootcampsMedals>
                </main>
            </div>
        );
    };
};