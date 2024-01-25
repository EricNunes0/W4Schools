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
        const text = part.code;
        const content = part.content || null;
        const contentIndex = part.contentIndex || null;
        const tabs = part.tabs || 0;
        const attributes = part.attributes || [];
        
        let codesGot = this.lineCodesFromJSON(text, content);
        if(attributes.length !== 0) {
            let index = attributes.index;
            for(let i = 0; i <= attributes.items.length - 1; i++) {
                const attribute = attributes.items[i];
                const attributeName = attribute.name;
                const attributeValue = attribute.value;
                const attributeValueIndex = attribute.valueIndex || 0;
                const attributeSingleQuote = attribute.singleQuote || false;
                let attributeCodesGot = this.lineAttributesFromJSON(attributeName, attributeSingleQuote);
                let attributeCodes = JSON.parse(JSON.stringify(attributeCodesGot));
                attributeCodes[0][0] = `\xa0${attributeCodes[0][0]}` /* Adiciona um espaço antes de todo atributo */
                attributeCodes.splice(attributeValueIndex, 0, [attributeValue, "#f5f565"]); /* Adiciona o texto dentro do valor do atributo */
                for(const atCode of attributeCodes) {
                    codesGot[0].splice(index, 0, atCode);
                    index++;
                };
            }
        };
        let codes = JSON.parse(JSON.stringify(codesGot));
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
    /* Obter códigos (tags) do JSON */
    lineCodesFromJSON(text, content) {
        let codeFound = null;
        for(const key of Object.keys(codes)) {
            if(key === text) {
                codeFound = JSON.parse(JSON.stringify(codes[key]));
            };
        };
        if(content && content.text) {
            console.log(content);
            console.log(codeFound);
            const text = content.text;
            const index = content.index;
            const color = content.color;
            codeFound[0].splice(index, 0, [text, color]);
        }

        return codeFound;
    };
    /* Obter atributos do JSON */
    lineAttributesFromJSON(name, singleQuote) {
        let attributesCodes = JSON.parse(JSON.stringify(codes.attributes));        
        if(singleQuote) {
            attributesCodes[1][0] = "'"
            attributesCodes[2][0] = "'"
        }
        attributesCodes.splice(0, 0, [name, "#65f040"]);
        return attributesCodes;
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
            content[0] = `\xa0${content[0]}`;
        };
        for(let i = 0; i <= content[3] - 1; i++) {
            content[0] = `${content[0]}\xa0`;
        };
        return (
            <code style = {{color: content[1], fontSize: 14}}>{content[0]}</code>
        );
    };
    /* Converter inputs em HTML */
    lineInputToHTML(part) {
        return (
            <TutorialExerciseInput type = {part.inputType} name = {part.name} className = "tutorial-sections-exercises-inputs" width = {part.width} maxLength = {part.maxLength} spacesbefore = {part.spacesBefore} spacesafter = {part.spacesAfter}></TutorialExerciseInput>
        );
    };


    convertCodeToHTML(content) {
        for(let i = 0; i <= content[2] - 1; i++) {
            content[0] = `\xa0${content[0]}`
        };
        return (
            <code style = {{color: content[1], fontSize: 14}}>{content[0]}</code>
        );
    };
};