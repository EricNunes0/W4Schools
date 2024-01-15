import pages from "../../pages.json";
import codes from "../../codes.json";

export default class TutorialManagePages {
    getSections(language, topic, title) {
        let sections = null;
        if(pages[language][topic]) {
            for(const page of pages[language][topic]) {
                if(page.title === title) {
                    sections = page.sections;
                };
            };
        };
        return sections;
    }
    getLink(title) {
        let link = "/";
        const languages = Object.keys(pages);
        for(const language of languages) {
            const topics = Object.keys(pages[language]);
            for(const topic of topics) {
                let datas = pages[language][topic];
                if(datas) {
                    for(let i = 0; i <= datas.length - 1; i++){
                        if(datas[i].title === title) {
                            link = datas[i] ? datas[i].link : "/";
                        };
                    };
                };
            }
        };
        return link;
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
    getCodes(text) {
        let codeFound = null;
        for(const key of Object.keys(codes)) {
            if(key === text) {
                codeFound = codes[key];
            };
        };
        return codeFound;
    };
    convertCodeToHTML(content) {
        for(let i = 0; i <= content[2] - 1; i++) {
            content[0] = `\xa0${content[0]}`
        };
        return (
            <code style = {{color: content[1]}}>{content[0]}</code>
        );
    };
    convertTextToCode(text, content, contentIndex, tabs) {
        let codes = this.getCodes(text);
        


        if(codes) {
            let paragraph = [];
            for(let code of codes) {
                if(content && contentIndex) {
                    code.splice(contentIndex, 0, [content, "#ffffff"]);
                };
                for(const content of code) {
                    paragraph.push(this.convertCodeToHTML(content));
                };
            };
            return (
                <div style = {{paddingLeft: `${parseInt(40 * tabs)}px`}}>{paragraph}</div>
            );
        };
    };
};