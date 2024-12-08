import styled from "styled-components";

export const TutorialSectionsA = styled.a`
    text-decoration: none;
    transition: all 0.3s ease;

    &[data-type="text"] {
        color: #f0f0f0;
        font-size: 14px;
        text-decoration: underline;
    }
    &[data-type="text"]:hover {
        color: #5075d0;
    }

    &[data-type="redirect"][data-wrap="true"] {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.3);
        color: #f0f0f0;
        font-size: 14px;
        font-weight: 100;
        text-align: center;
        border-radius: 3px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
    &[data-type="redirect"][data-wrap="true"]:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    @media screen and (max-width: 480px) {
        &[data-type="redirect"][data-wrap="true"] {
            width: 100%;
        }
    }
`;