import menu from "../../pages.json";
import { SidebarMenuLink } from "./SidebarMenuLink";
import { SidebarMenuLinkSub } from "./SidebarMenuLinkSub";
import { SidebarMenuSubtitleButton } from "./SidebarMenuSubtitleButton";
import { SidebarMenuTitle } from "./SidebarMenuTitle";

export default function SidebarMenuTopics(language, topicName, title, subtitle) {
    let links = [];

    function SidebarMenuLinkCreate(item) {
        let itemTitle = item.title;
        let itemLink = item.link;
        /* Para criar links com um ou mais subtítulos */
        if(item.subtitles) {
            let subtitlesLinks = [];
            for(const sub of item.subtitles) {
                subtitlesLinks.push(<SidebarMenuLinkSub href = {sub.link} data-active = {subtitle === sub.subtitle ? true : false}>{sub.subtitle}</SidebarMenuLinkSub>);
            };
            let id = Math.floor(Math.random() * (1000 * 1000))
            let subtitleButtonId = `sidebar-subtitles-button-${id}`;
            let subtitleLinksDivId = `sidebar-subtitles-links-div-${id}`;
            return (
                <div style = {{width: "100%"}}>
                    <SidebarMenuSubtitleButton
                        id = {subtitleButtonId}
                        data-active = {title === itemTitle ? true : false}
                        data-closed = {title === itemTitle ? false : true}
                        onClick = {
                            function() {
                                const subtitleButton = document.querySelector(`#${subtitleButtonId}`);
                                const subtitleLinksDiv = document.querySelector(`#${subtitleLinksDivId}`);
                                function openButton() {
                                    subtitleButton.dataset.closed = "false";
                                    subtitleLinksDiv.dataset.closed = "false";
                                };
                                function closeButton() {
                                    subtitleButton.dataset.closed = "true";
                                    subtitleLinksDiv.dataset.closed = "true";
                                };
                                subtitleButton.dataset.closed === "true" ? openButton() : closeButton();
                            }
                        }
                    >{itemTitle}</SidebarMenuSubtitleButton>
                    <div className = "sidebar-subtitles-links-divs" id = {subtitleLinksDivId} key = {subtitleLinksDivId} data-closed = {title === itemTitle ? false : true}>
                        {subtitlesLinks}
                    </div>
                </div>
            );
        }
        /* Para criar links comuns sem subtítulos */
        if(item.sections) {
            return (
                <SidebarMenuLink href = {itemLink} data-active = {title === itemTitle ? true : false}>{itemTitle}</SidebarMenuLink>
            );
        };
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
    );
};