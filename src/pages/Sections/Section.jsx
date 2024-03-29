import Website from "./html/website/Website";
import BootcampReasons from "./html/bootcamp/BootcampReasons";

export default function Section(prop) {
    const content = prop.content;
    if(content) {
        let section;
        switch(content) {
            case "html-website":
                section = (<Website></Website>);
                break;
            case "html-bootcamp-reasons":
                section = (<BootcampReasons></BootcampReasons>);
                break;
        };
        return (
            section
        );
    };
};