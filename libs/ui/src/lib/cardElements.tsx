import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    padding: 20px;
    width: 150px;
    height: 180px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 15px 25px, rgba(0, 0, 0, 0.23) 0px 10px 10px;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const TextWrapper = styled.div`
    align-items: center;
    justify-content: center;
    color: black;
`;