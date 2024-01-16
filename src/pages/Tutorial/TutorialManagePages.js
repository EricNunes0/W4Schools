import pages from "../../pages.json";
import codes from "../../codes.json";
import { TutorialExerciseInput } from "./TutorialExerciseInput";

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

    /* Criar linhas dos exercícios/exemplos */
    convertLine(line) {
        let sectionLine = [];
        for(let i = 0; i <= line.length - 1; i++) {
            const part = line[i];
            switch(part.type) {
                case "code":
                    sectionLine.push(this.lineCode(part));
                    break;
                case "content":
                    sectionLine.push(this.lineContent(part));
                    break;
                case "input":
                    sectionLine.push(this.lineInput(part));
                    break;
            };
        };
        return (
            <div className = "tutorial-sections-lines">
                {sectionLine}
            </div>
        );
    };
    lineCode(part) {
        const codes = this.lineCodesFromJSON(part.code);
        const spacesBefore = part.spacesBefore || 0;
        const spacesAfter = part.spacesAfter || 0;
        if(codes) {
            let codeText = [];
            for(const code of codes) {
                if(part.content) {
                    const text = part.content.text;
                    const index = part.content.index || 0;
                    const color = part.content.color || "#ffffff";
                    const spaces = part.content.spaces || 0;
                    code.splice(index, 0, [text, color, spaces]);
                };
                for(let content of code) {
                    content[2] = spacesBefore;
                    content[3] = spacesAfter;
                    codeText.push(this.lineCodeToHTML(content));
                };
            };
            return (
                <span className = "tutorial-sections-lines-parts">{codeText}</span>
            );
        };
    };
    lineContent(part) {
        const content = [part.code, "#ffffff", 0, 0];
        let codeText = [];
        codeText.push(this.lineCodeToHTML(content));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    lineInput(part) {
        let codeText = [];
        codeText.push(this.lineInputToHTML(part));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    lineCodesFromJSON(text) {
        let codeFound = null;
        for(const key of Object.keys(codes)) {
            if(key === text) {
                codeFound = codes[key];
            };
        };
        return codeFound;
    };
    /* Converter códigos/conteúdos em HTML */
    lineCodeToHTML(content) {
        /* 
        content[0]: texto,
        content[1]: cor,
        content[2]: espaços antes do texto,
        content[3]: espaços depois do texto
        */

        for(let i = 0; i <= content[2] - 1; i++) {
            content[0] = `\xa0${content[0]}`
        };
        for(let i = 0; i <= content[3] - 1; i++) {
            content[0] = `${content[0]}\xa0`
        };
        return (
            <code style = {{color: content[1]}}>{content[0]}</code>
        );
    };
    /* Converter inputs em HTML */
    lineInputToHTML(part) {
        return (
            <TutorialExerciseInput type = {part.inputType} name = {part.name} className = "tutorial-sections-exercises-inputs" width = {part.width} maxLength = {part.maxLength} spacesbefore = {part.spacesBefore}></TutorialExerciseInput>
        );
    };



    /* Corrigir depois nos exemplos */
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