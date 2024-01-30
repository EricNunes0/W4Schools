import { TutorialSectionsColorResult } from "./TutorialSectionsColorResult";
import { TutorialSectionsColorResultInput } from "./TutorialSectionsColorResultInput";

export default function TutorialSectionsColorResults(content) {
    content = content.content;
    let id = Math.floor(Math.random() * (10000 * 10000));
    let colorResultId = content.id;
    let colorResultDivId = `tutorials-sections-color-result-div-${id}`;
    let colorResultInputs = [];
    
    if(content.inputs) {
        let colorResultinputDivId = `tutorials-sections-color-result-input-div-${id}`;
        for(const input of content.inputs) {
            let inId = Math.floor(Math.random() * (10000 * 10000));
            let labelId = `tutorials-sections-color-result-label-${inId}`;
            let inputId = `tutorials-sections-color-result-input-${inId}`;
            let outputId = `tutorials-sections-color-result-output-${inId}`;
            let inputDivide = input.divide || null;
            let resultInput = (
                <TutorialSectionsColorResultInput id = {inputId} name = {input.name} type = {input.type} defaultValue = {inputDivide ? input.value * inputDivide : input.value} min = {input.min} max = {input.max}
                    sliderthumbcolor = {input.sliderThumbColor || null}
                    onChange = {
                        () => {
                            const input = document.querySelector(`#${inputId}`);
                            const output = document.querySelector(`#${outputId}`);
                            const colorResult = document.querySelector(`#${colorResultId}`);
                            /* Função para alterar RGB */
                            function changeRGB(name, value) {
                                output.innerHTML = value;
                                colorResult.dataset[name] = value;
                                let colorCode = `rgb(${colorResult.dataset.r}, ${colorResult.dataset.g}, ${colorResult.dataset.b})`;
                                colorResult.style.backgroundColor = colorCode;
                                colorResult.textContent = colorCode;
                            };
                            /* Função para alterar RGBA */
                            function changeRGBA(name, value) {
                                if(inputDivide) {
                                    value = parseFloat(value / inputDivide).toFixed(1);
                                };
                                output.innerHTML = value;
                                colorResult.dataset[name] = value;
                                let colorCode = `rgba(${colorResult.dataset.r}, ${colorResult.dataset.g}, ${colorResult.dataset.b}, ${colorResult.dataset.a})`;
                                colorResult.style.backgroundColor = colorCode;
                                colorResult.textContent = colorCode;
                            };
                            /* Função para converter RGBA em HEX */
                            function convertRGBAToHEX(r, g, b, a) {
                                function decimalToHex(dec) {
                                    return dec.toString(16);
                                };
                                function padToTwo(str) {
                                    return str.padStart(2, '0');
                                };
                                const hexR = padToTwo(decimalToHex(r));
                                const hexG = padToTwo(decimalToHex(g));
                                const hexB = padToTwo(decimalToHex(b));
                                if(a) {
                                    const aAbsolute = Math.round((a ?? 1) * 255);
                                    let hexA = padToTwo(decimalToHex(aAbsolute));
                                    return {
                                        "code": `#${hexR}${hexG}${hexB}${hexA || "00"}`,
                                        "r": hexR,
                                        "g": hexG,
                                        "b": hexB,
                                        "a": hexA
                                    };
                                } else {
                                    return {
                                        "code": `#${hexR}${hexG}${hexB}`,
                                        "r": hexR,
                                        "g": hexG,
                                        "b": hexB
                                    };
                                };
                                
                            };
                            /* Função para alterar HEX */
                            function changeHEX(name, value) {
                                colorResult.dataset[name] = value;
                                let dataR = parseInt(colorResult.dataset.r);
                                let dataG = parseInt(colorResult.dataset.g);
                                let dataB = parseInt(colorResult.dataset.b);
                                let colorCode = convertRGBAToHEX(dataR, dataG, dataB);
                                colorResult.style.backgroundColor = colorCode.code;
                                colorResult.textContent = colorCode.code;
                                output.innerHTML = colorCode[name];
                            };
                            /* Função para alterar HEXA */
                            function changeHEXA(name, value) {
                                colorResult.dataset[name] = value;
                                let dataR = parseInt(colorResult.dataset.r);
                                let dataG = parseInt(colorResult.dataset.g);
                                let dataB = parseInt(colorResult.dataset.b);
                                let dataA = parseFloat(colorResult.dataset.a) / 255;
                                let colorCode = convertRGBAToHEX(dataR, dataG, dataB, dataA);
                                if(!colorCode.a) {colorCode.code += "00"};
                                colorResult.style.backgroundColor = colorCode.code;
                                colorResult.textContent = colorCode.code;
                                output.innerHTML = colorCode[name] || "00";
                            };
                            /* Função para alterar HSL */
                            var HSLAddPercent = ["g", "b"];
                            function changeHSL(name, value) {
                                colorResult.dataset[name] = value;
                                HSLAddPercent.includes(name) ? output.innerHTML = value + "%" : output.innerHTML = value;
                                let dataR = parseInt(colorResult.dataset.r);
                                let dataG = parseInt(colorResult.dataset.g);
                                let dataB = parseInt(colorResult.dataset.b);
                                let colorCode = `hsl(${dataR}, ${dataG}%, ${dataB}%)`;
                                colorResult.style.backgroundColor = colorCode;
                                colorResult.textContent = colorCode;
                            };
                            /* Função para alterar HSLA */
                            function changeHSLA(name, value) {
                                if(inputDivide) {
                                    value = parseFloat(value / inputDivide).toFixed(1);
                                };
                                colorResult.dataset[name] = value;
                                HSLAddPercent.includes(name) ? output.innerHTML = value + "%" : output.innerHTML = value;
                                let dataR = parseInt(colorResult.dataset.r);
                                let dataG = parseInt(colorResult.dataset.g);
                                let dataB = parseInt(colorResult.dataset.b);
                                let dataA = parseFloat(colorResult.dataset.a);
                                let colorCode = `hsla(${dataR}, ${dataG}%, ${dataB}%, ${dataA})`;
                                colorResult.style.backgroundColor = colorCode;
                                colorResult.textContent = colorCode;
                            };
                            
                            if(input) {
                                if(content.type === "rgb" || content.type === "rgba") {
                                    if(colorResult.dataset.a) {
                                        changeRGBA(input.name, input.value);
                                    } else {
                                        changeRGB(input.name, input.value);
                                    };
                                } else if(content.type === "hex" || content.type === "hexa") {
                                    if(colorResult.dataset.a) {
                                        changeHEXA(input.name, input.value);
                                    } else {
                                        changeHEX(input.name, input.value);
                                    };
                                } else if(content.type === "hsl" || content.type === "hsla") {
                                    if(colorResult.dataset.a) {
                                        changeHSLA(input.name, input.value);
                                    } else {
                                        changeHSL(input.name, input.value);
                                    };
                                };
                            };
                        }
                    }
                ></TutorialSectionsColorResultInput>
            );
            let outputValue;
            if(content.type === "rgb" || content.type === "rgba") {
                outputValue = input.value;
            } else if(content.type === "hex" || content.type === "hexa") {
                outputValue = parseInt(input.value).toString(16);
            } else if(content.type === "hsl" || content.type === "hsla") {
                let HSLAddPercent = ["g", "b"];
                if(HSLAddPercent.includes(input.name)) {
                    outputValue = input.value + "%";
                } else {
                    outputValue = input.value;
                };
            } ;
            colorResultInputs.push(
                <div className = "tutorials-sections-color-result-input-divs" id = {colorResultinputDivId}>
                    <label id = {labelId} style = {{color: "#fff"}}>{input.label}</label>
                    {resultInput}
                    <output id = {outputId} htmlFor = {inputId} style = {{color: "#fff"}}>{outputValue}</output>
                </div>
            );
        };
    };
    return (
        <div className = "tutorials-sections-color-results-divs" id = {colorResultDivId} key = {colorResultDivId}>
            <TutorialSectionsColorResult id = {colorResultId} style = {{backgroundColor: content.backgroundColor, color: content.color}}
                data-r = {content.properties.r || null} data-g = {content.properties.g || null} data-b = {content.properties.b || null} data-a = {content.properties.a || null}
                onClick = {
                    () => {
                        const colorResult = document.querySelector(`#${colorResultId}`);
                        navigator.clipboard.writeText(colorResult.textContent);
                    }
                }
            >{content.text}</TutorialSectionsColorResult>
            <div className = "tutorials-sections-color-result-inputs-divs">
                {colorResultInputs}
            </div>
        </div>
    );
};