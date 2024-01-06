import styled from "styled-components";

export const NavigationMenuCloseButton = styled.button`
    position: relative;
    left: 85%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 6px;
    transition: all 0.3s ease;

    &::after {
        content: "";
        width: 40%;
        height: 40%;
        background-color: rgba(255, 255, 255, 1);
        clip-path: polygon(10% 1%, 0 10%, 40% 50%, 0 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%);
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }

    &:hover::after {
        background-color: rgba(0, 0, 0, 1);
    }
`;