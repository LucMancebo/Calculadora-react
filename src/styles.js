import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: linear-gradient(135deg, #e95900ff, #ffffffff);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 20px;
`;

export const Content = styled.div`
    background: #FFF;
    width: 100%;
    max-width: 380px;

    border-radius: 12px;
    overflow: hidden;

    padding: 0 12px 12px;

    box-shadow: 0 6px 20px #00000030;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
   
`;

export const Columns = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
