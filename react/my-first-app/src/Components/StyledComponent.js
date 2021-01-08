import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    background-color: green;
`

const StyledInnerDiv = styled.div`
    display: flex;
    width: 20%;
    background-color: pink;
    margin: 10px;
`

export const StyledComponent = () => {
    return (
        <StyledDiv>
            <StyledInnerDiv>
                <h1>fuck off</h1>
            </StyledInnerDiv>
            <StyledInnerDiv>
                <h2>i hate this shit</h2>
            </StyledInnerDiv> 
            <StyledInnerDiv>
                <h3>i love this shit</h3>
            </StyledInnerDiv>            
        </StyledDiv>
    )
}
