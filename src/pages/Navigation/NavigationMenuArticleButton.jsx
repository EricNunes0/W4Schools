import styled from "styled-components";

export const NavigationMenuArticleButton = styled.a`
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
`;