import styled from "styled-components";

export const Button = styled.button`
    position: fixed;
    right: 50px;
    top: 50px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    font-size: 20px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
