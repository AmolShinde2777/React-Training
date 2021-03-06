import React from 'react';
import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';
//import styled from 'styled-components';


const StyledDiv=styled.div`
    width: 40%;
    margin: 16px auto;
    border: 1px solid #ddd;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

@media (min-width: 500px){   
        width:450px;    
} 
`;

const person = (props) => {

    const style={
        //still a javascript prop name
        '@media (min-width: 500px)':{           
            width: '450px'
        }
    };

    return (
        // <div className="Person" style={style}>
        // {/* <div className="Person" style={style}> 
        <StyledDiv> 
            <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
        //  </div>
        //  </div>
    )
}

export default person;
//export default Radium(person);