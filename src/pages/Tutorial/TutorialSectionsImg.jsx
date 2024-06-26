import styled from "styled-components";

export const TutorialSectionsImg = styled.img`
    width: ${(prop) => prop.width || "auto"};
    max-width: 100%;
    color: #f0f0f0;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    vertical-align: middle;
`;