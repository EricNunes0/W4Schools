import styled from "styled-components";

export const TutorialSectionsButton = styled.button`
    width: ${(prop) => prop.width || "150px"};
    height: ${(prop) => prop.height || "35px"};
    color: #f0f0f0;
    font-size: 14px;
    font-weight: 100;
    text-align: center;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 15px;
    transition: all 0.3s ease;

    &[data-type="0"] {
        background-color: rgba(255, 255, 255, 0.3);
    }
    &[data-type="0"]:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &[data-type="1"] {
        background-color: #5075d0;
    }
    &[data-type="1"]:hover {
        background-color: #3055b0;
    }
`;