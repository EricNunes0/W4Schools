export default function pageTitle(title) {
    const titleTag = document.querySelector("title");
    titleTag.innerHTML = title;
};