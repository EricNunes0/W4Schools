import styled from "styled-components";

let link = `rgba(20, 20, 255, 1)`;
let visited = `rgba(165, 10, 255, 1)`;
let active = `rgba(255, 10, 10, 1)`;
export const TutorialSectionsTagsFlexLink = styled.a`
    text-decoration: none;
    background-position-y: calc(100% - 2px);
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: all 0.3s ease;

    &:hover {
        background-size: 100% 1px;
    }

    &:link {
        background-image: linear-gradient(90deg, ${link}, ${link});
    }

    &:visited {
        background-image: linear-gradient(90deg, ${visited}, ${visited});
    }
    
    &:active {
        background-image: linear-gradient(90deg, ${active}, ${active});
    }
`;