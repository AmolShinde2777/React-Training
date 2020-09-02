import React, { Component } from 'react';
import './App.css';
// import Radium from 'radium';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import Person from './Person/Person'

const StyledButton = styled.button`

background-color: ${props => props.alt ? 'red' : 'green'};
border: none;
color: white;
padding: 10px 25px;
textAlign: center;
textDecoration: none;
display: inline-block;
fontSize: 16px;
margin: 4px 2px;
cursor: pointer;

&:hover {
  background-color: #ccc;
  color: black;
}
`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: 'Ankush', age: '27' },
      { id: "2", name: 'Amol', age: '28' },
      { id: "3", name: 'Saurabh', age: '28' },
      { id: "4", name: 'Sagar', age: '29' }
    ]
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }

  nameChangedHadnler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = (event) => {
    const doesShowPersons = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPersons
    });
  }

  render() {
    const style = {
      backgroundColor: '#008CBA',
      border: 'none',
      color: 'white',
      padding: '10px 25px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: "#ccc",
        color: "black"
      }
    }


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHadnler(event, person.id)}
            />
          })}
        </div>
      )

      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: "blue",
        color: "black"
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //['red, 'bold']
    }

    return (
       //<StyleRoot>
      <div className="App">
        <h1><span role="img" aria-labelledby="cool" >&#128526;</span>React App<span role="img" aria-labelledby="cool" >&#128526;</span></h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button> */}
        {/* <StyledButton  onClick={this.togglePersonHandler}> Toggle Persons</StyledButton> */}
         <StyledButton alt={this.state.showPersons}   onClick={this.togglePersonHandler}>
          Toggle Persons
          </StyledButton>
        {persons}
      </div>
     //</StyleRoot>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Person name='Ankush' age='27'/>
      <Person name='Amol' age='28'>My Hobbie is playing Cricket</Person>
      <Person name='Majahar' age='28'/>
    </div>
  );
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello I am Amol'));
}*/

export default App;
//export default Radium(App);

