import HomeSection from "./HomeSection";

export default function HomeSections() {
    let sections = [];
    let languages = new Array();
    languages.push({
        "language": "html",
        "title": "HTML",
        "subtitle": "A linguagem para construir páginas da web",
        "buttons": [
            {
                "type": "learn",
                "text": "Aprenda HTML",
                "href": "/html/default"
            },
            {
                "type": "reference",
                "text": "Referência",
                "href": "/tags/default"
            },
            {
                "type": "certification",
                "text": "Certificados",
                "href": ""
            }
        ]
    });
    languages.push({
        "language": "css",
        "title": "CSS",
        "subtitle": "A linguagem para estilizar páginas da web",
        "buttons": [
            {
                "type": "learn",
                "text": "Aprenda CSS",
                "href": "/css/default"
            },
            {
                "type": "reference",
                "text": "Referência",
                "href": "/css/ref"
            },
            {
                "type": "certification",
                "text": "Certificados",
                "href": ""
            }
        ]
    });
    languages.push({
        "language": "javascript",
        "title": "JavaScript",
        "subtitle": "A linguagem para programar páginas da web",
        "buttons": [
            {
                "type": "learn",
                "text": "Aprenda JavaScript",
                "href": "/js/default"
            },
            {
                "type": "reference",
                "text": "Referência",
                "href": "/js/ref"
            },
            {
                "type": "certification",
                "text": "Certificados",
                "href": ""
            }
        ]
    });
    languages.push({
        "language": "python",
        "title": "Python",
        "subtitle": "Uma linguagem de programação popular",
        "buttons": [
            {
                "type": "learn",
                "text": "Aprenda Python",
                "href": "/python/default"
            },
            {
                "type": "reference",
                "text": "Referência",
                "href": "/python/ref"
            },
            {
                "type": "certification",
                "text": "Certificados",
                "href": ""
            }
        ]
    });

    for(const language of languages) {
        sections.push(HomeSection(language));
    }

    return (
        <div id = "home-sections-divs">
            {sections}
        </div>
    )
};