import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    padding: 20px;
`;

export const NameEN = styled.p`
    width: calc(30% - 10px);
    text-align: start;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const NameRU = styled.input`
    width: calc(70% - 10px);
`;

export const TextEN = styled.p`
    width: calc(30% - 10px);
    white-space: pre-line;
    text-align: start;
    line-height: 1.8;

 `;

 export const TextRU = styled.textarea`
    width: calc(70% - 10px);
    white-space: pre-line;
    resize: none;
 `;