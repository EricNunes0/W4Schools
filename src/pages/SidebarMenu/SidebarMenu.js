import "./Sidebar.css";
import "./SidebarLateral.css";
import menu from "../../pages.json";
import SidebarMenuLateral from "./SidebarMenuLateral";
import SidebarMenuTopics from "./SidebarMenuTopics";

export default function SidebarMenu(prop) {
    const language = prop.language;
    const title = prop.title;
    const subtitle = prop.subtitle || null;
    let menuLanguage = menu[language];
    let topics = [];
    Object.keys(menuLanguage).forEach((topicName) => {
        topics.push(SidebarMenuTopics(language, topicName, title, subtitle));
    });

    return (
        <div className = "sidebar-menus custom-scroll-bar" data-nav = "false" data-closed = "true">
            <SidebarMenuLateral></SidebarMenuLateral>
            <main className = "sidebars-mains">
                {topics}
            </main>
        </div>
    );
};