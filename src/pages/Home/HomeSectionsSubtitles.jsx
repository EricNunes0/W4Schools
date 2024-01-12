import styled from "styled-components";

export const HomeSectionsSubtitles = styled.h1`
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    &[data-lang="html"]::before {
        content: "Linguagem de marcação para construir páginas web"
    }

    &[data-lang="css"]::before {
        content: "Linguagem de estilização de páginas web"
    }

    &[data-lang="javascript"]::before {
        content: "Linguagem de programação para páginas web"
    }

    &[data-lang="python"]::before {
        content: "Linguagem de programação popular"
    }
`;