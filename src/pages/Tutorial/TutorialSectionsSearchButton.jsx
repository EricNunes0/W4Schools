import styled from "styled-components";

export const TutorialSectionsSearchButton = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: var(--search-height);
    height: var(--search-height);
    background-color: transparent;
    background-image: url("/svgs/search.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    filter: invert(0.5);
`;