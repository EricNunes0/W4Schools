import styled from "styled-components";

export const NavigationMenuSearchButton = styled.button`
    position: relative;
    width: 45px;
    height: 45px;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &::after {
        content: "";
        display: block;
        background-color: rgba(255, 255, 255, 0.8);
        clip-path: polygon(10% 1%, 0 10%, 40% 50%, 0 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 60% 50%, 100% 10%, 90% 0, 50% 40%);
        width: 25%;
        height: 25%;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;