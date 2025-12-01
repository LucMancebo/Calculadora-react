

import styled from "styled-components";

export const ButtonContainer = styled.button`
    flex: 1;
    padding: 22px;
    border: none;

    background: ${({ operator }) => (operator ? "#FF8A00" : "#ff7300ff")};
    color: #FFF;

    font-size: 26px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    margin: 4px;

    cursor: pointer;
    transition: 0.2s ease;

    box-shadow: 0 3px 6px #00000025;

    &:hover {
        opacity: 0.85;
        transform: translateY(-2px);
    }

    &:active {
        transform: scale(0.97);
        opacity: 0.75;
    }
`;



export default ButtonContainer