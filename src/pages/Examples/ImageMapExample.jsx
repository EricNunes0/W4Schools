import "./Examples.css";
import "./ImageMapExample.css";
import ExamplesBackground from "./ExamplesBackground";

export default function ImageMapExample(prop) {
    const shape = prop.shape || null;


    let shapeInfos = {
        "square": {
            "title": "Quadrado",
            "link": "https://pt.wikipedia.org/wiki/Quadrado",
            "blockquote": (<i>O <b>quadrado</b> é um quadrilátero regular congruente, ou seja, uma figura geométrica com quatro lados de mesmo comprimento e quatro ângulos retos.</i>)
        },
        "circle": {
            "title": "Círculo",
            "link": "https://pt.wikipedia.org/wiki/C%C3%ADrculo",
            "blockquote": (<i>Na geometria, um <b>círculo</b> é o conjunto dos pontos internos de uma circunferência. Por vezes, também se chama círculo o conjunto de pontos cuja distância ao centro é menor ou igual a um dado valor (ao qual chamamos raio).</i>)
        },
        "triangle": {
            "title": "Triângulo",
            "link": "https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo",
            "blockquote": (<i>No plano, um <b>triângulo</b> é a figura geométrica que ocupa o espaço interno limitado por três segmentos de reta que concorrem, dois a dois, em três pontos diferentes formando três lados e três ângulos internos que somam 180°.</i>)
        }
    }
    const infos = shapeInfos[shape];
    if(infos) {
        return (
            <div className = "image-map-examples">
                <ExamplesBackground></ExamplesBackground>
                <div className = "image-map-examples-content">
                    <h1 className = "examples-titles">{infos.title}</h1>
                    <span className = {`examples-shapes ${shape}`}></span>
                    <h2 className = "examples-h2">Wikipédia diz:</h2>
                    <blockquote cite={infos.link} className = "examples-blocknote">
                        {infos.blockquote}
                    </blockquote>
                    <p className = "examples-p">Leia mais sobre {`${infos.title || "indefinido"}`.toLowerCase()}s em: <a href = {infos.link}>{infos.link}</a></p>
                </div>
            </div>
        );
    }
};