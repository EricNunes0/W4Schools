import styled from "styled-components";

export const TutorialCode = styled.code`
    font-size: 14px;
    white-space: nowrap;

    @media screen and (max-width: 480px) {
        & {
            font-size: 12px;
        }
    }
`;