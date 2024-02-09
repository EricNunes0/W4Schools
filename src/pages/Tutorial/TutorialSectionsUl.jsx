import styled from "styled-components";

export const TutorialSectionsUl = styled.ul`
    color: #f0f0f0;
    font-size: 14px;
    font-weight: 100;
    list-style-type: ${(prop) => prop.liststyle || "disc"};
    text-align: left;
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 15px;
    transition: all 0.3s ease;

    & > li {
        margin: 5px 0;
    }
`;