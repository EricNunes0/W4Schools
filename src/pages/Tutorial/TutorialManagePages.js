import codes from "../../codes.json";
import { TutorialExerciseInput } from "./TutorialExerciseInput";
import { TutorialCode } from "./TutorialCode";
import jsonSelect from "../../functions/jsonSelect";

export default class TutorialManagePages {
    getSections(json, language, topic, title, subtitle) {
        let pages = jsonSelect(json);

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
    getLink(json, title) {
        let pages = jsonSelect(json);
        let link = "/";
        const languages = Object.keys(pages);
        for(const language of languages) {
            const topics = Object.keys(pages[language]);
            for(const topic of topics) {
                let datas = pages[language][topic];
                if(datas) {
                    for(let i = 0; i <= datas.length - 1; i++) {
                        if(datas[i].title === title) {
                            link = datas[i] ? datas[i].link : "/";
                        };
                    };
                };
            }
        };
        return link;
    }
    getPreviousLink(json, language, topic, title, subtitle) {
        let pages = jsonSelect(json);
        let link = null;
        let datas = pages[language][topic];
        for(let i = 0; i <= datas.length - 1; i++) {
            if(datas[i].title === title) {
                if(datas[i].subtitles) {
                    let subtitles = datas[i].subtitles;
                    for(let j = 0; j <= subtitles.length - 1; j++) {
                        if(subtitles[j].subtitle) {
                            if(subtitles[j].subtitle === subtitle) {
                                if(subtitles[j - 1]) {
                                    link = subtitles[j - 1].link;
                                } else {
                                    if(datas[i - 1]) {
                                        link = datas[i - 1].link;
                                    } else {
                                        const previousTopic = this.getPreviousTopic(json, language, topic);
                                        const previousLanguage = this.getPreviousLanguage(json, language);
                                        if(previousTopic) {
                                            const previousTopicArray = pages[language][previousTopic];
                                            const previousTopicArrayLastItem = previousTopicArray[previousTopicArray.length - 1];
                                            link = previousTopicArrayLastItem.link;
                                        } else if(previousLanguage) {
                                            const previousTopics = Object.keys(pages[previousLanguage]);
                                            const previousLastTopicKey = previousTopics[previousTopics.length - 1];
                                            const previousLastTopicArray = pages[previousLanguage][previousLastTopicKey];
                                            const previousLastTopicArrayLastItem = previousLastTopicArray[previousLastTopicArray.length - 1];
                                            if(previousLastTopicArrayLastItem.subtitles) {
                                                link = previousLastTopicArrayLastItem.subtitles[0].link;
                                            } else {
                                                link = previousLastTopicArrayLastItem.link;
                                            }
                                            console.log(link)
                                        } else {
                                            link = "/"
                                        }
                                    }
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
                            const previousLanguage = this.getPreviousLanguage(json, language);
                            if(previousLanguage) {
                                const previousTopics = Object.keys(pages[previousLanguage]);
                                const previousLastTopicKey = previousTopics[previousTopics.length - 1];
                                const previousLastTopicArray = pages[previousLanguage][previousLastTopicKey];
                                const previousLastTopicArrayLastItem = previousLastTopicArray[previousLastTopicArray.length - 1];
                                if(previousLastTopicArrayLastItem.subtitles) {
                                    link = previousLastTopicArrayLastItem.subtitles[0].link;
                                } else {
                                    link = previousLastTopicArrayLastItem.link;
                                }
                                console.log("getPreviousLink: ", link);
                            } else {
                                link = "/"
                            }
                        }
                    };
                };
            };
        };
        if(!link) {
            const previousLanguage = this.getPreviousLanguage(json, language);
            if(previousLanguage) {
                const previousTopics = Object.keys(pages[previousLanguage]);
                const previousLastTopicKey = previousTopics[previousTopics.length - 1];
                const previousLastTopicArray = pages[previousLanguage][previousLastTopicKey];
                link = previousLastTopicArray[previousLastTopicArray.length - 1].link;
                console.log(link)
            }
        }
        return link;
    }
    getNextLink(json, language, topic, title, subtitle) {
        let pages = jsonSelect(json);
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
                        if(nextTopic) {
                            link = pages[language][nextTopic][0].link;
                        } else {
                            const nextLanguage = this.getNextLanguage(json, language);
                            if(nextLanguage) {
                                const nextTopics = Object.keys(pages[nextLanguage]);
                                const nextFirstTopicKey = nextTopics[0];
                                const nextFirstTopicArray = pages[nextLanguage][nextFirstTopicKey];
                                const nextFirstTopicArrayLastItem = nextFirstTopicArray[0]; // nextLastTopicArray.length - 1 para último
                                if(nextFirstTopicArrayLastItem.subtitles) {
                                    link = nextFirstTopicArrayLastItem.subtitles[0].link;
                                } else {
                                    link = nextFirstTopicArrayLastItem.link;
                                }
                                console.log("getNextLink: ", link);
                            } else {
                                link = "/"
                            };
                        }
                    };
                };
            };
        };
        return link;
    };
    /* Obter tópico anterior */
    getPreviousTopic(json, language, topic) {
        let pages = jsonSelect(json);
        let topics = Object.keys(pages[language]).reverse();
        let topicCurrent = topics.length - 1;
        for(const tp of topics) {
            topicCurrent--;
            if(tp === topic) {
                break;
            }
        };
        let topicToReturn = topics.reverse()[topicCurrent];
        //console.log(topicCurrent, topicToReturn)
        return topicToReturn;
    };
    getPreviousLanguage(json, language) {
        let pages = jsonSelect(json);
        let languages = Object.keys(pages).reverse();
        let languageCurrent = languages.length - 1;
        for(const lang of languages) {
            languageCurrent--;
            if(lang === language) {
                break;
            }
        };
        let langToReturn = languages.reverse()[languageCurrent];
        //console.log(languageCurrent, langToReturn)
        return langToReturn;
    };
    getNextLanguage(json, language) {
        let pages = jsonSelect(json);
        let languages = Object.keys(pages);
        let languageCurrent = 0;
        for(const lang of languages) {
            languageCurrent++;
            if(lang === language) {
                break;
            }
        };
        let langToReturn = languages[languageCurrent];
        return langToReturn;
    };

    /* Criar linhas dos exercícios/exemplos */
    convertLine(line) {
        let sectionLine = [];
        for(let i = 0; i <= line.length - 1; i++) {
            const part = line[i];
            if(part.type === "css") {
                return this.lineCSS(part);
            } else {
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
                codes[0][codes[0].length - 1][3] = spacesAfter;
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
        const content = [part.code, "#6070a0", part.spacesBefore || 0, part.spacesAfter || 0, part.italic || null];
        let codeText = [];
        codeText.push(this.lineCodeToHTML(content));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    /* Conteúdos */
    lineContent(part) {
        const content = [part.code, part.color || "#ffffff", part.spacesBefore || 0, part.spacesAfter || 0, part.italic || null];
        let codeText = [];
        codeText.push(this.lineCodeToHTML(content));
        return (
            <span className = "tutorial-sections-lines-parts">{codeText}</span>
        );
    };
    /* CSS */
    lineCSS(part) {
        const selectors = part.selectors || [];
        const wrap = part.wrap || false;
        const declarations = part.declarations || [];
        const tabs = part.tabs || 0;
        const spacesBefore = part.spacesBefore || 0;
        const spacesAfter = part.spacesAfter || 0;

        /* Converter valores de declarações */
        function declarationValueConvert(value) {
            let result = [[value, "#c090fa", 1]];
            if(value.type) {
                if(value.type === "circle") {
                    result = [["circle", "#90eaff", 1], ["(", "#f0f0f0"], [value.number, "#c090fa"], [value.unit, "#f565c5"], [")", "#f0f0f0"]];
                } else if(value.type === "color") {
                    if(value.method === "rgb") {
                        result = [["rgb", "#90eaff", 1], ["(", "#f0f0f0"], [value.r, "#c090fa"], [",", "#f0f0f0"], [value.g, "#c090fa", 1], [",", "#f0f0f0"], [value.b, "#c090fa", 1], [")", "#f0f0f0"]];
                    } else if(value.method === "rgba") {
                        result = [["rgba", "#90eaff", 1], ["(", "#f0f0f0"], [value.r, "#c090fa"], [",", "#f0f0f0"], [value.g, "#c090fa", 1], [",", "#f0f0f0"], [value.b, "#c090fa", 1], [",", "#f0f0f0"], [value.a, "#c090fa", 1], [")", "#f0f0f0"]];
                    } else if(value.method === "hsl") {
                        result = [["hsl", "#90eaff", 1], ["(", "#f0f0f0"], [value.h, "#c090fa"], [",", "#f0f0f0"], [value.s, "#c090fa", 1], ["%", "#f565c5"], [",", "#f0f0f0"], [value.l, "#c090fa", 1], ["%", "#f565c5"], [")", "#f0f0f0"]];
                    } else if(value.method === "hsla") {
                        result = [["hsla", "#90eaff", 1], ["(", "#f0f0f0"], [value.h, "#c090fa"], [",", "#f0f0f0"], [value.s, "#c090fa", 1], ["%", "#f565c5"], [",", "#f0f0f0"], [value.l, "#c090fa", 1], ["%", "#f565c5"], [",", "#f0f0f0"], [value.a, "#c090fa", 1], [")", "#f0f0f0"]];
                    } else if(value.method === "hwb") {
                        result = [["hwb", "#90eaff", 1], ["(", "#f0f0f0"], [value.h, "#c090fa"], value.comma === true ? [",", "#f0f0f0"] : [], [value.w, "#c090fa", 1], ["%", "#f565c5"], value.comma === true ? [",", "#f0f0f0"] : [], [value.b, "#c090fa", 1], ["%", "#f565c5"], value.division ? [`/`, "#f565c5", 1] : [], value.division ? [typeof value.division == "string" && value.division.endsWith("%") ? value.division.slice(0, -1) : value.division, "#c090fa", 1] : [], value.division && typeof value.division == "string" && value.division.endsWith("%") ? ["%", "#f565c5"] : [], [")", "#f0f0f0"]];
                    } else if(value.method === "lab") {
                        result = [["lab", "#90eaff", 1], ["(", "#f0f0f0"], [value.l, "#c090fa"], value.comma === true ? [",", "#f0f0f0"] : [], [value.a, "#c090fa", 1], ["%", "#f565c5"], value.comma === true ? [",", "#f0f0f0"] : [], [value.b, "#c090fa", 1], ["%", "#f565c5"], value.division ? [`/`, "#f565c5", 1] : [], value.division ? [typeof value.division == "string" && value.division.endsWith("%") ? value.division.slice(0, -1) : value.division, "#c090fa", 1] : [], value.division && typeof value.division == "string" && value.division.endsWith("%") ? ["%", "#f565c5"] : [], [")", "#f0f0f0"]];
                    } else if(value.method === "lch") {
                        result = [["lch", "#90eaff", 1], ["(", "#f0f0f0"], [value.l, "#c090fa"], ["%", "#f565c5"], value.comma === true ? [",", "#f0f0f0"] : [], [value.c, "#c090fa", 1], value.comma === true ? [",", "#f0f0f0"] : [], [value.h, "#c090fa", 1], value.division ? [`/`, "#f565c5", 1] : [], value.division ? [typeof value.division == "string" && value.division.endsWith("%") ? value.division.slice(0, -1) : value.division, "#c090fa", 1] : [], value.division && typeof value.division == "string" && value.division.endsWith("%") ? ["%", "#f565c5"] : [], [")", "#f0f0f0"]];
                    } else if(value.method === "oklab") {
                        result = [["oklab", "#90eaff", 1], ["(", "#f0f0f0"], [value.l, "#c090fa"], value.comma === true ? [",", "#f0f0f0"] : [], [value.a, "#c090fa", 1], ["%", "#f565c5"], value.comma === true ? [",", "#f0f0f0"] : [], [value.b, "#c090fa", 1], ["%", "#f565c5"], value.division ? [`/`, "#f565c5", 1] : [], value.division ? [typeof value.division == "string" && value.division.endsWith("%") ? value.division.slice(0, -1) : value.division, "#c090fa", 1] : [], value.division && typeof value.division == "string" && value.division.endsWith("%") ? ["%", "#f565c5"] : [], [")", "#f0f0f0"]];
                    } else if(value.method === "oklch") {
                        result = [["oklch", "#90eaff", 1], ["(", "#f0f0f0"], [value.l, "#c090fa"], ["%", "#f565c5"], value.comma === true ? [",", "#f0f0f0"] : [], [value.c, "#c090fa", 1], value.comma === true ? [",", "#f0f0f0"] : [], [value.h, "#c090fa", 1], value.division ? [`/`, "#f565c5", 1] : [], value.division ? [typeof value.division == "string" && value.division.endsWith("%") ? value.division.slice(0, -1) : value.division, "#c090fa", 1] : [], value.division && typeof value.division == "string" && value.division.endsWith("%") ? ["%", "#f565c5"] : [], [")", "#f0f0f0"]];
                    }
                } else if(value.type === "content") {
                    result = [[value.content, "#f5f565", 1]];
                } else if(value.type === "cubic-bezier") {
                    result = [["cubic-bezier", "#90eaff", 1], ["(", "#f0f0f0"], [value.x1, "#c090fa"], [",", "#f0f0f0"], [value.y1, "#c090fa", 1], [",", "#f0f0f0"], [value.x2, "#c090fa", 1], [",", "#f0f0f0"], [value.y2, "#c090fa", 1], [")", "#f0f0f0"]];
                } else if(value.type === "matrix") {
                    result = [["matrix", "#90eaff", 1], ["(", "#f0f0f0"], [value.scaleX, "#c090fa"], [",", "#f0f0f0"], [value.skewY, "#c090fa", 1], [",", "#f0f0f0"], [value.skewX, "#c090fa", 1], [",", "#f0f0f0"], [value.scaleY, "#c090fa", 1], [",", "#f0f0f0"], [value.translateX, "#c090fa", 1], [",", "#f0f0f0"], [value.translateY, "#c090fa", 1], [")", "#f0f0f0"]];
                } else if(value.type === "matrix3d") {
                    result = [["matrix3d", "#90eaff", 1], ["(", "#f0f0f0"], [value.a1, "#c090fa"], [",", "#f0f0f0"], [value.b1, "#c090fa", 1], [",", "#f0f0f0"], [value.c1, "#c090fa", 1], [",", "#f0f0f0"], [value.d1, "#c090fa", 1], [",", "#f0f0f0"], [value.a2, "#c090fa", 1], [",", "#f0f0f0"], [value.b2, "#c090fa", 1], [",", "#f0f0f0"], [value.c2, "#c090fa", 1], [",", "#f0f0f0"], [value.d2, "#c090fa", 1], [",", "#f0f0f0"], [value.a3, "#c090fa", 1], [",", "#f0f0f0"], [value.b3, "#c090fa", 1], [",", "#f0f0f0"], [value.c3, "#c090fa", 1], [",", "#f0f0f0"], [value.d3, "#c090fa", 1], [",", "#f0f0f0"], [value.a4, "#c090fa", 1], [",", "#f0f0f0"], [value.b4, "#c090fa", 1], [",", "#f0f0f0"], [value.c4, "#c090fa", 1], [",", "#f0f0f0"], [value.d4, "#c090fa", 1], [")", "#f0f0f0"]];
                } else if(value.type === "multiple") {
                    if(value.values) {
                        let vals = [];
                        value.values.forEach((val) => {
                            vals.push([val.value, val.color, val.spacesBefore]);
                        });
                        result = vals;
                    }
                } else if(value.type === "unit") {
                    if(value.values) {
                        let vals = [];
                        value.values.forEach((val) => {
                            vals.push([val.number, "#c090fa", 1], [val.unit, "#f565c5"], val.comma === true ? [",", "#f0f0f0"] : []);
                        });
                        result = vals;
                    } else {
                        result = [[value.number, "#c090fa", 1], [value.unit, "#f565c5"]];
                    }
                } else if(value.type === "rotate") {
                    result = [["rotate", "#90eaff", 1], ["(", "#f0f0f0"], [value.angle, "#c090fa"], ["deg", "#f565c5"], [")", "#f0f0f0"]];
                } else if(value.type === "rotate3d") {
                    result = [["rotate3d", "#90eaff", 1], ["(", "#f0f0f0"], [value.x, "#c090fa"], [",", "#f0f0f0"], [value.y, "#c090fa", 1], [",", "#f0f0f0"], [value.z, "#c090fa", 1], [",", "#f0f0f0"], [value.angle, "#c090fa", 1], ["deg", "#f565c5"], [")", "#f0f0f0"]];
                } else if(value.type === "rotateX") {
                    result = [["rotateX", "#90eaff", 1], ["(", "#f0f0f0"], [value.angle, "#c090fa"], ["deg", "#f565c5"], [")", "#f0f0f0"]];
                } else if(value.type === "rotateY") {
                    result = [["rotateY", "#90eaff", 1], ["(", "#f0f0f0"], [value.angle, "#c090fa"], ["deg", "#f565c5"], [")", "#f0f0f0"]];
                } else if(value.type === "rotateZ") {
                    result = [["rotateZ", "#90eaff", 1], ["(", "#f0f0f0"], [value.angle, "#c090fa"], ["deg", "#f565c5"], [")", "#f0f0f0"]];
                } else if(value.type === "url") {
                    result = [["url", "#90eaff", 1], ["(", "#f0f0f0"], [value.url, "#f5f565"], [")", "#f0f0f0"]];
                } else if(value.type === "var") {
                    result = [["var", "#90eaff", 1], ["(", "#f0f0f0"], [value.name, "#f0f0f0"], [")", "#f0f0f0"]];
                };
            };
            return result;
        };
        
        let CSSBase;
        let lines = [];
        if(wrap === true) {
            CSSBase = [
                {   
                    codes: [
                        ["{", "#f0f0f0", 1]
                    ],
                    tabs: 0
                },
                {   
                    codes: [
                        ["}", "#f0f0f0"]
                    ],
                    tabs: 0
                }
            ];

            /* Adicionando seletores */
            if(selectors) {
                let selectorIndex = 0;
                for(const selector of selectors) {
                    if(selectorIndex > 0) {
                        CSSBase[0].codes.splice(selectorIndex, 0, [",", "#f0f0f0", 0, 1]);
                        selectorIndex++;
                    };
                    if(selector.selectors) {
                        for(const sel of selector.selectors) {
                            CSSBase[0].codes.splice(selectorIndex, 0, [sel.selector, sel.color]);
                            selectorIndex++;
                        }
                    } else {
                        CSSBase[0].codes.splice(selectorIndex, 0, [selector.selector, selector.color]);
                        selectorIndex++;
                    }
                };
            };

            /* Adicionando declarações */
            if(declarations) {
                let declarationIndex = 1;
                for(const declaration of declarations) {
                    let declarationValue = declarationValueConvert(declaration.value);
                    let declarationSyntax = [
                        [declaration.property, "#90eaff"],
                        [":", "#f565c5"],
                        [";", "#f0f0f0"]
                    ];

                    /* Adicionando valores */
                    let declarationSyntaxIndex = 2;
                    declarationValue.forEach((value) => {
                        declarationSyntax.splice(declarationSyntaxIndex, 0, value);
                        declarationSyntaxIndex++;
                    });
                    
                    /* Adicionando !important */
                    if(declaration.important === true) {
                        declarationSyntax.splice(declarationSyntaxIndex, 0, ["!important", "#f565c5", 1]);
                        declarationSyntaxIndex++;
                    }

                    CSSBase.splice(declarationIndex, 0, {
                        codes: declarationSyntax,
                        tabs: 1
                    });
                    declarationIndex++;
                };
            };
            
            CSSBase.forEach((lineBase) => {
                let lineCode = [];
                lineBase.codes.forEach((lineBaseCode) => {
                    lineCode.push(this.lineCodeToHTML(lineBaseCode));
                })
                lines.push(
                    <div className = "tutorial-sections-lines">
                        <div style = {{paddingLeft: `${parseInt(40 * (tabs + lineBase.tabs))}px`}}>
                            {lineCode}
                        </div>
                    </div>
                );
            });
        } else {
            CSSBase = {   
                codes: [
                    ["{", "#f0f0f0", 1],
                    ["}", "#f0f0f0"]
                ],
                tabs: 0
            };

            /* Adicionando seletores */
            let selectorIndex = 0;
            if(selectors) {
                for(const selector of selectors) {
                    if(selectorIndex > 0) {
                        CSSBase.codes.splice(selectorIndex, 0, [",", "#f0f0f0", 0, 1]);
                        selectorIndex++;
                    };
                    if(selector.selectors) {
                        for(const sel of selector.selectors) {
                            CSSBase.codes.splice(selectorIndex, 0, [sel.selector, sel.color]);
                            selectorIndex++;
                        }
                    } else {
                        CSSBase.codes.splice(selectorIndex, 0, [selector.selector, selector.color]);
                        selectorIndex++;
                    }
                };
            };

            /* Adicionando declarações */
            if(declarations) {
                let declarationIndex = selectorIndex + 1;
                for(const declaration of declarations) {
                    let declarationValue = declarationValueConvert(declaration.value);
                    CSSBase.codes.splice(declarationIndex, 0, [declaration.property, "#90eaff", declarationIndex > selectorIndex + 1 ? 1 : 0]);
                    declarationIndex++;
                    CSSBase.codes.splice(declarationIndex, 0, [":", "#f565c5"]);
                    declarationIndex++;

                    /* Adicionando valores */
                    declarationValue.forEach((value) => {
                        CSSBase.codes.splice(declarationIndex, 0, value);
                        declarationIndex++;
                    });

                    /* Adicionando !important */
                    if(declaration.important === true) {
                        CSSBase.codes.splice(declarationIndex, 0, ["!important", "#f565c5", 1]);
                        declarationIndex++;
                    }

                    CSSBase.codes.splice(declarationIndex, 0, [";", "#f0f0f0"]);
                    declarationIndex++;
                };
            };
            
            let lineCodes = [];
            CSSBase.codes.forEach((lineBase) => {
                lineCodes.push(
                    <div>
                        {this.lineCodeToHTML(lineBase)}
                    </div>
                );
            });
            lines.push(<div className = "tutorial-sections-lines" style = {{paddingLeft: `${parseInt(40 * tabs)}px`}}>
                {lineCodes}
            </div>)
        };
        
        return (
            <>
                {lines}
            </>
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
        const content = [part.code, "#f5f565", part.spacesBefore || 0, part.spacesAfter || 0, part.italic || null];
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
        content[4]: itálico
        */

        for(let i = 0; i <= content[2] - 1; i++) {
            content[0] = `\xa0${content[0]}`;
        };
        for(let i = 0; i <= content[3] - 1; i++) {
            content[0] = `${content[0]}\xa0`;
        };
        return (
            <TutorialCode className = "tutorial-codes" style = {{color: content[1], fontStyle: content[4] && content[4] === true ? "italic" : null}}>{content[0]}</TutorialCode>
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