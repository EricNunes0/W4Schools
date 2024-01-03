import styled from "styled-components";

export const HomeSectionsLearnButton = styled.a`
    width: 200px;
    height: 45px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-decoration: none;
    transition: all 0.3s ease;

    &[class~="learn"] {
        background-color: #7080f0;
    }
    &[class~="reference"] {
        background-color: #304080;
    }
    &[class~="certification"] {
        background-color: #102060;
    }

    &:hover {
        filter: brightness(1.1);
        transform: scale(1.05);
    }
`;