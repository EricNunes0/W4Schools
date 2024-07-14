import jsonSelect from "./jsonSelect";

export default function pageExists(json, language, topicName, title, subtitle) {
    let pages = jsonSelect(json);

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