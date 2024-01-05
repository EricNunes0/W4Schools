import styled from "styled-components";

export const FooterBottomIcon = styled.a`
    display: block;
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: grayscale(1) brightness(2);
    transition: all 0.3s ease;

    &[media="facebook"] {
        background-image: url("svgs/facebook.svg");
    }
    &[media="discord"] {
        background-image: url("svgs/discord.svg");
    }
    &[media="linkedin"] {
        background-image: url("svgs/linkedin.svg");
    }
    &[media="instagram"] {
        background-image: url("svgs/instagram.svg");
    }

    &:hover {
        filter: unset;
        transform: scale(1.1);
    }
`;