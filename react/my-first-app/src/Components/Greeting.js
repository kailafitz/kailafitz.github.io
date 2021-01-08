import React from 'react'
import styled from 'styled-components'

const Styledh1 = styled.h1`
    font-size: 6em;
    color: red;
`

// function Greeting() {
//     return <h1>Hello, Kaila</h1>
// }

const Greeting = (props) => {
    console.log(props)
    return <Styledh1>Hello. My name is {props.name} and I am {props.age} years old.</Styledh1>
}

export default Greeting