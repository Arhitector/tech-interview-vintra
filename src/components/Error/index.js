import React from "react";
import styled from 'styled-components';

const ErrorsWrap = styled.div`
    display: flex;
    justify-content: center;
    border: 3px solid #f00;
    padding: 0.75rem;
    margin: 0 20px 30px;
    color: #f00;
    font-weight: bold;
    text-align: center;
`;

const Errors = ({error}) => {
    if (!error) return null;
    return (
        <ErrorsWrap className="errors">{JSON.stringify(error)}</ErrorsWrap>
    );
}

export default Errors;