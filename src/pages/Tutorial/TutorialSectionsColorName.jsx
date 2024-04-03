import styled from "styled-components";

export const TutorialSectionsColorName = styled.div`
    position: relative;
    background-color: transparent;
    color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32%;
    height: 120px;
    font-weight: bold;
    margin: 7.5px 0;

    & > a {
        color: unset;
        text-decoration: none;
    }
    & > a:nth-child(1) {
        font-size: 16px;
        opacity: 0.8;
    }
    & > a:nth-child(2) {
        font-size: 14px;
        opacity: 0.6;
    }

    @media screen and (max-width: 768px) {
        width: 45%;
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        font-size: 14px;
    }
`;