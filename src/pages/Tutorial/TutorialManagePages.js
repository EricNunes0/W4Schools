import pages from "../../pages.json";
import codes from "../../codes.json";
import { TutorialExerciseInput } from "./TutorialExerciseInput";
import { TutorialCode } from "./TutorialCode";

export default class TutorialManagePages {
    getSections(language, topic, title, subtitle) {
        let sections = null;
        if(pages[language][topic]) {
            for(const page of pages[language][topic]) {
                if(page.title === title) {
                    if(page.subtitles && subtitle) {
                        for(const sub of page.subtitles) {
                            if(sub.subtitle === subtitle) {
                                sections = sub.sections;
                            };
                        }
                    } else if(page.sections) {
                        sections = page.sections;
                    };
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
    getPreviousLink(language, topic, title, subtitle) {
        let link = null;
        let datas = pages[language][topic]
        for(let i = 0; i <= datas.length - 1; i++){
            if(datas[i].title === title) {
                if(datas[i].subtitles) {
                    let subtitles = datas[i].subtitles;
                    for(let j = 0; j <= subtitles.length - 1; j++) {
                        if(subtitles[j].subtitle) {
                            if(subtitles[j].subtitle === subtitle) {
                                if(subtitles[j - 1]) {
                                    link = subtitles[j - 1].link;
                                } else {
                                    link = datas[i - 1] ? datas[i - 1].link : "/";
                                };
                            };
                        };
                    };
                } else {
                    if(datas[i - 1]) {
                        link = datas[i - 1].link;
                    } else {
                        let topics = Object.keys(pages[language]);
                        let previousTopic = topics[topics.indexOf(topic) - 1];
                        if(pages[language][previousTopic]) {
                            link = pages[language][previousTopic][pages[language][previousTopic].length - 1].link;
                        } else {
                            link = "/";
                        }
                    };
                };
            };
        };
        return link;
    }
    getNextLink(language, topic, title, subtitle) {
        let link = null;
        let datas = pages[language][topic]
        for(let i = 0; i <= datas.length - 1; i++){
            if(datas[i].title === title) {
                if(datas[i].subtitles) {
                    let subtitles = datas[i].subtitles;
                    for(let j = 0; j <= subtitles.length - 1; j++) {
                        if(subtitles[j].subtitle) {
                            if(subtitles[j].subtitle === subtitle) {
                                if(subtitles[j + 1]) {
                                    link = subtitles[j + 1].link;
                                } else {
                                    link = datas[i + 1] ? datas[i + 1].link : "/";
                                };
                            };
                        };
                    };
                } else {
                    if(datas[i + 1]) {
                        link = datas[i + 1].link;
                    } else {
                        let topics = Object.keys(pages[language]);
                        let nextTopic = topics[topics.indexOf(topic) + 1];
                        link = pages[language][nextTopic][0].link;
                    };
                };
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
                case "comment":
                    sectionLine.push(this.lineComment(part));
                    break;
                case "content":
                    sectionLine.push(this.lineContent(part));
                    break;
                case "empty":
                    sectionLine.push(this.lineEmpty());
                    break;
                case "input":
                    sectionLine.push(this.lineInput(part));
                    break;
                case "value":
                    sectionLine.push(this.lineValue(part));
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
        const spacesBefore = part.spacesBefore || 0;
        const spacesAfter = part.spacesAfter || 0;
        
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
            if(spacesBefore) {
                codes[0][0][2] = spacesBefore;
            };
            if(spacesAfter) {
                codes[0][0][3] = spacesAfter;
            };

            for(let code of codes) {
                if(content && contentIndex) {
                    code.splice(contentIndex, 0, [content, "#ffffff"]);
                };
                for(const content of code) {
                    paragraph.push(this.lineCodeToHTML(content));
                };
            };
            return (
                <div style = {{paddingLeft: `${parseInt(40 * tabs)}px`}}>{paragraph}</div>
            );
        };
    };
    /* Comentários */
    lineComment(part) {
        const content = [part.code, "#6070a0", part.spacesBefore || 0, part.spacesAfter || 0];
        let codeText = [];
        codeText.push(this.lineCodeToHTML(content));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    /* Conteúdos */
    lineContent(part) {
        const content = [part.code, part.color || "#ffffff", part.spacesBefore || 0, 0];
        let codeText = [];
        codeText.push(this.lineCodeToHTML(content));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    /* Linha vazia */
    lineEmpty() {
        return (
            <br></br>
        )
    };
    lineInput(part) {
        let codeText = [];
        codeText.push(this.lineInputToHTML(part));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    /* Valores de atributos */
    lineValue(part) {
        const content = [part.code, "#f5f565", part.spacesBefore || 0, part.spacesAfter || 0];
        let codeText = [];
        codeText.push(this.lineCodeToHTML(content));
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
            <TutorialCode className = "tutorial-codes" style = {{color: content[1]}}>{content[0]}</TutorialCode>
        );
    };
    /* Converter inputs em HTML */
    lineInputToHTML(part) {
        return (
            <TutorialExerciseInput type = {part.inputType} name = {part.name} className = "tutorial-sections-exercises-inputs" width = {part.width} maxLength = {part.maxLength} spacesbefore = {part.spacesBefore} spacesafter = {part.spacesAfter}></TutorialExerciseInput>
        );
    };
    /* Gerar array dos códigos para inserir nas divs finais */
    lineCodeParts(code) {
        let codeParts = [];
        let codesArrays = new TutorialManagePages().lineCodesFromJSON(code.code);
        if(code.spacesBefore) {
            codesArrays[0][0][2] = code.spacesBefore;
        };
        for(const codesArray of codesArrays) {
            for(const codeContent of codesArray) {
                const content = [codeContent[0], codeContent[1], codeContent[2] || 0, codeContent[3] || 0];
                const codeHTML = new TutorialManagePages().lineCodeToHTML(content);
                codeParts.push(codeHTML);
            }
        };
        return codeParts;
    }
};