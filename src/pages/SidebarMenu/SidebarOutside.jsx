import SidebarMenuClose from "./SidebarMenuClose";

export default function SidebarOutside() {
    return (
        <div className = "sidebars-outside" data-closed = "true" onClick = {() => {SidebarMenuClose()}}></div>
    );
};