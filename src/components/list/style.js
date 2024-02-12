import styled from "styled-components";

export const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10%;

`;

export const ObjectData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;

    &:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:nth-child(odd) {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

export const Title = styled.p`
    align-items: start;
    padding: 0 20px 20px;
    font-size: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;