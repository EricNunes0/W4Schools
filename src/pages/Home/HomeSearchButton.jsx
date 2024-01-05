import styled from "styled-components";

export const HomeSearchButton = styled.button`
    position: relative;
    background-color: #7080a0;
    background-image: url("svgs/search2.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40% 40%;
    width: ${(prop) => prop.width}px;
    height: ${(prop) => prop.height}px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    transition: all 0.3s ease;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(90deg, transparent 0%, transparent 35%, #ffffff 40%, #ffffff 60%, transparent 65%, transparent 100%);
        background-repeat: no-repeat;
        background-position: 0% 100%;
        background-size: 300% 100%;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        transition: all 0.5s ease;
    }

    &:hover {
        background-size: 50% 50%;
    }

    &:hover::after {
        background-position: 100% 100%;
    }

    @media screen and (max-width: 480px) {
        width: 80px;
    }
`;