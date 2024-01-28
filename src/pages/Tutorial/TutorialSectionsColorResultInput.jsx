import styled from "styled-components";

export const TutorialSectionsColorResultInput = styled.input`
    background-color: transparent;
    height: 26px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    transition: all 0.3s ease;

    &:focus {
    outline: none;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 12px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #555;
        background: #555;
        border-radius: 14px;
        border: 0px solid #000000;
    }
    &::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${(prop) => prop.sliderthumbcolor || "#5075d0"};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3px;
        transition: all 0.3s ease;
    }
    &::-webkit-slider-thumb:hover {
        transform: scale(1.1);
    }
    &:focus::-webkit-slider-runnable-track {
        background: #555;
    }
    &::-moz-range-track {
        width: 100%;
        height: 14px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #555;
        background: #555;
        border-radius: 14px;
        border: 0px solid #000000;
    }
    &::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 20px;
        width: 40px;
        border-radius: 12px;
        background: #529DE1;
        cursor: pointer;
    }
    &::-ms-track {
        width: 100%;
        height: 14px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    &::-ms-fill-lower {
        background: #555;
        border: 0px solid #000000;
        border-radius: 28px;
        box-shadow: 1px 1px 1px #555;
    }
    &::-ms-fill-upper {
        background: #555;
        border: 0px solid #000000;
        border-radius: 28px;
        box-shadow: 1px 1px 1px #555;
    }
    &::-ms-thumb {
        margin-top: 1px;
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 20px;
        width: 40px;
        border-radius: 12px;
        background: #529DE1;
        cursor: pointer;
    }
    &:focus::-ms-fill-lower {
        background: #555;
    }
    &:focus::-ms-fill-upper {
        background: #555;
    }
`;