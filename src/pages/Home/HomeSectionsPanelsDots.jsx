import styled from "styled-components";

export const HomeSectionsPanelsDots = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &[data-color="red"] {
        background-color: #f04040;
    }

    &[data-color="yellow"] {
        background-color: #f0f040;
    }

    &[data-color="green"] {
        background-color: #40f040;
    }
`;