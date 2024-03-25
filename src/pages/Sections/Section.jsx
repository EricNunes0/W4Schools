import Website from "./html/website/Website";

export default function Section(prop) {
    const content = prop.content;
    if(content) {
        let section;
        switch(content) {
            case "html-website":
                section = (<Website></Website>);
                break;
        };
        return (
            section
        );
    };
};