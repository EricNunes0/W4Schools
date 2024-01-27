import { TutorialSectionsColorBlock } from "./TutorialSectionsColorBlock";

export default function TutorialSectionsColorBlocks(content) {
    content = content.content;
    let id = Math.floor(Math.random() * (10000 * 10000));
    let colorBlocksDivId = `tutorials-sections-color-blocks-div-${id}`;
    let colorBlocks = [];
    if(content.blocks) {
        for(const block of content.blocks) {
            let blockId = Math.floor(Math.random() * (10000 * 10000));
            let colorBlockId = `tutorials-sections-color-block-${blockId}`;
            colorBlocks.push(<TutorialSectionsColorBlock id = {colorBlockId} style = {{backgroundColor: block.backgroundColor, color: block.color}}
                onClick = {
                    function() {
                        const colorBlock = document.querySelector(`#${colorBlockId}`);
                        let duration = 1;
                        navigator.clipboard.writeText(block.backgroundColor);
                        colorBlock.textContent = "Copiado!";
                        colorBlock.style.pointerEvents = "none";
                        setTimeout(function() {
                            colorBlock.textContent = block.text;
                            colorBlock.style.pointerEvents = "all";
                        }, duration * 1000);
                    }
                }
            >{block.text}</TutorialSectionsColorBlock>);
        };
    }
    return (
        <div className = "tutorials-sections-color-blocks-divs" id = {colorBlocksDivId} key = {colorBlocksDivId}>
            {colorBlocks}
        </div>
    )
};