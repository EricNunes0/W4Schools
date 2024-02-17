export default function TutorialSectionsPicture(prop) {
    const content = prop.content;
    if(content) {
        let img;
        if(content.img) {
            img = (<img className = "tutorial-sections-pictures-images" src = {content.img.src || ""} alt = {content.img.alt || ""}></img>);
        };

        let sources = [];
        if(content.sources) {
            for(const source of content.sources) {
                sources.push(<source className = "tutorial-sections-pictures-sources" srcSet = {source.srcset || ""} media = {source.media || ""}></source>);
            };
        };

        return (
            <picture className = "tutorial-sections-pictures">
                {sources}
                {img}
            </picture>
        );
    };
};