import styled from "styled-components";

export const NavigationMoveButton = styled.button`
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    background-color: #101015;
    transition: all 0.3s ease;

    &#left {
        left: 0;
        /*background-image: linear-gradient(90deg, #101015 75%, transparent 100%);*/
    }
    &#left::before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        clip-path: polygon(45% 0, 75% 50%, 45% 100%, 20% 100%, 50% 50%, 20% 0);
        transform: scale(0.4) rotate(180deg);
    }

    &#right {
        right: 0;
        /*background-image: linear-gradient(90deg, transparent 0%, #101015 25%);*/
    }
    &#right::before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        clip-path: polygon(45% 0, 75% 50%, 45% 100%, 20% 100%, 50% 50%, 20% 0);
        transform: scale(0.4);
    }

    &:hover {
        background-color: #202025;
        background-image: unset;
    }

    &:active {
        background-color: #5075d0;
        background-image: unset;
    }
`;