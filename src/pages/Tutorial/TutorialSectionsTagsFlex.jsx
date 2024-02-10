import TutorialManagePages from "./TutorialManagePages";
import { TutorialSectionsTagsFlexLink } from "./TutorialSectionsTagsFlexLink";

export default function TutorialSectionsTagsFlex(prop) {
    const content = prop.content;
    let tags = [];
    if(content.tags) {
        for(const code of content.tags) {
            let codeParts = new TutorialManagePages().lineCodeParts(code);

            /* Se houver um link */
            if(code.link) {
                tags.push(
                    <div className = "tutorial-sections-tags-flex-divs">
                        <TutorialSectionsTagsFlexLink className = "tutorial-sections-tags-flex-links" href = {code.link} target = {code.target || "_self"}>{codeParts}</TutorialSectionsTagsFlexLink>
                    </div>
                );
            } else {
                tags.push(
                    <div className = "tutorial-sections-tags-flex-divs">{codeParts}</div>
                );
            };
        };
    };
    return (
        <div className = "tutorial-sections-tags-flex">
            {tags}
        </div>
    );
};