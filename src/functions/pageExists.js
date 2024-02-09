import pages from "../pages.json";

export default function pageExists(language, topicName, title, subtitle) {
    /* Buscando todos os tópicos */
    const topics = pages[language][topicName];

    /* Verificando tópico por tópico */
    for(const topic of topics) {

        /* Verificando o título do tópico */
        if(topic.title === title) {
            if(topic.sections && topic.sections.length >= 1) {
                return true;
            };
        };
    };
    return false;
};