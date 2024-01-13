import pages from "../../pages.json";

export default class TutorialManagePages {
    getSections(language, topic, title) {
        let sections = null;
        for(const page of pages[language][topic]) {
            if(page.title === title) {
                sections = page.sections;
            };
        };
        return sections;
    }
    getPreviousLink(language, topic, title) {
        let link = null;
        let datas = pages[language][topic]
        for(let i = 0; i <= datas.length - 1; i++){
            if(datas[i].title === title) {
                link = datas[i - 1] ? datas[i - 1].link : "/";
            };
        };
        return link;
    }
    getNextLink(language, topic, title) {
        let link = null;
        let datas = pages[language][topic]
        for(let i = 0; i <= datas.length - 1; i++){
            if(datas[i].title === title) {
                link = datas[i + 1] ? datas[i + 1].link : "/";
            };
        };
        return link;
    }
};