"use client";
import { styled } from "styled-components";

const StyledSimpleInputGroup = styled.div`
    label{
        display: block;
    }

    input{
        display: block;
    }
`;

const SimpleInput = ({ name, type, text }) => {
    if (!name || !text || !type) return;
    return (
        <StyledSimpleInputGroup >
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
            />
        </StyledSimpleInputGroup >
    )
}

export default SimpleInput;