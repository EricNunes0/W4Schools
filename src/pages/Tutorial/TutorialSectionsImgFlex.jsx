export default function TutorialSectionsImgFlex(prop) {
    const content = prop.content;
    if(content) {
        let images = [];
        if(content.images) {
            content.images.forEach((img) => {
                images.push(
                    <div>
                        <h3 className = "tutorial-sections-img-flex-titles">{img.title}</h3>
                        <img className = "tutorial-sections-img-flex-images" src = {img.src || ""} alt = {img.alt || ""}></img>
                    </div>
                );
            });
        };

        return (
            <div className = "tutorial-sections-img-flex" style = {{justifyContent: content.justifyContent || "", alignItems: content.alignItems || "", flexWrap: content.flexWrap || ""}}>
                {images}
            </div>
        );
    };
};