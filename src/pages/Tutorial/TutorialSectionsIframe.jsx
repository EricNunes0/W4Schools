export default function TutorialSectionsIframe(prop) {
    const content = prop.content;
    if(content) {
        return (
            <iframe className = "tutorial-sections-iframes" src = {content.src || ""} title = {content.title || ""}></iframe>
        );
    };
};