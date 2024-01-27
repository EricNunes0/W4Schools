import styled from "styled-components";

export const SidebarLateralButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: transparent;
    background-image: url("/svgs/menu.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    transition: all 0.3s ease;

    &:hover {
        background-color: #101015;
        filter: invert(1);
    }
`;