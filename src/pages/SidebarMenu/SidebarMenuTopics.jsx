import menu from "../../pages.json";
import { SidebarMenuLink } from "./SidebarMenuLink";
import { SidebarMenuTitle } from "./SidebarMenuTitle";

export default function SidebarMenuTopics(language, topicName) {

    let links = [];

    function SidebarMenuLinkCreate(item) {
        let title = item.title;
        let link = item.link;
        return (
            <SidebarMenuLink href = {link}>{title}</SidebarMenuLink>
        );
    };

    for(const item of menu[language][topicName]) {
        links.push(SidebarMenuLinkCreate(item));
    };

    return (
        <div className = "sidebar-topics">
            <div className = "sidebar-title-divs">
                <SidebarMenuTitle>{topicName}</SidebarMenuTitle>
            </div>
            <div className = "sidebar-links-divs display-flex-column">
                {links}
            </div>
        </div>
    )
};