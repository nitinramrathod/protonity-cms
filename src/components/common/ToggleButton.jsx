import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div``;

const StyledToggle = styled.input`
    display: none;

    &:checked + label {
        background: #f8a296;
        transition: all .3s ease;
        
        &::after {
            left: 27px;
        }
    }
    &:disabled + label {
        opacity: .2;
        cursor: not-allowed;
    
    }
`;

const StyledLabel = styled.label`
    position: relative;
    cursor: pointer;
    width: 44px;
    background: #D0C8CF;
    height: 20px;
    border-radius: 20px;
    box-shadow: inset 0 0 5px #0000003e;

    &::after {
        content: "";
        position: absolute;
        left: 3px;
        transition: all .3s ease;
        top: 50%;
        transform: translateY(-50%);
        height: 70%;
        aspect-ratio: 1;
        background: white;
        border-radius: 50%;
    }
`;

const ToggleButton = ({ checked,title, onChange, id, name, disabled }) => {
    return (
        <Wrapper title={title}>
            <StyledToggle
            disabled={disabled}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                id={id}
            />
            <StyledLabel htmlFor={id}></StyledLabel>
        </Wrapper>
    );
};

export default ToggleButton;
