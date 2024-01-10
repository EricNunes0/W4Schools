import styled from "styled-components";

const data2HotTrueBefore = `&[data-type="2"][data-hot="true"]::before`;
const data2NewTrueAfter = `&[data-type="2"][data-new="true"]::after`;

export const NavigationMenuArticleButton = styled.a`
    position: relative;
    display: block;
    border-radius: 3px;
    padding: 5px;
    transition: all 0.3s ease;

    &[data-type="0"] {
        color: #e0e0e0;
        font-size: 14px;
        text-decoration: none;
    }
    &[data-type="0"]:hover {
        background-color: #e0e0e0;
        color: #000;
        font-size: 14px;
        text-decoration: none;
    }

    &[data-type="1"] {
        background-image: linear-gradient(90deg, transparent 50%, #ffffff 51%);
        background-position: 0% 100%;
        background-size: 200% 2px;
        background-repeat: no-repeat;
        color: #ffffaa;
        font-size: 10px;
        text-decoration: none;
    }
    &[data-type="1"]:hover {
        background-color: #04b070;
        background-position: 100% 100%; 
        color: #ffffff;
        font-size: 10px;
        text-decoration: none;
    }

    &[data-type="2"] {
        width: 100%;
        color: #e0e0e0;
        font-size: 14px;
        text-decoration: none;
    }
    &[data-type="2"]:hover {
        background-color: #e0e0e0;
        color: #000;
    }
    ${data2HotTrueBefore} {
        content: "HOT!";
        position: absolute;
        top: 5px;
        left: calc(100% - 40px - 5px);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 20px;
        background-color: #f01000;
        border-radius: 25px;
        font-size: 10px;
    }
    ${data2NewTrueAfter} {
        content: "NEW!";
        position: absolute;
        top: 5px;
        left: calc(100% - 40px - 5px);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 20px;
        background-color: #00a060;
        border-radius: 25px;
        font-size: 10px;
    }

    &[data-type="2"][data-hot="true"][data-new="true"]::before {
        left: calc(100% - 80px - 7.5px);
    }

    &[data-type="3"] {
        width: 200px;
        background-color: #354050;
        color: #ffffaa;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 15px;
        text-decoration: none;
    }
    &[data-type="3"]:hover {
        background-color: #152030;
    }
    &[data-type="3"][data-sparkles="true"]::after {
        content: "";
        position: absolute;
        top: 10px;
        right: 15px;
        width: 30px;
        height: 30px;
        background-color: #c46cf7;
        clip-path: polygon(50% 0, 40% 40%, 0 50%, 40% 60%, 50% 100%, 60% 60%, 100% 50%, 60% 40%);
    }

    @media screen and (max-width: 480px) {
        &[data-type="1"] {
            border: 1px solid #ffffaa;
            border-radius: 25px;
            padding: 4px 10px;

        }
    }
`;