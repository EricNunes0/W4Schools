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
            colorResultInputs.push(
                <div className = "tutorials-sections-color-result-input-divs" id = {colorResultinputDivId}>
                    <label id = {labelId} style = {{color: "#fff"}}>{input.label}</label>
                    <TutorialSectionsColorResultInput id = {inputId} name = {input.name} type = {input.type} defaultValue = {inputDivide ? input.value * inputDivide : input.value} min = {input.min} max = {input.max}
                        sliderthumbcolor = {input.sliderThumbColor || null}
                        onChange = {
                            () => {
                                const input = document.querySelector(`#${inputId}`);
                                const output = document.querySelector(`#${outputId}`);
                                const colorResult = document.querySelector(`#${colorResultId}`);

                                function changeRGB(name, value) {
                                    output.innerHTML = value;
                                    colorResult.dataset[name] = value;
                                    let rgba = `rgb(${colorResult.dataset.r}, ${colorResult.dataset.g}, ${colorResult.dataset.b})`;
                                    colorResult.style.backgroundColor = rgba;
                                    colorResult.textContent = rgba;
                                };

                                function changeRGBA(name, value) {
                                    if(inputDivide) {
                                        value = parseFloat(value / inputDivide).toFixed(1);
                                    };
                                    output.innerHTML = value;
                                    colorResult.dataset[name] = value;
                                    let rgba = `rgba(${colorResult.dataset.r}, ${colorResult.dataset.g}, ${colorResult.dataset.b}, ${colorResult.dataset.a})`;
                                    colorResult.style.backgroundColor = rgba;
                                    colorResult.textContent = rgba;
                                };


                                if(input) {
                                    if(colorResult.dataset.a) {
                                        changeRGBA(input.name, input.value);
                                    } else {
                                        changeRGB(input.name, input.value);
                                    };
                                };
                            }
                        }
                    ></TutorialSectionsColorResultInput>
                    <output id = {outputId} htmlFor = {inputId} style = {{color: "#fff"}}>{input.value}</output>
                </div>
            );
        };
    }
    return (
        <div className = "tutorials-sections-color-results-divs" id = {colorResultDivId} key = {colorResultDivId}>
            <TutorialSectionsColorResult id = {colorResultId} style = {{backgroundColor: content.backgroundColor, color: content.color}}
                data-r = {content.properties.r || null} data-g = {content.properties.g || null} data-b = {content.properties.b || null} data-a = {content.properties.a || null}
                onClick = {
                    () => {
                        const colorResult = document.querySelector(`#${colorResultId}`);
                        navigator.clipboard.writeText(colorResult.style.backgroundColor);
                    }
                }
            >{content.text}</TutorialSectionsColorResult>
            <div className = "tutorials-sections-color-result-inputs-divs">
                {colorResultInputs}
            </div>
        </div>
    )
};