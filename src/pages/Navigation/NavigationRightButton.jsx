import styled from "styled-components";

export const NavigationRightButton = styled.button`
    position: relative;
    height: 40px;
    background-color: transparent;
    background-position: center;
    background-size: 60% 60%;
    background-repeat: no-repeat;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: unset;
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.3s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &::before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    &[data-right="jobs"]::before {
        background-image: url("svgs/briefcase.svg");
    }
    &[data-right="spaces"]::before {
        background-image: url("svgs/code.svg");
    }
    &[data-right="certified"]::before {
        background-image: url("svgs/cart.svg");
    }
`;